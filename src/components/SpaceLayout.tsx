import React, { Suspense, useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useScroll } from "framer-motion";
import { ReactLenis } from "lenis/react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform vec2 uResolution;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform sampler2D uTexture;

  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // 1. Subtle Mouse Parallax (Shifts the entire image slightly opposite to the mouse)
    vec2 parallax = (uMouse - 0.5) * 0.02;
    uv -= parallax;

    // 2. Interactive Mouse Cursor Lens
    // Correct aspect ratio so the mouse distortion is perfectly round, not oval
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 uvAspect = uv * aspect;
    vec2 mouseAspect = uMouse * aspect;

    // Calculate distance from current pixel to the mouse cursor
    float distToMouse = length(uvAspect - mouseAspect);
    
    // Create a smooth, localized distortion ONLY around the mouse cursor
    // The distortion strength fades out smoothly at a radius of 0.25
    float lensStrength = smoothstep(0.25, 0.0, distToMouse) * 0.035;
    
    // Apply the localized warp (with a tiny offset to prevent division by zero)
    uv -= normalize(uvAspect - mouseAspect + vec2(0.0001)) * lensStrength;

    // 3. Cinematic Scroll Zoom
    // Zooms into the exact center of the screen as you scroll down
    vec2 center = vec2(0.5, 0.5);
    float zoom = 1.0 + (sin(uScroll * 3.14159265) * 1.2); 
    uv = ((uv - center) / zoom) + center;

    // 4. Sample the Original Texture
    // clamp() prevents the edges of the image from repeating/wrapping during the zoom/parallax
    vec4 color = texture2D(uTexture, clamp(uv, 0.0, 1.0));

    // 5. Subtle Edge Vignette
    // Gently darkens the outer corners of the screen to focus attention on your UI
    float vignette = 1.0 - smoothstep(0.6, 1.5, length(vUv - 0.5));
    color.rgb *= vignette;

    gl_FragColor = vec4(color.rgb, 1.0);
  }
`;

function SpaceMaterialPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport, size } = useThree();
  const { scrollYProgress } = useScroll();

  const texture = useTexture("/assets/cosmos-wormhole-5200x3250-9652.jpg");

  useEffect(() => {
    if (texture) {
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
    }
  }, [texture]);

  // Global mouse tracking (initialized to center of screen)
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map mouse coordinates to standard 0.0 -> 1.0 UV space
      targetMouse.current.x = e.clientX / window.innerWidth;
      targetMouse.current.y = 1.0 - (e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const uniforms = useMemo(
    () => ({
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTexture: { value: texture },
    }),
    [size, texture]
  );

  useFrame(() => {
    if (materialRef.current) {
      // Smoothly interpolate the scroll progress
      materialRef.current.uniforms.uScroll.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uScroll.value,
        scrollYProgress.get(),
        0.08
      );
      
      // Smoothly interpolate the mouse position for a fluid cursor effect
      materialRef.current.uniforms.uMouse.value.lerp(targetMouse.current, 0.1);
      
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

function FallbackVoid() {
  return (
    <mesh>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="#050014" />
    </mesh>
  );
}

interface SpaceLayoutProps {
  children: React.ReactNode;
}

export default function SpaceLayout({ children }: SpaceLayoutProps) {
  useEffect(() => {
    const audio = new Audio("/assets/interstellar.mp3");
    audio.loop = true;
    audio.volume = 0.35;

    const startAudio = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    };

    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("scroll", startAudio, { once: true });

    return () => {
      audio.pause();
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, infinite: false }}>
      <main className="relative min-h-screen w-full bg-[#050014] text-white">
      <div className="fixed inset-0 z-0 h-screen w-screen pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 1], fov: 75, near: 0.01, far: 100 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={<FallbackVoid />}>
            <SpaceMaterialPlane />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
      </main>
    </ReactLenis>
  );
}
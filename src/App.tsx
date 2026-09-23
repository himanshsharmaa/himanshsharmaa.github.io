import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { motion } from 'framer-motion';
import {
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import CustomCursor from './components/CustomCursor';
import SpaceLayout from './components/SpaceLayout';
import Navbar from './components/Navbar';
import PortfolioAssistant from './components/PortfolioAssistant';
import { navLinks } from './data/profile';
import { useActiveSection } from './hooks/useActiveSection';

import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import SkillsSection from './sections/SkillsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import TimelineSection from './sections/TimelineSection';

import blackHoleVertexShader from './shaders/blackHoleVertex';
import blackHoleFragmentShader from './shaders/blackHoleFragment';

type PlanetType = 'moon' | 'mars' | 'jupiter' | 'saturn';

interface PlanetConfig {
  type: PlanetType;
  position: [number, number, number];
  radius: number;
  rotationSpeed: number;
}

interface ShootingStar {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  active: boolean;
  nextSpawn: number;
}

const planetConfigs: PlanetConfig[] = [
  {
    type: 'moon',
    position: [-30, 16, -58],
    radius: 1.25,
    rotationSpeed: 0.003,
  },
  {
    type: 'mars',
    position: [32, -14, -83],
    radius: 1.5,
    rotationSpeed: 0.0022,
  },
  {
    type: 'jupiter',
    position: [-47, 26, -122],
    radius: 3.6,
    rotationSpeed: 0.0017,
  },
  {
    type: 'saturn',
    position: [54, 9, -160],
    radius: 3.2,
    rotationSpeed: 0.0015,
  },
];

const constellationPlacements = [
  { position: [-34, 20, -52], scale: 1.2 },
  { position: [35, 22, -65], scale: 1.45 },
  { position: [-43, -20, -75], scale: 1.3 },
  { position: [44, -25, -91], scale: 1.5 },
  { position: [-55, 18, -112], scale: 1.65 },
  { position: [54, 31, -128], scale: 1.3 },
  { position: [-67, -31, -148], scale: 1.75 },
  { position: [66, -37, -166], scale: 1.5 },
  { position: [-79, 33, -185], scale: 1.85 },
  { position: [78, 29, -205], scale: 1.6 },
];

const constellationPatterns = [
  {
    points: [
      [-2, -1],
      [-1.1, 0.3],
      [-0.15, -0.15],
      [0.9, 0.35],
      [1.8, 1.2],
      [1.2, -1.1],
      [0.3, -0.65],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [2, 5],
      [5, 6],
      [6, 2],
    ],
  },
  {
    points: [
      [-1.8, 1],
      [-0.7, 1.5],
      [0.2, 0.8],
      [1.2, 1.25],
      [1.75, 0.1],
      [0.8, -0.7],
      [-0.3, -0.35],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 0],
    ],
  },
  {
    points: [
      [-1.9, 0.9],
      [-0.8, 1.15],
      [0.2, 0.55],
      [1.15, 0.75],
      [1.8, -0.2],
      [0.5, -0.7],
      [-0.8, -0.5],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 0],
    ],
  },
  {
    points: [
      [-1.8, 1.2],
      [-0.9, 0.4],
      [0, 1.1],
      [1, 0.3],
      [1.7, 1],
      [0.9, -0.8],
      [-0.2, -1.1],
      [-1.3, -0.45],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [3, 5],
      [5, 6],
      [6, 7],
      [7, 1],
    ],
  },
  {
    points: [
      [-1.8, -0.9],
      [-1.1, 0.5],
      [-0.3, 1.2],
      [0.7, 1.7],
      [1.4, 0.65],
      [1.8, -0.7],
      [0.65, -1.25],
      [-0.6, -1.45],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 0],
      [2, 6],
    ],
  },
  {
    points: [
      [-1.7, 1],
      [0, 1.8],
      [1.7, 1],
      [0.6, -1.25],
      [-0.7, -1.25],
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [0, 2],
    ],
  },
];

function randomGaussian(): number {
  let u = 0;
  let v = 0;

  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  return Math.sqrt(-2 * Math.log(u)) * Math.cos(
    Math.PI * 2 * v,
  );
}

// PERFORMANCE FIX: Reduced size from 512 to 256 for faster initial load
function createCanvasTexture(
  type: PlanetType,
  size = 256,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');

  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error(
      'Unable to create planet texture canvas.',
    );
  }

  const image = context.createImageData(
    size,
    size,
  );

  const data = image.data;

  for (let y = 0; y < size; y += 1) {
    const v = y / size;

    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const index = (y * size + x) * 4;

      const noise =
        Math.sin(
          u * 41.0 + type.length,
        ) *
          0.5 +
        Math.sin(
          v * 73.0 + u * 11.0,
        ) *
          0.3 +
        Math.sin(
          (u + v) * 125.0,
        ) *
          0.2;

      let r = 0;
      let g = 0;
      let b = 0;

      if (type === 'moon') {
        const value = 125 + noise * 38;

        r = value;
        g = value;
        b = value + 4;

        const crater1 =
          Math.sin(u * 190.0) *
          Math.sin(v * 150.0) *
          Math.sin((u + v) * 71.0);

        if (crater1 > 0.78) {
          r -= 34;
          g -= 34;
          b -= 30;
        }
      }

      if (type === 'mars') {
        r = 150 + noise * 38;
        g = 57 + noise * 18;
        b = 40 + noise * 12;

        const canyon =
          Math.sin(
            u * 25.0 +
              Math.sin(v * 19.0),
          ) *
          Math.sin(v * 41.0);

        if (canyon > 0.48) {
          r -= 36;
          g -= 17;
          b -= 10;
        }

        if (v < 0.08 || v > 0.92) {
          r += 35;
          g += 28;
          b += 24;
        }
      }

      if (type === 'jupiter') {
        const bands =
          Math.sin(v * Math.PI * 26.0);

        const bandNoise = noise * 0.18;

        if (bands > 0.45) {
          r = 183 + bandNoise * 45;
          g = 147 + bandNoise * 35;
          b = 116 + bandNoise * 28;
        } else {
          r = 112 + bandNoise * 35;
          g = 88 + bandNoise * 28;
          b = 78 + bandNoise * 22;
        }

        const stormX = u - 0.68;
        const stormY = v - 0.63;

        if (
          (stormX * stormX) / 0.02 +
            (stormY * stormY) / 0.008 <
          1
        ) {
          r = 188;
          g = 91;
          b = 66;
        }
      }

      if (type === 'saturn') {
        const bands =
          Math.sin(v * Math.PI * 18.0);

        if (bands > 0.25) {
          r = 195 + noise * 22;
          g = 169 + noise * 20;
          b = 130 + noise * 15;
        } else {
          r = 135 + noise * 20;
          g = 120 + noise * 18;
          b = 96 + noise * 15;
        }
      }

      data[index] =
        THREE.MathUtils.clamp(r, 0, 255);

      data[index + 1] =
        THREE.MathUtils.clamp(g, 0, 255);

      data[index + 2] =
        THREE.MathUtils.clamp(b, 0, 255);

      data[index + 3] = 255;
    }
  }

  context.putImageData(image, 0, 0);

  const texture =
    new THREE.CanvasTexture(canvas);

  texture.colorSpace =
    THREE.SRGBColorSpace;

  texture.anisotropy = 4;

  return texture;
}

function createConstellation(
  patternIndex: number,
): THREE.Group {
  const pattern =
    constellationPatterns[
      patternIndex %
        constellationPatterns.length
    ];

  const group =
    new THREE.Group();

  const starPositions =
    pattern.points.map(
      ([x, y]) =>
        new THREE.Vector3(
          x * 3.2,
          y * 3.2,
          0,
        ),
    );

  const starGeometry =
    new THREE.BufferGeometry().setFromPoints(
      starPositions,
    );

  const starMaterial =
    new THREE.PointsMaterial({
      color: 0xe0f2fe,
      size: 0.052,
      transparent: true,
      opacity: 0.34,
      blending:
        THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      sizeAttenuation: true,
    });

  const stars =
    new THREE.Points(
      starGeometry,
      starMaterial,
    );

  group.add(stars);

  const linePositions: number[] = [];

  pattern.lines.forEach(
    ([startIndex, endIndex]) => {
      const start =
        starPositions[startIndex];

      const end =
        starPositions[endIndex];

      linePositions.push(
        start.x,
        start.y,
        start.z,
        end.x,
        end.y,
        end.z,
      );
    },
  );

  const lineGeometry =
    new THREE.BufferGeometry();

  lineGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(
      linePositions,
      3,
    ),
  );

  const lineMaterial =
    new THREE.LineBasicMaterial({
      color: 0xbae6fd,
      transparent: true,
      opacity: 0.12,
      blending:
        THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
    });

  const lines =
    new THREE.LineSegments(
      lineGeometry,
      lineMaterial,
    );

  group.add(lines);

  return group;
}

export default function App() {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null,
    );

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const activeSection =
    useActiveSection(navLinks);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    let frameId = 0;
    let disposed = false;

    const scene =
      new THREE.Scene();

    const camera =
      new THREE.PerspectiveCamera(
        50,
        window.innerWidth /
          Math.max(
            window.innerHeight,
            1,
          ),
        0.1,
        600,
      );

    const renderer =
      new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference:
          'high-performance',
      });

    // PERFORMANCE FIX: Cap pixel ratio on mobile so UnrealBloomPass doesn't lag
    const isMobile = window.innerWidth < 768;
    const currentPixelRatio = Math.min(
      window.devicePixelRatio,
      isMobile ? 1 : 1.5
    );

    renderer.setPixelRatio(currentPixelRatio);

    renderer.setSize(
      window.innerWidth,
      window.innerHeight,
      false,
    );

    renderer.setClearColor(
      0x000000,
      0,
    );

    renderer.outputColorSpace =
      THREE.SRGBColorSpace;

    renderer.toneMapping =
      THREE.ACESFilmicToneMapping;

    // CONTRAST FIX: Lowered exposure from 1.15 to 0.95 to dim the 3D background slightly
    renderer.toneMappingExposure = 0.95;

    const composer =
      new EffectComposer(renderer);

    composer.setPixelRatio(currentPixelRatio);

    composer.setSize(
      window.innerWidth,
      window.innerHeight,
    );

    const renderPass =
      new RenderPass(
        scene,
        camera,
      );

    composer.addPass(
      renderPass,
    );

    const bloomPass =
      new UnrealBloomPass(
        new THREE.Vector2(
          window.innerWidth,
          window.innerHeight,
        ),
        0.72,
        0.42,
        0.72,
      );

    composer.addPass(
      bloomPass,
    );

    /* --------------------------------------------------
       LIGHTING
    -------------------------------------------------- */

    const ambientLight =
      new THREE.AmbientLight(
        0xdbeafe,
        0.14,
      );

    scene.add(
      ambientLight,
    );

    const directionalLight =
      new THREE.DirectionalLight(
        0xffffff,
        1.65,
      );

    directionalLight.position.set(
      -40,
      30,
      25,
    );

    scene.add(
      directionalLight,
    );

    /* --------------------------------------------------
       CAMERA PATH
    -------------------------------------------------- */

    const cameraPath =
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(
          0,
          1.5,
          12,
        ),
        new THREE.Vector3(
          6,
          4,
          3,
        ),
        new THREE.Vector3(
          5,
          -1,
          1,
        ),
        new THREE.Vector3(
          -6,
          -2,
          -1,
        ),
        new THREE.Vector3(
          3,
          1,
          -4,
        ),
        new THREE.Vector3(
          -3,
          3,
          -5,
        ),
        new THREE.Vector3(
          0,
          1.5,
          -7,
        ),
      ]);

    const lookPath =
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(
          0,
          1.5,
          -9,
        ),
        new THREE.Vector3(
          0.5,
          1.8,
          -9,
        ),
        new THREE.Vector3(
          0.2,
          1.5,
          -9,
        ),
        new THREE.Vector3(
          -0.5,
          1.2,
          -9,
        ),
        new THREE.Vector3(
          0.3,
          1.5,
          -9,
        ),
        new THREE.Vector3(
          -0.2,
          1.7,
          -9,
        ),
        new THREE.Vector3(
          0,
          1.5,
          -9,
        ),
      ]);

    const cameraPosition =
      new THREE.Vector3();

    const lookPosition =
      new THREE.Vector3();

    let targetScroll = 0;
    let currentScroll = 0;

    let mouseX = 0;
    let mouseY = 0;

    /* --------------------------------------------------
       STAR FIELD
    -------------------------------------------------- */

    const starCount = 6000;

    const starPositions =
      new Float32Array(
        starCount * 3,
      );

    for (
      let i = 0;
      i < starCount;
      i += 1
    ) {
      const index = i * 3;

      starPositions[index] =
        (Math.random() - 0.5) *
        150;

      starPositions[index + 1] =
        (Math.random() - 0.5) *
        150;

      starPositions[index + 2] =
        -Math.random() * 190;
    }

    const starGeometry =
      new THREE.BufferGeometry();

    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        starPositions,
        3,
      ),
    );

    const starMaterial =
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.08,
        transparent: true,
        opacity: 0.75,
        depthWrite: false,
        depthTest: true,
        sizeAttenuation: true,
      });

    const stars =
      new THREE.Points(
        starGeometry,
        starMaterial,
      );

    scene.add(stars);

    /* --------------------------------------------------
       DUST
    -------------------------------------------------- */

    const dustCount = 1600;

    const dustPositions =
      new Float32Array(
        dustCount * 3,
      );

    for (
      let i = 0;
      i < dustCount;
      i += 1
    ) {
      const index = i * 3;

      dustPositions[index] =
        (Math.random() - 0.5) *
        90;

      dustPositions[index + 1] =
        (Math.random() - 0.5) *
        55;

      dustPositions[index + 2] =
        -15 -
        Math.random() * 95;
    }

    const dustGeometry =
      new THREE.BufferGeometry();

    dustGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        dustPositions,
        3,
      ),
    );

    const dustMaterial =
      new THREE.PointsMaterial({
        color: 0x67e8f9,
        size: 0.018,
        transparent: true,
        opacity: 0.11,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
        sizeAttenuation: true,
      });

    const dust =
      new THREE.Points(
        dustGeometry,
        dustMaterial,
      );

    scene.add(dust);

    /* --------------------------------------------------
       CONSTELLATIONS
    -------------------------------------------------- */

    const constellationGroup =
      new THREE.Group();

    constellationPlacements.forEach(
      (
        placement,
        index,
      ) => {
        const constellation =
          createConstellation(
            index,
          );

        constellation.position.set(
          placement.position[0],
          placement.position[1],
          placement.position[2],
        );

        constellation.scale.setScalar(
          placement.scale,
        );

        constellation.rotation.set(
          (Math.random() - 0.5) *
            0.16,
          (Math.random() - 0.5) *
            0.12,
          (Math.random() - 0.5) *
            0.18,
        );

        constellationGroup.add(
          constellation,
        );
      },
    );

    scene.add(
      constellationGroup,
    );

    /* --------------------------------------------------
       BLACK HOLE
    -------------------------------------------------- */

    const bhCenter =
      new THREE.Vector3(
        0,
        1.5,
        -9,
      );

    // PERFORMANCE FIX: Reduced black hole segments from 128 to 64
    const blackHoleGeometry =
      new THREE.SphereGeometry(
        1.5,
        64,
        64,
      );

    const blackHoleMaterial =
      new THREE.ShaderMaterial({
        vertexShader:
          blackHoleVertexShader,

        fragmentShader:
          blackHoleFragmentShader,

        uniforms: {
          uTime: {
            value: 0,
          },

          uCameraPosition: {
            value:
              new THREE.Vector3(),
          },
        },

        transparent: false,
        depthWrite: true,
        depthTest: true,
      });

    const blackHole =
      new THREE.Mesh(
        blackHoleGeometry,
        blackHoleMaterial,
      );

    blackHole.position.copy(
      bhCenter,
    );

    scene.add(
      blackHole,
    );

    /* --------------------------------------------------
       ACCRETION DISK
    -------------------------------------------------- */

    // PERFORMANCE FIX: Reduced disk particles from 9000 to 5000
    const diskCount = 5000;

    const diskPositions =
      new Float32Array(
        diskCount * 3,
      );

    const diskColors =
      new Float32Array(
        diskCount * 3,
      );

    const coreColor =
      new THREE.Color(
        0xf0f9ff,
      );

    const blueColor =
      new THREE.Color(
        0x38bdf8,
      );

    const roseColor =
      new THREE.Color(
        0xf43f5e,
      );

    const diskTempColor =
      new THREE.Color();

    for (
      let i = 0;
      i < diskCount;
      i += 1
    ) {
      const index = i * 3;

      const radialDensity =
        Math.pow(
          Math.random(),
          0.72,
        );

      const radius =
        2.65 +
        radialDensity * 5.35;

      const angle =
        Math.random() *
        Math.PI *
        2;

      const thickness =
        0.12 +
        (1 -
          radialDensity) *
          0.24;

      diskPositions[index] =
        Math.cos(angle) *
        radius;

      diskPositions[index + 1] =
        randomGaussian() *
        thickness;

      diskPositions[index + 2] =
        Math.sin(angle) *
        radius;

      const normalizedRadius =
        THREE.MathUtils.clamp(
          (radius - 2.65) /
            5.35,
          0,
          1,
        );

      if (
        normalizedRadius <
        0.38
      ) {
        diskTempColor.lerpColors(
          coreColor,
          blueColor,
          normalizedRadius /
            0.38,
        );
      } else {
        diskTempColor.lerpColors(
          blueColor,
          roseColor,
          (normalizedRadius -
            0.38) /
            0.62,
        );
      }

      const jitter =
        0.88 +
        Math.random() * 0.22;

      diskColors[index] =
        diskTempColor.r *
        jitter;

      diskColors[index + 1] =
        diskTempColor.g *
        jitter;

      diskColors[index + 2] =
        diskTempColor.b *
        jitter;
    }

    const diskGeometry =
      new THREE.BufferGeometry();

    diskGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(
        diskPositions,
        3,
      ),
    );

    diskGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(
        diskColors,
        3,
      ),
    );

    const diskMaterial =
      new THREE.PointsMaterial({
        size: 0.05,
        transparent: true,
        opacity: 0.92,
        vertexColors: true,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
        sizeAttenuation: true,
      });

    const disk =
      new THREE.Points(
        diskGeometry,
        diskMaterial,
      );

    disk.position.copy(
      bhCenter,
    );

    disk.rotation.x =
      Math.PI * 0.32;

    scene.add(disk);

    /* --------------------------------------------------
       DISTANT PLANETS
       Saturn is intentionally ringless.
    -------------------------------------------------- */

    const planetGroup =
      new THREE.Group();

    const planetObjects: Array<{
      mesh: THREE.Mesh;
      rotationSpeed: number;
    }> = [];

    const planetTextures: THREE.Texture[] =
      [];

    planetConfigs.forEach(
      (config) => {
        const texture =
          createCanvasTexture(
            config.type,
          );

        planetTextures.push(
          texture,
        );

        // PERFORMANCE FIX: Reduced planet segments from 96 to 48
        const geometry =
          new THREE.SphereGeometry(
            config.radius,
            48,
            48,
          );

        const material =
          new THREE.MeshStandardMaterial(
            {
              map: texture,
              roughness:
                config.type ===
                'jupiter'
                  ? 0.82
                  : 0.95,
              metalness: 0,
              emissive:
                new THREE.Color(
                  0x050608,
                ),
              emissiveIntensity:
                0.035,
            },
          );

        const mesh =
          new THREE.Mesh(
            geometry,
            material,
          );

        mesh.position.set(
          config.position[0],
          config.position[1],
          config.position[2],
        );

        mesh.rotation.set(
          Math.random() * 0.35,
          Math.random() *
            Math.PI,
          Math.random() * 0.25,
        );

        planetGroup.add(
          mesh,
        );

        planetObjects.push({
          mesh,
          rotationSpeed:
            config.rotationSpeed,
        });
      },
    );

    scene.add(
      planetGroup,
    );

    /* --------------------------------------------------
       SHOOTING STARS
    -------------------------------------------------- */

    const shootingStars: ShootingStar[] =
      [];

    const shootingStarGeometry =
      new THREE.CylinderGeometry(
        0.004,
        0.012,
        1.25,
        6,
      );

    const shootingStarMaterial =
      new THREE.MeshBasicMaterial({
        color: 0xe0f2fe,
        transparent: true,
        opacity: 0.22,
        blending:
          THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: true,
      });

    for (
      let i = 0;
      i < 2;
      i += 1
    ) {
      const mesh =
        new THREE.Mesh(
          shootingStarGeometry,
          shootingStarMaterial.clone(),
        );

      mesh.visible = false;

      scene.add(mesh);

      shootingStars.push({
        mesh,
        velocity:
          new THREE.Vector3(),
        life: 0,
        maxLife: 1,
        active: false,
        nextSpawn:
          5 +
          Math.random() * 16,
      });
    }

    const spawnShootingStar = (
      shootingStar: ShootingStar,
    ) => {
      const side =
        Math.random() > 0.5
          ? 1
          : -1;

      shootingStar.mesh.position.set(
        side *
          (20 +
            Math.random() * 26),

        8 +
          (Math.random() - 0.5) *
            15,

        -28 -
          Math.random() * 75,
      );

      const direction =
        new THREE.Vector3(
          -0.72 * side,
          -0.16,
          -1,
        ).normalize();

      const speed =
        0.045 +
        Math.random() * 0.018;

      shootingStar.velocity
        .copy(direction)
        .multiplyScalar(speed);

      shootingStar.mesh.quaternion.setFromUnitVectors(
        new THREE.Vector3(
          0,
          1,
          0,
        ),
        direction,
      );

      shootingStar.life = 0;

      shootingStar.maxLife =
        0.7 +
        Math.random() * 0.55;

      shootingStar.active =
        true;

      shootingStar.mesh.visible =
        true;
    };

    /* --------------------------------------------------
       INPUT
    -------------------------------------------------- */

    const handleScroll =
      () => {
        targetScroll =
          window.scrollY ||
          window.pageYOffset ||
          0;
      };

    const handleMouseMove = (
      event: globalThis.MouseEvent,
    ) => {
      mouseX =
        event.clientX /
          Math.max(
            window.innerWidth,
            1,
          ) -
        0.5;

      mouseY =
        0.5 -
        event.clientY /
          Math.max(
            window.innerHeight,
            1,
          );
    };

    const handleResize =
      () => {
        const width =
          window.innerWidth;

        const height =
          Math.max(
            window.innerHeight,
            1,
          );

        camera.aspect =
          width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(
          width,
          height,
          false,
        );

        composer.setSize(
          width,
          height,
        );

        // Update pixel ratio capping on resize
        const isMobileResize = window.innerWidth < 768;
        const newPixelRatio = Math.min(
          window.devicePixelRatio,
          isMobileResize ? 1 : 1.5
        );

        renderer.setPixelRatio(
          newPixelRatio,
        );

        composer.setPixelRatio(
          newPixelRatio,
        );
      };

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'resize',
      handleResize,
    );

    handleScroll();

    /* --------------------------------------------------
       ANIMATION
    -------------------------------------------------- */

    const clock =
      new THREE.Clock();

    const animate = () => {
      if (disposed) return;

      frameId =
        window.requestAnimationFrame(
          animate,
        );

      const delta =
        Math.min(
          clock.getDelta(),
          0.05,
        );

      const elapsedTime =
        clock.elapsedTime;

      currentScroll +=
        (targetScroll -
          currentScroll) *
        0.015;

      const maxScroll =
        Math.max(
          document.documentElement
            .scrollHeight -
            window.innerHeight,
          1,
        );

      const rawPercent =
        THREE.MathUtils.clamp(
          currentScroll /
            maxScroll,
          0,
          0.99,
        );

      /* Camera */

      cameraPath.getPointAt(
        rawPercent,
        cameraPosition,
      );

      lookPath.getPointAt(
        rawPercent,
        lookPosition,
      );

      camera.position.set(
        cameraPosition.x +
          mouseX * 0.4,

        cameraPosition.y +
          mouseY * 0.4,

        cameraPosition.z,
      );

      camera.lookAt(
        lookPosition,
      );

      /* Stars */

      stars.rotation.y +=
        delta * 0.006;

      stars.rotation.x +=
        delta * 0.00045;

      /* Dust */

      dust.rotation.y +=
        delta * 0.0025;

      /* Constellations */

      constellationGroup.position.y =
        Math.sin(
          elapsedTime * 0.08,
        ) *
        0.05;

      /* Planets */

      planetObjects.forEach(
        ({
          mesh,
          rotationSpeed,
        }) => {
          mesh.rotation.y +=
            rotationSpeed *
            delta *
            60;

          mesh.rotation.x +=
            rotationSpeed *
            delta *
            3;
        },
      );

      planetGroup.position.y =
        Math.sin(
          elapsedTime * 0.12,
        ) *
        0.045;

      planetGroup.position.x =
        Math.cos(
          elapsedTime * 0.09,
        ) *
        0.035;

      /* Black hole */

      blackHole.position.copy(
        bhCenter,
      );

      blackHole.position.y +=
        Math.sin(
          elapsedTime * 0.4,
        ) *
        0.08;

      blackHole.rotation.y =
        elapsedTime * 0.045;

      blackHoleMaterial.uniforms.uTime.value =
        elapsedTime;

      blackHoleMaterial.uniforms.uCameraPosition.value.copy(
        camera.position,
      );

      /* Accretion disk */

      disk.position.copy(
        blackHole.position,
      );

      disk.rotation.z =
        elapsedTime * 0.05 +
        currentScroll * 0.0008;

      /* Shooting stars */

      shootingStars.forEach(
        (
          shootingStar,
        ) => {
          if (
            !shootingStar.active
          ) {
            shootingStar.nextSpawn -=
              delta;

            if (
              shootingStar.nextSpawn <=
              0
            ) {
              spawnShootingStar(
                shootingStar,
              );
            }

            return;
          }

          const movement =
            shootingStar.velocity
              .clone()
              .multiplyScalar(
                delta * 60,
              );

          shootingStar.mesh.position.add(
            movement,
          );

          shootingStar.life +=
            delta;

          const progress =
            shootingStar.life /
            shootingStar.maxLife;

          const fade =
            Math.sin(
              Math.PI *
                progress,
            );

          const material =
            shootingStar.mesh
              .material as THREE.MeshBasicMaterial;

          material.opacity =
            0.22 * fade;

          if (
            shootingStar.life >=
            shootingStar.maxLife
          ) {
            shootingStar.active =
              false;

            shootingStar.mesh.visible =
              false;

            shootingStar.nextSpawn =
              8 +
              Math.random() * 15;
          }
        },
      );

      composer.render();
    };

    animate();

    /* --------------------------------------------------
       CLEANUP
    -------------------------------------------------- */

    return () => {
      disposed = true;

      window.cancelAnimationFrame(
        frameId,
      );

      window.removeEventListener(
        'scroll',
        handleScroll,
      );

      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      );

      window.removeEventListener(
        'resize',
        handleResize,
      );

      starGeometry.dispose();
      starMaterial.dispose();

      dustGeometry.dispose();
      dustMaterial.dispose();

      diskGeometry.dispose();
      diskMaterial.dispose();

      blackHoleGeometry.dispose();
      blackHoleMaterial.dispose();

      shootingStarGeometry.dispose();

      shootingStars.forEach(
        (
          shootingStar,
        ) => {
          const material =
            shootingStar.mesh
              .material;

          if (
            material instanceof
            THREE.Material
          ) {
            material.dispose();
          }
        },
      );

      constellationGroup.traverse(
        (object) => {
          if (
            object instanceof
            THREE.Mesh
          ) {
            object.geometry.dispose();

            if (
              object.material instanceof
              THREE.Material
            ) {
              object.material.dispose();
            }
          }

          if (
            object instanceof
            THREE.Points
          ) {
            object.geometry.dispose();

            if (
              object.material instanceof
              THREE.Material
            ) {
              object.material.dispose();
            }
          }

          if (
            object instanceof
            THREE.LineSegments
          ) {
            object.geometry.dispose();

            if (
              object.material instanceof
              THREE.Material
            ) {
              object.material.dispose();
            }
          }
        },
      );

      planetObjects.forEach(
        ({ mesh }) => {
          mesh.geometry.dispose();

          if (
            mesh.material instanceof
            THREE.Material
          ) {
            mesh.material.dispose();
          }

          mesh.removeFromParent();
        },
      );

      planetTextures.forEach(
        (texture) => {
          texture.dispose();
        },
      );

      composer.dispose();
      renderer.dispose();
    };
  }, []);

  const handleNavigate = (
    event: MouseEvent<
      HTMLElement
    >,
    hash: string,
  ) => {
    event.preventDefault();

    setMobileMenuOpen(false);

    const normalizedTarget =
      hash.startsWith('#')
        ? hash.slice(1)
        : hash;

    if (
      normalizedTarget ===
        'home' ||
      normalizedTarget === ''
    ) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    const element =
      document.getElementById(
        normalizedTarget,
      );

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative isolate min-h-screen w-full bg-transparent">
      <CustomCursor />

      <div
        className="
          fixed inset-0
          z-0
          h-full w-full
          bg-[url('/space-bg.jpeg')]
          bg-cover
          bg-[position:center_center]
          bg-no-repeat
        "
      />

      <canvas
        ref={canvasRef}
        className="
          fixed inset-0
          z-[1]
          h-full w-full
          pointer-events-none
        "
      />

      {/* CONTRAST FIX 1: Darkened base overlay to force UI elements to pop out */}
      <div
        className="
          fixed inset-0
          z-[2]
          pointer-events-none
          bg-black/50
        "
      />

      {/* CONTRAST FIX 2: Harsh vignette - keeps center lit but darkens borders aggressively where text lives */}
      <div
        className="fixed inset-0 z-[3] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at center,
              transparent 0%,
              rgba(0, 0, 0, 0.4) 40%,
              rgba(0, 0, 0, 0.85) 100%
            )
          `,
        }}
      />

      <div className="relative z-20">
        <SpaceLayout>
          <motion.div
            initial={{
              clipPath:
                'inset(50% 0 50% 0)',
            }}
            animate={{
              clipPath:
                'inset(0% 0 0% 0)',
            }}
            transition={{
              duration: 2.2,
              ease: [
                0.77,
                0,
                0.175,
                1,
              ],
              delay: 0.1,
            }}
            className="relative overflow-hidden"
          >
            <Navbar
              activeSection={
                activeSection
              }
              mobileMenuOpen={
                mobileMenuOpen
              }
              onToggleMobileMenu={() =>
                setMobileMenuOpen(
                  (value) =>
                    !value,
                )
              }
              onNavigate={
                handleNavigate
              }
            />

            <main
              className="
                relative z-20
                mx-auto
                flex w-full
                max-w-[1200px]
                flex-col
                px-6
                md:px-12
                divide-y
                divide-white/[0.06]
              "
            >
              <HeroSection
                onNavigate={
                  handleNavigate
                }
              />

              <AboutSection />

              <ServicesSection />

              <TimelineSection />

              <SkillsSection />

              <ProjectsSection />

              <TestimonialsSection />

              <ContactSection />
            </main>

            <FooterSection />

            <PortfolioAssistant />
          </motion.div>
        </SpaceLayout>
      </div>
    </div>
  );
}
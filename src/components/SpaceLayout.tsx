import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";

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
  <div className="relative w-full bg-transparent text-white">
    <div className="relative z-20 w-full bg-transparent">{children}</div>
  </div>
</ReactLenis>
  );
}
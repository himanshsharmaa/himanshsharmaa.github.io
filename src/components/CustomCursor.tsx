import {
  useEffect,
  useState,
} from 'react';

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] =
    useState(false);

  const [isHovering, setIsHovering] =
    useState(false);

  const [isPressed, setIsPressed] =
    useState(false);

  // -------------------------------------------------------------------------
  // RAW POINTER
  // -------------------------------------------------------------------------

  const rawMouseX =
    useMotionValue(-100);

  const rawMouseY =
    useMotionValue(-100);

  // -------------------------------------------------------------------------
  // SMOOTH LENS POSITION
  // -------------------------------------------------------------------------

  const smoothMouseX =
    useSpring(rawMouseX, {
      stiffness: 750,
      damping: 38,
      mass: 0.18,
    });

  const smoothMouseY =
    useSpring(rawMouseY, {
      stiffness: 750,
      damping: 38,
      mass: 0.18,
    });

  // -------------------------------------------------------------------------
  // MAGNETIC OFFSET
  // -------------------------------------------------------------------------

  const magneticX =
    useMotionValue(0);

  const magneticY =
    useMotionValue(0);

  const smoothMagneticX =
    useSpring(magneticX, {
      stiffness: 520,
      damping: 31,
      mass: 0.22,
    });

  const smoothMagneticY =
    useSpring(magneticY, {
      stiffness: 520,
      damping: 31,
      mass: 0.22,
    });

  const lensX =
    useTransform(
      [
        smoothMouseX,
        smoothMagneticX,
      ],
      ([x, magnetic]) =>
        Number(x) +
        Number(magnetic),
    );

  const lensY =
    useTransform(
      [
        smoothMouseY,
        smoothMagneticY,
      ],
      ([y, magnetic]) =>
        Number(y) +
        Number(magnetic),
    );

  // -------------------------------------------------------------------------
  // SUBTLE VELOCITY TILT
  // -------------------------------------------------------------------------

  const velocityX =
    useMotionValue(0);

  const velocityY =
    useMotionValue(0);

  const rotate =
    useTransform(
      velocityX,
      [-40, 0, 40],
      [-7, 0, 7],
    );

  const skew =
    useTransform(
      velocityY,
      [-40, 0, 40],
      [5, 0, -5],
    );

  // -------------------------------------------------------------------------
  // POINTER EVENTS
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (
      window.matchMedia(
        '(pointer: coarse)',
      ).matches
    ) {
      return;
    }

    const interactiveSelector =
      'a, button, input, textarea, select, [role="button"]';

    let previousX = -100;
    let previousY = -100;

    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      const x =
        event.clientX;

      const y =
        event.clientY;

      rawMouseX.set(x);
      rawMouseY.set(y);

      // -------------------------------------------------------------
      // Velocity
      // -------------------------------------------------------------

      const dx =
        x - previousX;

      const dy =
        y - previousY;

      velocityX.set(
        Math.max(
          -40,
          Math.min(40, dx),
        ),
      );

      velocityY.set(
        Math.max(
          -40,
          Math.min(40, dy),
        ),
      );

      previousX = x;
      previousY = y;

      setIsVisible(true);

      // -------------------------------------------------------------
      // Magnetic attraction
      // -------------------------------------------------------------

      const target =
        event.target instanceof
        Element
          ? event.target.closest(
              interactiveSelector,
            )
          : null;

      if (
        target instanceof
        HTMLElement
      ) {
        const rect =
          target.getBoundingClientRect();

        const targetX =
          rect.left +
          rect.width / 2;

        const targetY =
          rect.top +
          rect.height / 2;

        const dxTarget =
          targetX - x;

        const dyTarget =
          targetY - y;

        const distance =
          Math.sqrt(
            dxTarget *
              dxTarget +
              dyTarget *
                dyTarget,
          );

        const magneticRadius =
          Math.max(
            90,
            Math.min(
              180,
              Math.max(
                rect.width,
                rect.height,
              ) * 2,
            ),
          );

        if (
          distance <
          magneticRadius
        ) {
          const strength =
            Math.max(
              0,
              1 -
                distance /
                  magneticRadius,
            );

          magneticX.set(
            dxTarget *
              0.18 *
              strength,
          );

          magneticY.set(
            dyTarget *
              0.18 *
              strength,
          );
        } else {
          magneticX.set(0);
          magneticY.set(0);
        }
      } else {
        magneticX.set(0);
        magneticY.set(0);
      }
    };

    const handleMouseOver = (
      event: MouseEvent,
    ) => {
      const target =
        event.target instanceof
        Element
          ? event.target.closest(
              interactiveSelector,
            )
          : null;

      setIsHovering(
        target instanceof
          Element,
      );
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setIsPressed(false);

      magneticX.set(0);
      magneticY.set(0);
    };

    window.addEventListener(
      'mousemove',
      handleMouseMove,
    );

    window.addEventListener(
      'mouseover',
      handleMouseOver,
    );

    window.addEventListener(
      'mousedown',
      handleMouseDown,
    );

    window.addEventListener(
      'mouseup',
      handleMouseUp,
    );

    window.addEventListener(
      'mouseleave',
      handleMouseLeave,
    );

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      );

      window.removeEventListener(
        'mouseover',
        handleMouseOver,
      );

      window.removeEventListener(
        'mousedown',
        handleMouseDown,
      );

      window.removeEventListener(
        'mouseup',
        handleMouseUp,
      );

      window.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      );
    };
  }, [
    rawMouseX,
    rawMouseY,
    velocityX,
    velocityY,
    magneticX,
    magneticY,
  ]);

  // -------------------------------------------------------------------------
  // TOUCH DEVICES
  // -------------------------------------------------------------------------

  if (
    typeof window !== 'undefined' &&
    window.matchMedia(
      '(pointer: coarse)',
    ).matches
  ) {
    return null;
  }

  // -------------------------------------------------------------------------
  // RENDER
  // -------------------------------------------------------------------------

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">

      {/* =====================================================================
          MAIN LENS
      ===================================================================== */}

      <motion.div
        className="absolute left-0 top-0 rounded-full"
        style={{
          width: 64,
          height: 64,

          x: lensX,
          y: lensY,

          translateX: '-50%',
          translateY: '-50%',

          rotate,

          skewY: skew,

          backdropFilter:
            'blur(5px) contrast(160%) brightness(1.2)',

          WebkitBackdropFilter:
            'blur(5px) contrast(160%) brightness(1.2)',

          boxShadow:
            'inset 0 0 20px rgba(0, 0, 0, 0.95), 0 0 15px rgba(0, 0, 0, 0.5)',

          background:
            'rgba(0, 0, 0, 0.15)',
        }}
        animate={{
          scale:
            isPressed
              ? 0.72
              : isHovering
                ? 1.48
                : 1,

          opacity:
            isVisible
              ? 1
              : 0,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 420,
            damping: 24,
          },

          opacity: {
            duration: 0.15,
          },
        }}
      />

      {/* =====================================================================
          INNER POINTER
      ===================================================================== */}

      <motion.div
        className="absolute left-0 top-0 rounded-full"
        style={{
          width: 6,
          height: 6,

          x: rawMouseX,
          y: rawMouseY,

          translateX: '-50%',
          translateY: '-50%',

          background:
            'rgba(255,255,255,0.95)',

          boxShadow:
            '0 0 10px rgba(255,255,255,0.55)',
        }}
        animate={{
          scale:
            isPressed
              ? 0.55
              : isHovering
                ? 1.35
                : 1,

          opacity:
            isVisible
              ? 1
              : 0,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 500,
            damping: 25,
          },

          opacity: {
            duration: 0.1,
          },
        }}
      />

      {/* =====================================================================
          HOVER ORBIT
      ===================================================================== */}

      <motion.div
        className="absolute left-0 top-0 rounded-full border border-white/20"
        style={{
          width: 82,
          height: 82,

          x: lensX,
          y: lensY,

          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale:
            isHovering
              ? 1
              : 0.65,

          opacity:
            isHovering &&
            isVisible
              ? 0.5
              : 0,
        }}
        transition={{
          scale: {
            type: 'spring',
            stiffness: 350,
            damping: 22,
          },

          opacity: {
            duration: 0.18,
          },
        }}
      />
    </div>
  );
}
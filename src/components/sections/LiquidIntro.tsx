"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Props = {
  /** Path to the graphic image that becomes the persistent background */
  graphicSrc?: string;
};

/**
 * Full-viewport liquid handoff:
 *  - On scroll, gooey circles expand to reveal the image.
 *  - We also fade the video out and the image in using CSS variables:
 *      --video-opacity (1 ➜ 0)
 *      --backdrop-image-opacity (0 ➜ 1)
 *  - Section height ~1.7 pages so the effect completes around 1.5 pages.
 */
export default function LiquidIntro({
  graphicSrc = "/images/graphics/intro-graphic.jpg",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  // Progress is 0 when top of section hits top of viewport,
  // and 1 when bottom hits top (i.e., after ~170vh of scroll).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Goo radii (SVG viewBox is 1000x1000)
  const r1 = useTransform(scrollYProgress, [0, 0.9], [0, 1200]) as MotionValue<number>;
  const r2 = useTransform(scrollYProgress, [0, 0.9], [0, 950])  as MotionValue<number>;
  const r3 = useTransform(scrollYProgress, [0, 0.9], [0, 1100]) as MotionValue<number>;
  const r4 = useTransform(scrollYProgress, [0, 0.9], [0, 900])  as MotionValue<number>;
  const r5 = useTransform(scrollYProgress, [0, 0.9], [0, 1000]) as MotionValue<number>;

  // Fade the SVG overlay away near the end so only the persistent image remains
  const overlayOpacity = useTransform(scrollYProgress, [0.75, 0.98], [1, 0]);

  // Drive CSS variables for cross-fading video ↔ image.
  useEffect(() => {
    const root = document.documentElement;

    const unsub = scrollYProgress.on("change", (v) => {
      // Tune these to taste; by v≈0.9 the image is fully on and video is gone.
      const start = 0.60; // start blending
      const end = 0.90;   // finish by ~1.5 pages
      let t = (v - start) / (end - start);
      t = Math.max(0, Math.min(1, t));

      // Image fades in & stays (used by BackdropImage)
      root.style.setProperty("--backdrop-image-opacity", String(t));
      // Video fades out (used by the wrapper in page.tsx)
      root.style.setProperty("--video-opacity", String(1 - t));
    });

    return () => {
      unsub();
      root.style.removeProperty("--backdrop-image-opacity");
      root.style.removeProperty("--video-opacity");
    };
  }, [scrollYProgress]);

  return (
    // Height controls how long the handoff takes (~1.7 screens)
    <section ref={ref} className="relative h-[170vh]">
      <motion.svg
        className="fixed inset-0 z-[2] pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: overlayOpacity }}
        aria-hidden
      >
        <defs>
          {/* Gooey filter so circles merge into a liquid shape */}
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              result="goo"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 28 -18"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          {/* White reveals, black hides */}
          <mask id="reveal" x="0" y="0" width="1000" height="1000">
            <rect width="1000" height="1000" fill="black" />
            <g filter="url(#goo)" fill="white">
              {/* Bind MotionValue directly to SVG attribute `r` (not style) */}
              <motion.circle cx={200} cy={320} r={r1} />
              <motion.circle cx={760} cy={310} r={r2} />
              <motion.circle cx={520} cy={620} r={r3} />
              <motion.circle cx={900} cy={680} r={r4} />
              <motion.circle cx={110} cy={720} r={r5} />
            </g>
          </mask>
        </defs>

        {/* The image revealed by the gooey mask */}
        <image
          href={graphicSrc}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#reveal)"
        />
      </motion.svg>
    </section>
  );
}

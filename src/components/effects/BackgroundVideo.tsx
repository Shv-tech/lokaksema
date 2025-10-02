"use client";

import { useEffect, useRef } from "react";

type Props = {
  mp4?: string;
  webm?: string;
  poster?: string;
  opacity?: number;          // 0–1
  className?: string;        // pass z-index from the page
};

export default function BackgroundVideo({
  mp4 = "/videos/hero-loop.mp4",
  webm,
  poster = "/images/venue/hero-poster.jpg",
  opacity = 0.28,
  className = "",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    play();
    const onVis = () => !document.hidden && play();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="metadata"
        poster={poster}
        style={{ opacity }}
      >
        {webm ? <source src={webm} type="video/webm" /> : null}
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}

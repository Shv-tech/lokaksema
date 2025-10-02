"use client";

type Props = { src: string; className?: string };

export default function BackdropImage({ src, className = "" }: Props) {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <img
        src="/images/venue/hero-poster.jpg"
        alt=""
        className="h-full w-full object-cover"
        // fades in when LiquidIntro updates the CSS variable
        style={{ opacity: "var(--backdrop-image-opacity, 0)" }}
      />
    </div>
  );
}

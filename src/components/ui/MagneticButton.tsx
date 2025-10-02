"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

/** Magnetic CTA using framer-motion */
export default function MagneticButton({ href, children, className = "btn btn-primary" }: Props) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 300, damping: 20, mass: 0.4 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * 0.15);
        my.set((e.clientY - r.top - r.height / 2) * 0.15);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      style={{ x, y }}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

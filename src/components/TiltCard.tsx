import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  baseRotateDeg?: number;
  className?: string;
}

export function TiltCard({ children, baseRotateDeg = 0, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (0.5 - y) * 14,
      ry: (x - 0.5) * 14,
      gx: x * 100,
      gy: y * 100,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotate(${baseRotateDeg}deg) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${
          tilt.active ? 1.03 : 1
        })`,
        transition: tilt.active
          ? 'transform 120ms ease-out'
          : 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-[24px] transition-opacity duration-300"
        style={{
          opacity: tilt.active ? 0.35 : 0,
          background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(111, 219, 212, 0.35), transparent 60%)`,
        }}
      />
    </div>
  );
}

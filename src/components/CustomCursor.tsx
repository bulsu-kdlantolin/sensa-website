import React, { useEffect, useState } from 'react';

export default function CustomCursor({ isDark }: { isDark: boolean }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, label, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Hide default cursor on body when CustomCursor is active
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center Dot (Inverts colors behind it) */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference transition-all duration-150 ease-out`}
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: 'white',
          transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0) scale(${isHovering ? 4 : 1})`,
          opacity: isHovering ? 0.2 : 1,
        }}
      />
      
      {/* Outer Glow Ring (Trails slightly via transition) */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border transition-all duration-300 ease-out shadow-[0_0_15px_rgba(10,68,255,0.4)] ${
          isDark ? 'border-blue-400' : 'border-blue-600'
        }`}
        style={{
          width: '36px',
          height: '36px',
          transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0 : 0.8,
        }}
      />
    </>
  );
}

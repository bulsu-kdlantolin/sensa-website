import { useEffect, useRef } from 'react';

export default function NeuralCanvas({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let particles: Particle[] = [];

    // Responsive configuration based on viewport dimensions
    const getResponsiveConfig = (width: number, height: number) => {
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;

      if (isMobile) {
        return {
          numParticles: Math.max(14, Math.min(18, Math.floor((width * height) / 24000))),
          maxDistance: 65,
          particleRadius: 2.0,
          lineWidth: 1.0,
          particleAlpha: isDark ? 0.6 : 0.4,
          lineAlphaMultiplier: isDark ? 0.35 : 0.22,
          speedMultiplier: 0.5,
          repulseDist: 65,
        };
      } else if (isTablet) {
        return {
          numParticles: Math.max(26, Math.min(34, Math.floor((width * height) / 25000))),
          maxDistance: 105,
          particleRadius: 2.8,
          lineWidth: 1.4,
          particleAlpha: isDark ? 0.7 : 0.6,
          lineAlphaMultiplier: isDark ? 0.6 : 0.45,
          speedMultiplier: 0.75,
          repulseDist: 85,
        };
      } else {
        return {
          numParticles: 60,
          maxDistance: 150,
          particleRadius: 3.5,
          lineWidth: 1.8,
          particleAlpha: 0.8,
          lineAlphaMultiplier: 0.85,
          speedMultiplier: 1.0,
          repulseDist: 100,
        };
      }
    };

    let currentConfig = getResponsiveConfig(
      canvas.offsetWidth || window.innerWidth,
      canvas.offsetHeight || window.innerHeight
    );
    const color = isDark ? '255, 122, 47' : '37, 99, 235';

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * currentConfig.speedMultiplier;
        this.vy = (Math.random() - 0.5) * currentConfig.speedMultiplier;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary reflection with clamping
        if (this.x < 0) {
          this.x = 0;
          this.vx = Math.abs(this.vx);
        } else if (this.x > width) {
          this.x = width;
          this.vx = -Math.abs(this.vx);
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy = Math.abs(this.vy);
        } else if (this.y > height) {
          this.y = height;
          this.vy = -Math.abs(this.vy);
        }

        // Mouse & Touch interaction (gentle repulsion)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < currentConfig.repulseDist) {
          this.x -= dx * 0.04;
          this.y -= dy * 0.04;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentConfig.particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${currentConfig.particleAlpha})`;
        ctx.fill();
      }
    }

    const init = () => {
      const w = canvas.offsetWidth || window.innerWidth;
      const h = canvas.offsetHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      currentConfig = getResponsiveConfig(w, h);
      particles = [];
      for (let i = 0; i < currentConfig.numParticles; i++) {
        particles.push(new Particle(Math.random() * w, Math.random() * h));
      }
    };

    const animate = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
          p.update(canvas.width, canvas.height);
          p.draw(ctx);

          for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < currentConfig.maxDistance) {
              ctx.beginPath();
              const alpha = (1 - dist / currentConfig.maxDistance) * currentConfig.lineAlphaMultiplier;
              ctx.strokeStyle = `rgba(${color}, ${alpha})`;
              ctx.lineWidth = currentConfig.lineWidth;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };
    const handleTouchEnd = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-80 sm:opacity-90 md:opacity-100 transition-opacity duration-1000"
    />
  );
}

'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetOpacity: number;
  pulsePhase: number;
}

interface ClickEffect {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const MouseTracker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotsRef = useRef<Dot[]>([]);
  const clickEffectsRef = useRef<ClickEffect[]>([]);
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize dots
  useEffect(() => {
    const initDots = () => {
      // Increased dot density for more constellation points
      const numDots = Math.floor((dimensions.width * dimensions.height) / 8000);
      dotsRef.current = [];
      
      for (let i = 0; i < numDots; i++) {
        dotsRef.current.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          targetOpacity: Math.random() * 0.8 + 0.2,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    if (dimensions.width > 0 && dimensions.height > 0) {
      initDots();
    }
  }, [dimensions]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      // Create click effect
      clickEffectsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 150,
        opacity: 1,
        life: 60,
        maxLife: 60,
      });

      // Affect nearby dots
      dotsRef.current.forEach(dot => {
        const distance = Math.sqrt(
          Math.pow(dot.x - e.clientX, 2) + Math.pow(dot.y - e.clientY, 2)
        );
        
        if (distance < 200) {
          // Push dots away from click
          const angle = Math.atan2(dot.y - e.clientY, dot.x - e.clientX);
          const force = (200 - distance) / 200 * 3;
          dot.vx += Math.cos(angle) * force;
          dot.vy += Math.sin(angle) * force;
          
          // Make them brighter temporarily
          dot.targetOpacity = Math.min(1, dot.targetOpacity + 0.5);
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update dots
      dotsRef.current.forEach(dot => {
        // Move dots
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) {
          dot.vx *= -1;
          dot.x = Math.max(0, Math.min(canvas.width, dot.x));
        }
        if (dot.y <= 0 || dot.y >= canvas.height) {
          dot.vy *= -1;
          dot.y = Math.max(0, Math.min(canvas.height, dot.y));
        }

        // Add some friction
        dot.vx *= 0.995;
        dot.vy *= 0.995;

        // Random movement
        dot.vx += (Math.random() - 0.5) * 0.02;
        dot.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxVel = 2;
        if (Math.abs(dot.vx) > maxVel) dot.vx = Math.sign(dot.vx) * maxVel;
        if (Math.abs(dot.vy) > maxVel) dot.vy = Math.sign(dot.vy) * maxVel;

        // Update opacity with pulsing effect
        dot.pulsePhase += 0.02;
        const pulse = Math.sin(dot.pulsePhase) * 0.1;
        dot.opacity += (dot.targetOpacity - dot.opacity) * 0.02;
        dot.targetOpacity += (Math.random() - 0.5) * 0.01;
        dot.targetOpacity = Math.max(0.1, Math.min(1, dot.targetOpacity));
      });

      // Update click effects
      clickEffectsRef.current = clickEffectsRef.current.filter(effect => {
        effect.radius += (effect.maxRadius - effect.radius) * 0.1;
        effect.life--;
        effect.opacity = effect.life / effect.maxLife;
        return effect.life > 0;
      });

      // Draw connections between nearby dots
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < dotsRef.current.length; i++) {
        for (let j = i + 1; j < dotsRef.current.length; j++) {
          const dot1 = dotsRef.current[i];
          const dot2 = dotsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          );

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3 * Math.min(dot1.opacity, dot2.opacity);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        }
      }

      // Draw connection from mouse to nearby dots
      const mouse = mouseRef.current;
      if (mouse.x > 0 && mouse.y > 0) {
        dotsRef.current.forEach(dot => {
          const distance = Math.sqrt(
            Math.pow(dot.x - mouse.x, 2) + Math.pow(dot.y - mouse.y, 2)
          );

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.4 * dot.opacity;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(dot.x, dot.y);
            ctx.stroke();
          }
        });
      }

      // Draw click effects
      clickEffectsRef.current.forEach(effect => {
        // Outer ring
        ctx.strokeStyle = `rgba(139, 92, 246, ${effect.opacity * 0.6})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glow
        const gradient = ctx.createRadialGradient(
          effect.x, effect.y, 0,
          effect.x, effect.y, effect.radius * 0.5
        );
        gradient.addColorStop(0, `rgba(139, 92, 246, ${effect.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw dots
      dotsRef.current.forEach(dot => {
        const finalOpacity = dot.opacity + Math.sin(dot.pulsePhase) * 0.1;
        
        // Main dot
        ctx.fillStyle = `rgba(99, 102, 241, ${finalOpacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, dot.size * 3
        );
        gradient.addColorStop(0, `rgba(99, 102, 241, ${finalOpacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw mouse cursor glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40);
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        pointerEvents: 'auto',
      }}
    />
  );
};

export default MouseTracker;
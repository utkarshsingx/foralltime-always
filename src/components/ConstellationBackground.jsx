// src/components/ConstellationBackground.jsx
import React, { useRef, useEffect } from 'react';

const ConstellationBackground = ({ revealConstellation = false }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      twinkle: 0
    }));

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleClick = () => {
      stars.forEach((star) => {
        const dist = Math.hypot(star.x - mouse.current.x, star.y - mouse.current.y);
        if (dist < 100) star.twinkle = 1;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";

      stars.forEach((star) => {
        const pulse = Math.sin(Date.now() * 0.002 + star.x) * 0.3;
        const twinkle = star.twinkle > 0 ? 1.5 : 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius + pulse + twinkle, 0, Math.PI * 2);
        ctx.fill();

        if (star.twinkle > 0) star.twinkle -= 0.02;
      });

      if (!revealConstellation) {
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const a = stars[i];
            const b = stars[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      if (revealConstellation) {
        ctx.strokeStyle = "rgba(255, 100, 200, 0.6)";
        const pattern = [
          [10, 15], [15, 22], [22, 30], [30, 10],
          [10, 40], [40, 60], [60, 70], [70, 10]
        ];
        pattern.forEach(([i, j]) => {
          const a = stars[i];
          const b = stars[j];
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        });
      }
    };

    const update = () => {
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        // Nearest stars are pulled slightly toward the cursor
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - star.x;
          const dy = mouse.current.y - star.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const pullStrength = (150 - dist) / 150 * 0.05;
            star.x += dx * pullStrength;
            star.y += dy * pullStrength;
          }
        }

        if (star.x < 0 || star.x > width) star.dx *= -1;
        if (star.y < 0 || star.y > height) star.dy *= -1;
      });
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [revealConstellation]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        background: "#0b0c10"
      }}
    />
  );
};

export default ConstellationBackground;

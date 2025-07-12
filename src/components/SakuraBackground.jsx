import React, { useEffect } from "react";
import "./sakura.css";

const SakuraBackground = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      document.querySelectorAll(".petals").forEach((petal) => {
        const speed = petal.getAttribute("data-speed") || 1;
        const offsetX = x * speed * 30;
        const offsetY = y * speed * 20;
        petal.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const petalsArray = Array.from({ length: 50 }); // Reasonable number for now

  return (
    <div className="sakura-container">
      {petalsArray.map((_, index) => (
        <div
          key={index}
          className={`petals`}
          data-speed={(Math.random() * 2 + 1).toFixed(2)}
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            top: `${-Math.random() * 100}px`,
          }}
        >
          <div className="petal"></div>
        </div>
      ))}
    </div>
  );
};

export default SakuraBackground;

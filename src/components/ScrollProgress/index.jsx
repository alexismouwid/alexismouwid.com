// ScrollProgress.jsx
import React, { useEffect, useState } from "react";
import "./ScrollProgress.css"; // Ver estilos abajo

const ScrollProgress = ({ total }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      const index = Math.round(scrollProgress * (total - 1));
      setCurrentStep(index);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, [total]);

  return (
    <div className="scroll-progress">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`dot ${index === currentStep ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ScrollProgress;


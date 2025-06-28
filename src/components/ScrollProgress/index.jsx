// ScrollProgress.jsx
import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = ({ totalSteps, visibleSteps }) => {
  const [currentVisible, setCurrentVisible] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      const currentStep = Math.round(scrollProgress * (totalSteps - 1));

      // visible steps: 1, 3, 5, ..., 17 (es decir, impares)
      const indexInVisible = visibleSteps.indexOf(currentStep);
      if (indexInVisible !== -1) {
        setCurrentVisible(indexInVisible);
      }
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, [totalSteps, visibleSteps]);

  return (
    <div className="scroll-progress">
      {visibleSteps.map((_, index) => (
        <div
          key={index}
          className={`dot ${index === currentVisible ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default ScrollProgress;


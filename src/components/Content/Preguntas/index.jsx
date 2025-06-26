import React, { useState, forwardRef, useEffect, useRef } from "react";
import { useVisibilityObserver } from "../../../utils/useVisibilityObserver";
import "./PreguntasFrecuentesDesktop.css";
import "./PreguntasFrecuentesMobile.css";

const preguntas = [
  {
    pregunta: "¿De dónde obtuviste tus conocimientos?",
    respuesta:
      "A través de formación autodidacta, cursos especializados y experiencia práctica.",
  },
  {
    pregunta: "¿Cuánto cobras por un proyecto?",
    respuesta:
      "Los precios varían según la complejidad y duración del proyecto. ¡Contáctame para una cotización!",
  },
  {
    pregunta: "¿Cómo puedo ayudarte a hacer crecer tu negocio?",
    respuesta:
      "Puedo ayudarte a destacar con diseños atractivos y funcionales que mejoran la experiencia del usuario, impulsan la interacción y fortalecen tu presencia digital.",
  },
];

const Preguntas = forwardRef((props, ref) => {


  useVisibilityObserver(".ejeX");

  const [activa, setActiva] = useState(null);
  const togglePregunta = (index) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <div ref={ref} id="preguntas-contenedor">
      <div id="preguntas-left ">
        <h2>
          Preguntas frecuentes
        </h2>
        <div id="preguntas-image"> <img src="./diseño.jpg" alt="preguntas" id="image-proyect" /></div>
      </div>

      <div id="preguntas-right " >
        {preguntas.map((item, index) => (
          <div key={index} id="preguntas-item">
            <div id="preguntas-pregunta ejeX" onClick={() => togglePregunta(index)}>
              <span>{item.pregunta}</span>
              <span id="icono">{activa === index ? "−" : "+"}</span>
            </div>
            {activa === index && (
              <div id="preguntas-respuesta">{item.respuesta}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Preguntas;


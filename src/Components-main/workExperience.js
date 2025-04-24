import React from 'react';
import "./WorkExperience.css"; // Importa el archivo CSS para estilos
import TimelineComponent from './timeline';
function WorkExperience() {
  return (
    <div>
    <section>
        <h2> <svg  xmlns="http://www.w3.org/2000/svg"  width="2rem"  height="2rem"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>Experiencia Laboral</h2>
        <TimelineComponent />
    </section>
</div>
  );
}

export default WorkExperience;
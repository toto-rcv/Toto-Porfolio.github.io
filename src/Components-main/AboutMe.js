import React from 'react';
import "./AboutMe.css"; // Importa el archivo CSS para estilos
function AboutMe() {
    return (
        <div className='about-me'>
            <section>
                <h2> <svg className="size-8" width="2rem" height="2rem" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>Sobre mí</h2>
                <div className='about-me-container'>
                    <p>Hola, soy Tomás Cejas, mis amigos me conocen como Roma. Mi primer acercamiento a la programación fue en la secundaria, <strong>donde empecé a crear proyectos con Scratch, y desde entonces no dejé de aprender.</strong></p>
                    <p>Actualmente, estudio la carrera de Analista de Sistemas en la Escuela ORT, y complemento mi formación académica con cursos extra en áreas como <strong> hacking ético y programación orientada a inteligencia artificial.</strong></p>
                    <p>Uno de mis exitos fue haber <strong>colaborado con la Fuerza Aérea Argentina en el desarrollo de S.A.D.A. (Sistema Aéreo de Detección Argentino)</strong>, una herramienta para mejorar la detección de incursiones aéreas ilegales.</p>
                </div>

            </section>
        </div>
    );
}

export default AboutMe;
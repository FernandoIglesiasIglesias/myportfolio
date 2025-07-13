import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
            <div className='profile-container'>
            <div className="profile">
                <div className="profile-picture-wrapper">
                  <img src="/foto_personal.jpeg" alt="Foto de perfil" className="profile-picture large-profile-picture" />
                </div>
                <div className="profile-text">
                <h1>Fernando Iglesias Iglesias</h1>
                <p>¡Hola! No soy una IA, soy un desarrollador Full Stack.</p>
                </div>
                <div className="profile-actions">
                <div className="cv-section">
                    <button className="cv-button" onClick={() => window.open('/cv.pdf', '_blank')}>Descargar CV</button>
                    <div className="social-links">
                    <a href="https://www.linkedin.com/in/fernando-iglesias-iglesias2/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" className="linkedin" />
                    </a>
                    <a href="https://github.com/FernandoIglesiasIglesias" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="GitHub" className="github" />
                    </a>
                    </div>
                    <p className="email-text">Correo electrónico: fernando.iglesias2@hotmail.com</p>
                </div>
                </div>
            </div>
            </div>
            <div className="about">
            <h2>
                <img src="/sobre_mi.png" alt="Logo significativo" className="about-logo" /> Sobre mí
            </h2>
            <p>Soy un ingeniero de software con ganas y entusiasmo de comenzar mi carrera laboral, aprender, con ímpetu, con capacidades sociales y muchas ganas de crecer profesionalmente.</p>
            <p>Además de mi formación técnica, destaco por mi capacidad de trabajo en equipo, comunicación y adaptación a nuevos entornos. Me apasiona la tecnología, el desarrollo web y la resolución de problemas complejos. Busco aportar valor en proyectos innovadores y seguir creciendo tanto a nivel profesional como personal y académico.</p>
            <h3>
                <img src="/estudios.png" alt="Logo estudios" className="studies-logo" /> Estudios
            </h3>
            <ul>
                <li>
                <img src="/udc.png" alt="Logo UDC" className="institution-logo" /> Graduado en Ingeniería Informática por la Universidad de A Coruña (2021-2025).
                </li>
                <li>
                <img src="/logo_viu.png" alt="Logo IUV" className="institution-logo" /> Máster en Desarrollo de Aplicaciones y Servicios Web en la Universidad Internacional de Valencia (En curso).
                </li>
            </ul>
            </div>
        </div>
    </section>
  );
};

export default Home;

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
            </div> {/* cierre de home-content */}
      <div className="projects-section">
        <h2>
          <span role="img" aria-label="Proyectos" style={{marginRight: '8px'}}>💻</span> Mis Proyectos
        </h2>
        <div className="projects-list">
          <div className="project-card">
            <div className="project-icon">🎬</div>
            <div>
              <h3>Cinematrix</h3>
              <p>Aplicación de gestión personalizada de películas desarrollada con Java, Spring Boot, Hibernate y JPA en el backend, y JavaScript + React en el frontend. Utiliza APIs externas para obtener información de películas, actores y directores, e implementa un algoritmo propio de recomendaciones personalizadas según las interacciones del usuario.</p>
              <div className="project-video-centered">
                <div className="project-video">
                  <iframe width="360" height="203" src="https://www.youtube.com/embed/BPJui4inpik" title="Demo Cinematrix" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="project-links project-links-centered">
                  <a href="https://github.com/FernandoIglesiasIglesias/Java-Web-Application-for-personalized-movie-management" target="_blank" rel="noopener noreferrer" className="project-link-btn">Repositorio en GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-icon">💼</div>
            <div>
              <h3>Portafolio personal</h3>
              <p>Mi sitio web profesional donde muestro mis proyectos, habilidades y experiencia como ingeniero de software.</p>
              <div className="project-links project-links-centered">
                <a href="https://github.com/FernandoIglesiasIglesias/myportfolio" target="_blank" rel="noopener noreferrer" className="project-link-btn">Repositorio en GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

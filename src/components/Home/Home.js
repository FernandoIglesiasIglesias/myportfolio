import React, { useEffect, useState } from 'react';
import './Home.css';
function useScrollReveal(selector, className = 'scroll-reveal') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add(className));
      return;
    }
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, className]);
}
const TYPED_TEXTS = [
  'Fernando Iglesias Iglesias',
  '¡Hola! No soy una IA, soy un desarrollador Full Stack.'
];

const Home = () => {
  const [typed, setTyped] = useState(['', '']);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    document.body.classList.add('page-fade-in');
    return () => document.body.classList.remove('page-fade-in');
  }, []);

  useEffect(() => {
    document.body.classList.add('page-fade-in');
    return () => document.body.classList.remove('page-fade-in');
  }, []);

  useScrollReveal('.project-card', 'scroll-reveal');
  useScrollReveal('.skills-group', 'scroll-reveal');

  useEffect(() => {
    let char = 0;
    const current = ['', ''];
    const timeouts = [];

    function typeLine(line) {
      if (char <= TYPED_TEXTS[line].length) {
        current[line] = TYPED_TEXTS[line].slice(0, char);
        setTyped([ ...current ]);
        timeouts.push(setTimeout(() => typeLine(line), 40)); 
        char++;
      } else if (line === 0) {
        char = 0;
        setTimeout(() => typeLine(1), 200);
      } else {
        setTimeout(() => setTypingDone(true), 200);
      }
    }
    typeLine(0);
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="home">
      <div className="home-content">
            <div className='profile-container'>
            <div className="profile">
                <div className="profile-picture-wrapper">
                  <img src="/foto_personal.jpeg" alt="Foto de perfil" className="profile-picture large-profile-picture" />
                </div>
                <div className="profile-text">
                  <h1>
                    {typed[0]}
                    {(!typingDone && typed[0].length === TYPED_TEXTS[0].length) ? null : (!typingDone && (typed[0].length < TYPED_TEXTS[0].length)) ? <span className="typed-cursor">|</span> : null}
                  </h1>
                  <p>
                    {typed[1]}
                    {!typingDone && typed[0].length === TYPED_TEXTS[0].length && <span className="typed-cursor">|</span>}
                  </p>
                </div>
                <div className="profile-actions" style={{ opacity: typingDone ? 1 : 0, transition: 'opacity 0.6s 0.1s' }}>
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
                    <p className="email-text">
                      Correo electrónico: fernando.iglesias2@hotmail.com
                      <button
                        className="copy-email-btn"
                        title="Copiar correo al portapapeles"
                        onClick={() => {
                          navigator.clipboard.writeText('fernando.iglesias2@hotmail.com');
                          if (window && window.document) {
                            const btn = document.querySelector('.copy-email-btn');
                            if (btn) {
                              btn.innerText = '¡Copiado!';
                              setTimeout(() => { btn.innerText = '📋'; }, 1200);
                            }
                          }
                        }}
                        style={{ marginLeft: 10, background: 'none', border: 'none', cursor: 'pointer', color: '#00d4ff', fontSize: '1.1em', verticalAlign: 'middle' }}
                      >📋</button>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="about" style={{ opacity: typingDone ? 1 : 0, transition: 'opacity 0.6s 0.3s' }}>
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
      <div
        className="projects-section"
        style={{
          opacity: typingDone ? 1 : 0,
          transition: 'opacity 0.6s 0.5s',
          display: typingDone ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{justifyContent: 'flex-start', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px'}}>
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
      <div
        className="skills-section"
        style={{
          opacity: typingDone ? 1 : 0,
          transition: 'opacity 0.6s 0.7s',
          display: typingDone ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{justifyContent: 'flex-start', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px'}}>
          <span className="skills-logo" role="img" aria-label="Habilidades" style={{marginRight: '8px', fontWeight: 'bold', fontSize: '1.5em'}}>&lt;/&gt;</span> Habilidades
        </h2>
        <ul className="skills-list">
          <li className="skills-group">
            <strong className="skills-title">Frontend</strong>
            <div className="skills-box skills-badges-row">
              <span className="skill-badge"><img src="/javascript.webp" alt="JavaScript" className="skill-icon" />JavaScript</span>
              <span className="skill-badge"><img src="/react.png" alt="React" className="skill-icon" />React</span>
              <span className="skill-badge"><img src="/html5.png" alt="HTML5" className="skill-icon" />HTML5</span>
              <span className="skill-badge"><img src="/css.png" alt="CSS3" className="skill-icon" />CSS3</span>
            </div>
          </li>
          <li className="skills-group">
            <strong className="skills-title">Backend</strong>
            <div className="skills-box skills-badges-row">
              <span className="skill-badge"><img src="/apirest.png" alt="Java" className="skill-icon" />Java</span>
              <span className="skill-badge"><img src="/springboot.png" alt="Spring Boot" className="skill-icon" />Spring Boot</span>
              <span className="skill-badge"><img src="/jpa.png" alt="JPA" className="skill-icon" />Hibernate y JPA</span>
            </div>
          </li>
          <li className="skills-group">
            <strong className="skills-title">Bases de datos</strong>
            <div className="skills-box skills-badges-row">
              <span className="skill-badge"><img src="/mysql.png" alt="MySQL" className="skill-icon" />MySQL</span>
              <span className="skill-badge"><img src="/postgre.png" alt="PostgreSQL" className="skill-icon" />PostgreSQL</span>
              <span className="skill-badge"><img src="/oracle.png" alt="Oracle Database" className="skill-icon" />Oracle</span>
            </div>
          </li>
          <li className="skills-group">
            <strong className="skills-title">Herramientas</strong>
            <div className="skills-box skills-badges-row">
              <span className="skill-badge"><img src="/git.webp" alt="Git" className="skill-icon" />Git</span>
              <span className="skill-badge"><img src="/postman.png" alt="Postman" className="skill-icon" />Postman</span>
              <span className="skill-badge"><img src="/docker.png" alt="Docker" className="skill-icon" />Docker</span>
              <span className="skill-badge"><img src="/jenkins.png" alt="Jenkins" className="skill-icon" />Jenkins</span>
              <span className="skill-badge"><img src="/redmine.png" alt="Redmine" className="skill-icon" />Redmine</span>
              <span className="skill-badge"><img src="/jira.png" alt="Jira" className="skill-icon" />Jira</span>
            </div>
          </li>
          <li className="skills-group">
            <strong className="skills-title">Otros</strong>
            <div className="skills-box skills-badges-row">
              <span className="skill-badge"><img src="/apirest.png" alt="APIs REST" className="skill-icon" />APIs REST</span>
              <span className="skill-badge"><img src="/csharp.png" alt="C#" className="skill-icon" />C#</span>
              <span className="skill-badge"><img src="/net.webp" alt=".NET" className="skill-icon" />.NET</span>
              <span className="skill-badge"><img src="/scrum.png" alt="Scrum" className="skill-icon" />Scrum</span>
            </div>
          </li>
        </ul>
      </div>

      <div
        className="certificates-section"
        style={{
          opacity: typingDone ? 1 : 0,
          transition: 'opacity 0.6s 0.9s',
          display: typingDone ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>
          <span className="certificates-logo" role="img" aria-label="Certificados">📄</span> Certificados
        </h2>
        <ul className="certificates-list" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, margin: 0 }}>
          <li className="certificate-card" style={{ display: 'flex', alignItems: 'center', gap: '18px', background: 'rgba(0, 0, 30, 0.85)', borderRadius: '12px', boxShadow: '0 2px 8px 0 rgba(0, 212, 255, 0.08)', padding: '18px 20px', transition: 'transform 0.18s, box-shadow 0.18s', fontSize: '1rem', color: '#fff', maxWidth: '600px', width: '100%', justifyContent: 'center' }}>
            <div className="certificate-icon" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src="/scrum.png" alt="Scrum" className="certificate-img" style={{width: '56px', height: '56px', objectFit: 'contain', borderRadius: '8px', background: 'white', padding: '4px'}} />
            </div>
            <div style={{textAlign: 'left'}}>
              <h3 className="certificate-name">Scrum Fundamentals Certified (SFC)</h3>
              <p className="certificate-desc">Certificación oficial en fundamentos de Scrum otorgada por SCRUMstudy.</p>
              <div className="certificate-links">
                <a
                  href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-FernandoIglesiasIglesias-1095889.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link-btn"
                >Ver certificado</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Home;

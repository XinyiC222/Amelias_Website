import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { motion } from 'framer-motion'
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './App.css'


function GitHubIcon() {
  return (
    <FaGithub size={30} />
  );
}
//the Data
const projects = [
    {
      id: 1,
      type: "Hardware",
      title: "Keyboard81X",
      image: "/keyboard81.png",
      description: "A custom keyboard powered by a Raspberry Pi Pico and KMK",
      tags: ["Python", "KiCad", "Fusion360", "KMK", "3d Printing", "Pi Pico"],
      repo: "https://github.com/XinyiC222/Keyboard81X"
    },
    {
      id: 2,
      type: "Hardware",
      title: "Achroma",
      image: "/achroma2.png",
      description: "A custom wireless split keyboard powered by ZMK",
      tags: ["ZMK", "Fusion360", "KiCad", "3d Printing"],
      repo: "https://github.com/XinyiC222/Achroma"
    },
    {
      id: 3,
      type: "Hardware",
      title: "Focus Display",
      image: "/Focus_Display.png",
      description: "A personal device that is powered by a ESP32 with an E-ink display.",
      tags: ["ESP32", "3d Printing", "Fusion360" , "C++"],
      repo: "https://github.com/XinyiC222/Focus_Display"
    }
  ]

const stickers = [
  {
    id: 1,
    name: "Music",
    image: "/sticker/guitarSticker.png",
    position: "top",
    side: "right",
    description: "I taught myself guitar back in 2020 during COVID. This is what I do to unwind after staring at the screen for too long!"
  },
  {
    id: 2,
    name: "Art",
    image: "/sticker/ArtSticker.png",
    position: "bottom",
    side: "left",
    description: "I like to paint during my free time! It's another way I unwind after a long day of school!"
  }
]

//The UI
function App() {
    const [activeSticker, setActiveSticker] = useState(null)

    return (
      <>
        <div className="scroll-edge-blur" aria-hidden="true" />

        <nav className = "navbar glass">
          <div className = "nav-logo">Amelia Chen</div>
            <ul className = "nav-links">
              <li><a href = "#home">Home</a></li>
              <li><a href = "#projects">Projects</a></li>
              <li><a href = "#about">About</a></li>
              <li><a href = "#contact">Contact</a></li>
            </ul>
        </nav>
        {/* Paper Cut outs */}
        {stickers.map((sticker) => (
          <button
            key={sticker.id}
            className={`sticker sticker-${sticker.side}`}
            style={{ [sticker.side === 'right' ? 'top' : 'bottom']: sticker.position }}
            onClick={() => setActiveSticker(sticker)}
            aria-label={`Learn more about ${sticker.name}`}
          >
            <img src={sticker.image} alt={sticker.name} />
          </button>
        ))}

        {/* Home */}
        <motion.section 
        id="home" 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        >
         <h1>Amelia Chen</h1> 
         
         <p>A 15 year old who's really into Hardware and Software.</p>
         <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-glass">Get in Touch</a>
        </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        >
          <div className="section-header">
            <h1 className="sketch-highlight">Selected Works</h1>
            <p>A collection of hardware and software builds.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="project-card glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.image && (
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={`Screenshot of the ${project.title} project`}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="project-content">
                  <div className="card-meta">
                    <span className="card-type">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    {/* Tags on the left */}
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>

                    {project.repo && (
                      <a
                        href={project.repo}
                        className="github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About */}
        <motion.section 
        id="about" 
        className="section-header" 
        style={{marginTop: '80px', marginBottom: '80px'}}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        >
        <h1 className="sketch-highlight">About Me</h1>
        <p>I'm a high school student who's really into building things. When I'm not doing Hack Club, I'm probably at Robotics. During my free time I like to make guitar covers on songs I like. I like going out to play basketball!</p>
        </motion.section>

        {/* Contact */}
        <motion.section 
        id="contact" 
        className="section-header" 
        style={{marginBottom: '80px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
          <h1 className="sketch-highlight">Get In Touch</h1>
          <p>Want to collaborate or just to shoot me a message? You can email me!</p>
          <div style={{marginTop: '24px', marginBottom: '50px'}}>
            <a href="mailto:xinyic222@gmail.com" className="btn btn-primary">Say Hello</a>
          </div>
          <div className="social-links d-flex gap-3">
            <a 
              href="https://github.com/Xinyic222" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a 
              href="https://www.tiktok.com/@xinyic23" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTiktok size={30} />
            </a>
            <a 
              href="www.linkedin.com/in/xinyi-chen-76b5543b8" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </motion.section>

        {/* footer */}
        <footer>
          <p>Designed & Built with React + Vite • © 2026</p>
        </footer>
      {/* Modal */}
      {activeSticker && (
        <div className="modal-overlay" onClick={() => setActiveSticker(null)}>
          <div className= "modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setActiveSticker(null)}
              aria-label="Close"
              >
                ×
              </button>
              <img src={activeSticker.image} alt={activeSticker.name} className="modal-image" />
              <h3>{activeSticker.name}</h3>
              <p>{activeSticker.description}</p>
          </div>
        </div>
      )}
      </>
  )
}

export default App

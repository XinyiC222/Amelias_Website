import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { motion } from 'framer-motion'
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './App.css'

//the Data
const projects = [
    {
      id: 1,
      type: "Hardware",
      title: "Keyboard81X",
      description: "A custom keyboard powered by a Raspberry Pi Pico and KMK",
      tags: ["Python", "KiCad", "Fusion360", "KMK", "3d Printing", "Pi Pico"]
    },
    {
      id: 2,
      type: "Hardware",
      title: "Achroma",
      description: "A custom wireless split keyboard powered by ZMK",
      tags: ["ZMK", "Fusion360", "KiCad", "3d Printing"]
    },
    {
      id: 3,
      type: "Hardware",
      title: "Focus Display",
      description: "A personal device that is powered by a ESP32 with an E-ink display.",
      tags: ["ESP32", "3d Printing", "Fusion360" , "C++"]
    }
  ]

//The UI
function App() {
    return (
      <>
        <div className="grid-background" aria-hidden="true" />
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
          <button className= "btn btn-primary">View Projects</button>
          <button className= "btn btn-glass">Get in Touch</button>
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
            {projects.map((project) => (
              <div key={project.id} className="project-card glass">
                <div className="project-tags">
                  {project.tags.map((tag,index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
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
      </>
  )

}

export default App

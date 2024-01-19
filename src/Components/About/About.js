import React from 'react';
import { Link } from 'react-router-dom';
import "./About.css"

const About = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <Link to="/" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <button>
                    Home
                </button>
            </Link>

            <h1>Charles Chiang</h1>
            <p>I'm a second year PhD Student at the University of Notre Dame, currently studying Human-Computer Interaction under Dr. Diego Gomez-Zara.</p>
            <p>This page is currently under construction, but you can find me at the links below:</p>
            
            
            <div class="container">
                <div class="item">
                    <a href="https://www.linkedin.com/in/chchchiang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div class="item">
                    <a href="https://github.com/charles-c-chiang">Github</a>
                </div>
            </div>
            
        </div>
    );
};

export default About;

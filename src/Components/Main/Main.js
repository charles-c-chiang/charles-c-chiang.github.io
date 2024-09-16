import React from 'react';
import "./Main.css"

import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div class="main">
            
            <head>
                <title>Charles Chiang</title>
            </head>

            <h1>Hi, I'm Charles Chiang</h1>
            <p>
                I'm a third year CSE PhD Student at the University of Notre Dame, studying 
                Human-Computer Interaction under Dr. Diego Gomez-Zara.
            </p>
            <p>This page is currently under construction, but you can find me at the links below:</p>

            <div class="container">
                <div class="item">
                    <a href="https://www.linkedin.com/in/chchchiang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div class="item">
                    <a href="https://github.com/charles-c-chiang" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div class="item">
                    <a href="https://hci.nd.edu/people/graduate-students/charles-chiang/" target="_blank" rel="noopener noreferrer">ND HCI</a>
                </div>
            </div>

            <p>
                Or, you can email me at <a href="mailto:cchiang3@nd.edu">cchiang3@nd.edu</a>
            </p>

            {/* <Link to="/about">
                <button>Go to About</button>
            </Link> */}
        </div>
    );
};

export default LandingPage;

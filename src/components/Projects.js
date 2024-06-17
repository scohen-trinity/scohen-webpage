import React from 'react';
import '../stylesheets/Navbar.css';
import '../stylesheets/App.css';
import '../stylesheets/Projects.css';

const Projects = () => {
    return (
        <section id='projects'>
          <div className='App-header'>
            <h5 className='Rusty-text'>Projects</h5>
            <h1 className='silver-text'>Check out what I've made!</h1>
            <div className='projects-container'>
              <div className='project-item'><a href='https://github.com/scohen-trinity/scohen-webpage'><img alt='' src='./portfolio.png'></img></a></div>
              <div className='project-item'><a href='https://github.com/scohen-trinity/rcloc'><img alt='' src='./rust.bmp'></img></a></div>
              <div className='project-item'><a href='https://github.com/scohen-trinity/blist'><img alt='' src='./bucket-list.bmp'></img></a></div>
            </div>
          </div>
        </section>
    );
};

export default Projects;

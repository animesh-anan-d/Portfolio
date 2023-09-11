import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              
            </article>
          </div>
          <p>
          As a passionate and motivated frontend development fresher, I bring a solid foundation in HTML, CSS, and JavaScript to create visually appealing and user-friendly web experiences. Through my academic studies and personal projects, I have honed my skills in crafting responsive designs, optimizing website performance, and collaborating effectively in cross-functional teams. I am dedicated to staying current with the latest industry trends and technologies, and I am excited to contribute my creativity and enthusiasm to building engaging and intuitive digital solutions
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

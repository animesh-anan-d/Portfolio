import "./portfolio.css";

import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Portfolio Website with React.js",
      img: IMG1,
      description:
        "Its a dynamic personal portfolio website to showcase my skills, projects, and accomplishments in a visually appealing and informative manner.",
     
      github: "https://github.com/animesh-anan-d/Portfolio",
    },
    {
      id: 2,
      title: "Expense Tracker App",
      img: IMG4,
      description:
        "It's an expense tracker app in which users can add and track their daily expenses",
      technologies: "Java | Android Studio",
      
      github: "https://github.com/animesh-anan-d/Expense_Tracker_Android_App",
    },
    {
      id: 3,
      title: "Chrome Extension Project",
      img: IMG2,
      description: "You click on this google chrome extension to get a random Joke every time.",
      technologies: "JavaScript | Api",
      
      github: "https://github.com/animesh-anan-d/jokesExtension",
    },
    {
      id: 4,
      title: "Weather App",
      img: IMG3,
      description:
        "This weather app uses the latest API data to provide you with precise and up-to-the-minute weather forecasts.",
      technologies: "Html | CSS | JavaScript | Api",
     
      github: "https://github.com/animesh-anan-d/weatherApp",
    },
    {
      id: 5,
      title: "Online Food Ordering System",
      img: IMG5,
      description:
        "Its an Online Food Ordering System in which users can order their food from the menu by sitting at their homes.",
      technologies: "SQL | PHP",
     
      github: "https://github.com/animesh-anan-d/Online_Food_Ordering",
    },
    {
      id: 6,
      title: "Travel App",
      img: IMG6,
      description:
        "Its a Travel App where we can search for desired places and can book the facilities which we want there at the time of visiting in advance",
      technologies: "Java | Android Studio",
      
      github: "https://github.com/animesh-anan-d/Travel-App",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
             
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

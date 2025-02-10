import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/Projects.css";
import ExternalLinks from "./ExternalLinks";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Campus Connect": {
        title: "campus connect",
        desc:
          "A mobile application designed to help university students connect.",
        techStack: "JavaScript React Native",
        link: "https://github.com/thesomaya/CampusConnect",
        //open: "",
        image: "/assets/7777.jpg"
      },
      "Project Management": {
        title: "Project Management",
        desc:
          "An app enabling efficient task tracking and team collaboration.",
        techStack: "Java Android Studio MySQL PHP",
        link: "https://github.com/thesomaya/ProjectManagementSystem",
        //open: "",
        image: "/assets/truth.png"
      },
      "Library Management System": {
        title: "Library Management System",
        desc:
          "Developed a Library Management System, providing features for cataloging books, managing user records, and streamlining borrowing and returns.",
        techStack: "Windows Forms C# MS SQL Server",
        link: "https://github.com/thesomaya/WindowsFormsAppS",
        //open: "",
        image: "/assets/5555.png"
      },
      "ANN Algorithm": {
        title: "ANN Algorithm",
        desc:
          "An algorithm that utilizes a neural network to find the optimal combination of items to maximize the total value without exceeding a given weight capacity.",
        techStack: "NODE.JS (EXPRESS.JS)",
        link: "https://github.com/thesomaya/Artificial-Neural-Network-Knapsack",
        //open: "",
        image: "/assets/2222.jpg"
      }
    };
    const projects = {
      /*
      "TDSB Homework Management Interface": {
        desc:
          "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
        techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
        link: "",
        open: ""
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Javascript, HTML / CSS",
        link: "",
        open: ""
      },
      "Distributed Logging and Monitoring System": {
        desc:
          "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          ""
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "",
        open: ""
      },
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "",
        open: ""
      },
      "Minimax Stonehenge": {
        desc:
          "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
        techStack: "Python",
        link: "",
        open: ""
      }
        */
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;

import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am a <b>Software Engineer</b>, 
        working on various projects that focus on AI and software development. 
        At the same time, I am undertaking a <b>Master's of Science</b> in <b>Computer Engineering </b> 
         at <a href="https://www.marmara.edu.tr/">Marmara University</a>.
      </p>

    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        generative ai, reading business books, and cooking.
      </p>
    );

    const tech_stack = [
      "Javascript",
      "React Native",
      "React.js",
      "Java",
      "Firebase",
      "Node.js"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Somaia Mohamed" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

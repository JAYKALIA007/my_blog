import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="about">
        <header>About Jay</header>
        <p>
          I have interests and experience in Software development. Mostly
          frontend development using{" "}
          <strong>
            <em>React.js</em>
          </strong>
          . I have been working with React.js for almost 7 months now. &nbsp;At
          the same time I have built some projects as well as written multiple
          blogposts.
        </p>
        <div className="skills" style={{ textAlign: "left" }}>
          <img
            id="image"
            align="right"
            src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif"
            alt="coding gif"
            width="250"
          />
          <header>Skills</header>
          <div className="skill">
            <p>
              <header>Languages</header>
              &nbsp;&nbsp;&nbsp;Java, JavaScript
            </p>
          </div>
          <div className="skill">
            <p>
              <header>Libraries</header>
              &nbsp;&nbsp;&nbsp;React JS, Redux
            </p>
          </div>
          <div className="skill">
            <p>
              <header>IT Constructs</header>
              &nbsp;&nbsp;&nbsp;Data Structures and Algorithms
            </p>
          </div>
          <div className="skill">
            <p>
              <header>Environment</header>
              &nbsp;&nbsp;&nbsp;GIT Bash
            </p>
          </div>
        </div>
        <div className="skills" style={{ textAlign: "left" }}>
          <header>Timeline</header>
          <div className="skill">
            <p>
              <header>2021</header>
              &nbsp;&nbsp;&nbsp;<strong>Full time</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software developer [TCS Digital,
              Bangalore] <br />
              &nbsp;&nbsp;&nbsp;<strong>Graduation</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.45 [CET, BBSR]
            </p>
          </div>
          <div className="skill">
            <p>
              <header>2017</header>
              &nbsp;&nbsp;&nbsp;<strong>+2 Intermediate</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;91% [Mother's Public School, BBSR]
            </p>
          </div>
          <div className="skill">
            <p>
              <header>2015</header>
              &nbsp;&nbsp;&nbsp;<strong>Matriculation</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;94.5% [St. Teresa's School, Joda]
            </p>
          </div>
          <div className="skill">
            <p>
              <header>1999</header>
              &nbsp;&nbsp;&nbsp;<strong>Born</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oct 26, 1999
            </p>
          </div>
        </div>
        {/* </p> */}
        <br />
        <hr />
      </div>
    );
  }
}

export default About;

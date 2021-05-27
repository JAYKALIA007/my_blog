import React, { Component } from "react";
class About extends Component {
  render() {
    return (
      <div className="about">
        <img
          align="right"
          src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif"
          alt="coding gif"
          width="180"
        />
        <header>About Jay</header>
        <p>
          A frontend{" "}
          <strong>
            <em>REACT</em>
          </strong>{" "}
          developer.
          <br /> Exploring new technologies and developing software solutions.
          <br />
          Pursuing Web Development and Blog Writing as hobbies.
          <br />
          <div className="skills">
            <header style={{ color: "#332e2e", fontSize: "32px" }}>
              Skills
            </header>
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
        </p>
        <br />
        <div className="recent-work">
          <header>Timeline</header>
          <div className="year">
            <header>
              <i
                className="fa fa-angle-double-right"
                style={{ fontSize: "27px", color: "##3d3939" }}
              ></i>{" "}
              2021
            </header>
            <p>
              <strong>Full time</strong> <br />
              Software developer [TCS, Bangalore] <br />
              <strong>Graduation</strong> <br />
              8.45 [CET, BBSR]
            </p>
            <header>
              <i
                className="fa fa-angle-double-right"
                style={{ fontSize: "27px", color: "##3d3939" }}
              ></i>{" "}
              2017
            </header>
            <p>
              <strong>+2 Intermediate</strong> <br />
              91% [Mother's Public School, BBSR]
            </p>{" "}
            <header>
              <i
                className="fa fa-angle-double-right"
                style={{ fontSize: "27px", color: "##3d3939" }}
              ></i>{" "}
              2015
            </header>
            <p>
              <strong>Matriculation</strong> <br />
              94.5% [St. Teresa's School, Joda]
            </p>{" "}
            <header>
              <i
                className="fa fa-angle-double-right"
                style={{ fontSize: "27px", color: "#3d3939" }}
              ></i>{" "}
              1999
            </header>
            <p>
              <strong>Born</strong> <br />
              Oct 26, 1999
            </p>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default About;

import React, { Component } from "react";
import { Helmet } from "react-helmet";
class About extends Component {
  render() {
    return (
      <div className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="I have interests and experience in Software development, mostly
          frontend development using React.js. I have been working with React.js for almost 7 months now. At
          the same time I have built some projects as well as written multiple
          blogposts."
          />
          <meta
            name="keywords"
            content="Jay Kalia,Jay's blog, about , frontend development ,Java, JavaScript,React JS, Redux,Software developer [TCS Digital,
              Bangalore], Data Structures and Algorithms,GIT Bash, Mother's Public School, BBSR,CET, BBSR,St. Teresa's School, Joda "
          />
          <title>jaykalia/about</title>
          <link rel="canonical" href="http://jaykalia.netlify.app/about" />
        </Helmet>
        <header>About me</header>
        <p>
          I have interests and experience in Software development, mostly
          frontend development using{" "}
          <strong>
            <em>React</em>
          </strong>{" "}
          as well as
          {" "}
          <strong>
            <em>Angular</em>
          </strong>{" "}
          . I have been working with React and Angular for almost an year now now, and with Golang for almost 3-4 months. &nbsp;At
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
            <div id="skill-list">
              <header>Languages</header>
              &nbsp;&nbsp;&nbsp;Golang, JavaScript, Typescript, Java
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>Libraries/Frameworks</header>
              &nbsp;&nbsp;&nbsp;Angular, React JS, Redux 
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>Databases</header>
              &nbsp;&nbsp;&nbsp;MongoDB, Firebase
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>IT Constructs</header>
              &nbsp;&nbsp;&nbsp;Data Structures and Algorithms
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>Environment</header>
              &nbsp;&nbsp;&nbsp;GIT Bash
            </div>
          </div>
        </div>
        <div className="skills" style={{ textAlign: "left" }}>
          <header>Timeline</header>
          <div className="skill">
            <div id="skill-list">
              <header>2021</header>
              &nbsp;&nbsp;&nbsp;<strong>Full time</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Full stack developer [TCS Digital,
              Bangalore] <br />
              &nbsp;&nbsp;&nbsp;<strong>Graduation</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.45 [CET, BBSR]
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>2017</header>
              &nbsp;&nbsp;&nbsp;<strong>+2 Intermediate</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;91% [Mother's Public School, BBSR]
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>2015</header>
              &nbsp;&nbsp;&nbsp;<strong>Matriculation</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;94.5% [St. Teresa's School, Joda]
            </div>
          </div>
          <div className="skill">
            <div id="skill-list">
              <header>1999</header>
              &nbsp;&nbsp;&nbsp;<strong>Born</strong> <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oct 26, 1999
            </div>
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

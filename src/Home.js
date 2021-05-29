import React, { Component } from "react";
import RecentBlogs from "./Blogs/RecentBlogs";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <header>Hello, I'm Jay Prakash.</header>
          {/* <p>
            I'm a frontend developer from Bhubaneswar, India. I work as a
            software developer at TCS Digital. Mostly using React, Redux for
            development. I also write blogs related to computer science.
          </p> */}
          <p>
            A frontend{" "}
            <strong>
              <em>REACT</em>
            </strong>{" "}
            developer.
            <br />
            Exploring new technologies and developing software solutions.
            <br />
            Pursuing Web Development and Blog Writing as hobbies.
            <br />
          </p>
        </div>
        <div className="recent-work">
          <header>Most Recent</header>
          <RecentBlogs />
          <hr />
        </div>
      </div>
    );
  }
}

export default Home;

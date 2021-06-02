import React, { Component } from "react";
import RecentBlogs from "./Blogs/RecentBlogs";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <header>Hey, it's Jay. </header>
          <p>
            I'm a frontend{" "}
            <strong>
              <em>REACT</em>
            </strong>{" "}
            developer who enjoys music and FIFA. I love exploring new
            technologies and developing software solutions. I am pursuing Web
            Development and Blog Writing as hobbies.
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

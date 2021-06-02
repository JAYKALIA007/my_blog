import React, { Component } from "react";
import RecentBlogs from "./Blogs/RecentBlogs";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <header>Hello, I'm Jay Prakash.</header>
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

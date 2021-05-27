import React, { Component } from "react";
import RecentBlogs from "./RecentBlogs";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="introduction">
          <header>Hello, I'm Jay Prakash.</header>
          <p>
            I'm a frontend developer from Bhubaneswar, India. I work as a
            software developer at TCS. Mostly using React, Redux for
            development. I write blogs related to computer science.
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

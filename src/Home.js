import React, { Component } from "react";
import RecentBlogs from "./Blogs/RecentBlogs";
import { Helmet } from "react-helmet";
class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Hey, it's Jay. Welcome to my blog website. I'm a frontend REACT developer who enjoys music and FIFA. I love exploring new
            technologies and developing software solutions. I am pursuing Web
            Development and Blog Writing as hobbies."
          />
          <title>Jay's Blog</title>
          <link rel="canonical" href="http://jaykalia.netlify.app" />
        </Helmet>
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

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
            content="Hey, it's Jay. Welcome to my blog website. I'm a full stack developer, currently working with Angular and Golang. who enjoys music and FIFA. I love exploring new
            technologies and developing software solutions. Writing blogs and playing guitar being some of my hobbies."
          />
          <meta
            name="keywords"
            content="react,javascript,angular,golang,data structures and algorithms,blogs,frontend REACT developer, Jay's blog,music, FIFA, blog writing, jay kalia, jay prakash , Jay Kalia, Jay Prakash Kalia "
          />
          <title>Jay's Blog</title>
          <link rel="canonical" href="http://jaykalia.netlify.app/" />
        </Helmet>
        <div className="introduction">
          <header>Hey, it's Jay. </header>
          <p>
            I'm a full stack developer, currently working with{" "}
            <strong>
              <em>Angular</em>
            </strong>{" "}
            and{" "}
            <strong>
              <em>Golang</em>
            </strong>.{" "}
            I love exploring new technologies and developing software solutions, building frontend and blog writing being some of my hobbies.
            Apart from that, I like music, playing guitar and FIFA.
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

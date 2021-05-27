import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <br />
        <a
          href="https://open.spotify.com/playlist/7buwvIm3xfQBBOYvteO5Gf"
          target="_blank"
        >
          <i
            className="fa fa-spotify"
            style={{ fontSize: "27px", color: "#1DB954" }}
          ></i>
          &nbsp;&nbsp; Set your mood?
        </a>

        <ul>
          <li>
            <a
              className="item"
              href="https://github.com/JAYKALIA007"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/jay_prakash_kalia/" target="_blank">
              LeetCode
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://hashnode.com/@jayprakash07"
              target="_blank"
            >
              hashnode
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://www.linkedin.com/in/jay-prakash-07/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://medium.com/@jaykalia07"
              target="_blank"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://twitter.com/jay_prakash07"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <Link className="item" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="item" to="/allBut">
              AllBut<i className="fa fa-code" style={{ fontSize: "20px" }}></i>
            </Link>
          </li>
          <li>
            <Link className="item" to="/mywork">
              MyWork
            </Link>
          </li>
          <li>
            <a
              className="item"
              href="https://buymeacoffee.com/jayprakash07"
              target="_blank"
            >
              BMC
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Footer;

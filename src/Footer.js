import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <br />
        <a
          href="https://open.spotify.com/playlist/74aCi9aoL7ukl3jzcMyfw7?si=7b5d9fcd88a045bf"
          target="_blank"
          rel="noopener noreferrer"
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
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/jay_prakash_kalia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://hashnode.com/@jayprakash07"
              target="_blank"
              rel="noopener noreferrer"
            >
              hashnode
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://www.linkedin.com/in/jay-prakash-07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://medium.com/@jaykalia07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </li>
          <li>
            <a
              className="item"
              href="https://twitter.com/jay_prakash07"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <Link className="item" to="/">
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
            <Link className="item" to="/myWork">
              MyWork
            </Link>
          </li>
          <li>
            <a
              className="item"
              href="https://buymeacoffee.com/jayprakash07"
              target="_blank"
              rel="noopener noreferrer"
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

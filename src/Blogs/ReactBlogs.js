import { Link } from "react-router-dom";
// import LearnReactRouter from "./Blogs/React/LearnReactRouter";
function ReactBlogs() {
  return (
    <div>
      <br />
      <Link
        className="blog-filter"
        style={{ padding: "2px", margin: "10px" }}
        to="/blog"
      >
        #All
      </Link>
      <Link
        className="blog-filter"
        style={{ padding: "2px", margin: "10px" }}
        to="/blog/react"
      >
        #react
      </Link>
      <Link
        className="blog-filter"
        style={{ padding: "2px", margin: "10px" }}
        to="/blog/js"
      >
        #javascript
      </Link>
      <Link
        className="blog-filter"
        style={{ padding: "2px", margin: "10px" }}
        to="/blog/dsa"
      >
        #data-structures
      </Link>
      <br />
      <hr />
      <br />
      <div id="#react" style={{ paddingBottom: "40%" }}>
        <span className="project-header" style={{ paddingBottom: "5%" }}>
          <Link to="/blog/react/reactRouter">
            React Router in your React app
          </Link>
          <p>
            A single-page application (SPA) is a website that re-renders its
            content in response to navigation actions (e.g. clicking a link)
            without making a request...
          </p>
        </span>
        <span className="project-header" style={{ paddingBottom: "5%" }}>
          <a
            href="https://jayprakash07.hashnode.dev/using-axios-to-fetch-data-in-your-react-apps-ckluks4bb0dth10s1e16pa6tb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Using axios to fetch data in your React apps
          </a>
          <p>
            In our React applications we often need to retrieve data from
            external APIs so it can be displayed in our web pages. Axios is
            designed to handle http …
          </p>
        </span>

        <span className="project-header" style={{ paddingBottom: "5%" }}>
          <a
            href="https://jayprakash07.hashnode.dev/typewriter-effect-in-your-react-app-ckktxffaf0fzxjjs13p5wb8hh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typewriter effect in your React app.
          </a>
          <p>
            A lot of websites nowadays contain texts that simulate typing
            effect, eraser effect and a blinking cursor. Let's create a simple
            typewriter effect...
          </p>
        </span>
      </div>
      <hr />
    </div>
  );
}
export default ReactBlogs;

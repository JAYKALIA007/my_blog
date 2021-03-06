import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function ReactBlogs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A collection of some React.js blogs that you may find handy."
        />
        <meta
          name="keywords"
          content="Jay's blog,react,javascript,data structures and algorithms,blogs,Using React Router in your React app, single page application,axios, fetch,Typewriter effect "
        />
        <title>jaykalia/blog/react</title>
        <link rel="canonical" href="http://jaykalia.netlify.app/blog/react" />
      </Helmet>
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

        <span className="project-header">
          <a
            href="https://jayprakash07.hashnode.dev/why-i-prefer-axios-over-fetch-ckyke3toe05yatos14rxw3p0d"
            target="_blank"
            rel="noopener noreferrer"
          >        
          Why I prefer axios over fetch() ?
          </a>
          <p>
          A while ago I published a blog on how to use Axios to fetch data in your react app . 
          Nevertheless, it's important to acknowledge the fact that Axios...
          </p>
        </span>

        <span className="project-header">
          <a
            href="https://medium.com/dev-genius/whats-and-why-s-of-state-in-react-8208feb6912e"
            target="_blank"
            rel="noopener noreferrer"
          >        
          What's and why's of state in React.
          </a>
          <p>
          State, often termed as a component's memory in React is a plain JavaScript object 
          used by React to represent some information about the component's current ...
          </p>
        </span>

        <span className="project-header">
          <Link to="/blog/react/reactRouter">
            Using React Router in your React app
          </Link>
          <p>
            A single-page application (SPA) is a website that re-renders its
            content in response to navigation actions (e.g. clicking a link)
            without making a request...
          </p>
        </span>
        <span className="project-header">
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
            designed to handle http ???
          </p>
        </span>

        <span className="project-header">
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

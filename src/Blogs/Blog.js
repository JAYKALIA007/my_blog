import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Blog() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>jaykalia/blog</title>
        <meta
          name="keywords"
          content="Jay's blog,react,javascript,data structures and algorithms,blogs, dsa, react.js"
        />
        <meta
          name="description"
          content="A collection of some blogs that you may find handy. The doamins are React.js, Javascript and data structures and algorithms"
        />
        <link rel="canonical" href="http://jaykalia.netlify.app/blog" />
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
      <div id="#react">
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
      </div>
      <div id="#react">
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
      </div>
      <div id="#dsa">
          <span className="project-header">
            <Link to="/blog/dsa/trees">
              TREES, your friendly neighbourhood data structures
            </Link>
            <p>
              A Tree is a non-linear data structure that organizes data in a hierarchical way.
              As opposed to arrays or linked lists that are linear, a tree can have zero or ...
            </p>
          </span>
      </div>
      <div id="#react">
        <span className="project-header">
          <Link to="/blog/react/reactRouter">
            Using React Router in your React app{" "}
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
            designed to handle http …
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
            typewriter effe…
          </p>
        </span>
      </div>

      <div id="#js">
        <span className="project-header">
          <a
            href="https://jayprakash07.hashnode.dev/undefined-vs-not-defined-in-js-ckk5qmm7o01niics12ukb3i6m"
            target="_blank"
            rel="noopener noreferrer"
          >
            undefined vs not defined in JavaScript.
          </a>
          <p>
            Let's understand the difference between undefined and not defined in
            JavaScript. undefined Whenever a JS code is executed, a Global
            Execution Context…
          </p>
        </span>
      </div>
      <div id="#dsa">
        <span className="project-header">
          <a
            href="https://jaykalia07.medium.com/heaps-the-cutest-little-data-structure-ever-invented-a1d0010cca84"
            target="_blank"
            rel="noopener noreferrer"
          >
            HEAPS, the cutest little data structure.
          </a>
          <p>
            Heaps are a great example of many core computer science concepts
            working together in order to form one very large abstraction, which
            is made up of smaller...
          </p>
        </span>
        <span className="project-header">
          <a
            href="https://jaykalia07.medium.com/perfectly-balanced-as-all-things-should-be-avl-trees-9979724fba7d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Perfectly balanced as all things should be — AVL trees
          </a>
          <p>
            In computer science , an AVL tree (named after inventors
            Adelson-Velsky and Landis) is a self-balancing binary search tree .
            It was the first ...
          </p>
        </span>
        <span className="project-header">
          <a
            href="https://medium.com/swlh/an-introduction-to-dynamic-programming-b2389eff7321"
            target="_blank"
            rel="noopener noreferrer"
          >
            An Introduction to Dynamic Programming
          </a>
          <p>
            Although people make a big deal about how scary dynamic programming
            problems are, there’s really no need to be afraid of them. In fact,
            once you ...
          </p>
        </span>
        <span className="project-header">
          <a
            href="https://jaykalia07.medium.com/linked-lists-and-the-runner-technique-8e70e5433389"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked lists and the Runner Technique
          </a>
          <p>
            A couple of days ago, I was going through a mock interview, and I
            was tasked with a question on linked list, which involved finding
            and returning ...
          </p>
        </span>
      </div>
      <hr />
    </div>
  );
}
export default Blog;

import { Link } from "react-router-dom";
function RecentBlogs() {
  return (
    <div>
      <br />
      <span className="project-header">
        <a
          href="https://jayprakash07.hashnode.dev/using-axios-to-fetch-data-in-your-react-apps-ckluks4bb0dth10s1e16pa6tb"
          target="_blank"
        >
          Using axios to fetch data in your React apps
        </a>
        <p>
          In our React applications we often need to retrieve data from external
          APIs so it can be displayed in our web pages. Axios is designed to
          handle http …
        </p>
      </span>
      <span className="project-header">
        <a
          href="https://jayprakash07.hashnode.dev/typewriter-effect-in-your-react-app-ckktxffaf0fzxjjs13p5wb8hh"
          target="_blank"
        >
          Typewriter effect in your React app.
        </a>
        <p>
          A lot of websites nowadays contain texts that simulate typing effect,
          eraser effect and a blinking cursor. Demo Let's create a simple
          typewriter effe…
        </p>
      </span>
      <span className="project-header">
        <a
          href="https://jayprakash07.hashnode.dev/undefined-vs-not-defined-in-js-ckk5qmm7o01niics12ukb3i6m"
          target="_blank"
        >
          undefined vs not defined in JavaScript.
        </a>
        <p>
          Let's understand the difference between undefined and not defined in
          JavaScript. undefined Whenever a JS code is executed, a Global
          Execution Context…
        </p>
      </span>
      <span className="project-header">
        <a
          href="https://jaykalia07.medium.com/heaps-the-cutest-little-data-structure-ever-invented-a1d0010cca84"
          target="_blank"
        >
          HEAPS, the cutest little data structure.
        </a>
        <p>
          Heaps are a great example of many core computer science concepts
          working together in order to form one very large abstraction, which is
          made up of smaller...
        </p>
      </span>
      <Link
        style={{
          color: "#60b4a6",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
        to="/blog"
      >
        View All Blogs
      </Link>
    </div>
  );
}

export default RecentBlogs;

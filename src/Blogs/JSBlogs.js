import { Link } from "react-router-dom";
function JSBlogs() {
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

      <div id="#js" style={{ paddingBottom: "50%" }}>
        <span className="project-header" style={{ paddingBottom: "5%" }}>
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
      <hr />
    </div>
  );
}
export default JSBlogs;

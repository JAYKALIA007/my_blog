import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function DSABlogs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A collection of some data structures and algorithms blogs that you may find handy."
        />
        <meta
          name="keywords"
          content="Jay's blog,react,javascript,data structures and algorithms,blogs,HEAPS,AVL trees, Dynamic Programming , Linked lists, Runner Technique "
        />
        <title>jaykalia/blog/dsa</title>
        <link rel="canonical" href="http://jaykalia.netlify.app/blog/dsa" />
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
      <div id="#dsa">
        <span className="project-header" style={{ paddingBottom: "5%" }}>
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
        <span className="project-header" style={{ paddingBottom: "5%" }}>
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
        <span className="project-header" style={{ paddingBottom: "5%" }}>
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
        <span className="project-header" style={{ paddingBottom: "5%" }}>
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
export default DSABlogs;

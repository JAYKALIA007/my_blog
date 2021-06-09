import Recent from "./Recent";
import { Helmet } from "react-helmet";
function MyWork() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A collection of some blogs and projects that you may find handy. The doamins are React.js, Javascript and data structures and algorithms"
        />
        <title>jay_kalia/myWork</title>
        <link rel="canonical" href="http://jaykalia.netlify.app/myWork" />
      </Helmet>
      <Recent />
    </div>
  );
}

export default MyWork;

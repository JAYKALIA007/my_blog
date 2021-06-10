import React, { Component } from "react";
import { Helmet } from "react-helmet";
class AllBut extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>jaykalia/allBut</title>
          <link rel="canonical" href="http://jaykalia.netlify.app/allBut" />
        </Helmet>
        <br />
        <p>
          If you are looking for content related to programming here as well.
          &nbsp;My friend it's
        </p>
        <header> 404 for you</header>
        <br />
        <p>Working on this page.</p>
        <h2 style={{ paddingBottom: "20%" }}> Stay Tuned!</h2>

        <hr />
      </div>
    );
  }
}

export default AllBut;

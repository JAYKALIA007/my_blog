import img1 from "./noRouter.png";
import img2 from "./reactRouter.png";
import { Helmet } from "react-helmet";
import { useState } from 'react';

function LearnReactRouter() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [copied4, setCopied4] = useState(false);
  const [copied5, setCopied5] = useState(false);
  const [copied6, setCopied6] = useState(false);
  const [copied7, setCopied7] = useState(false);
  const [copied8, setCopied8] = useState(false);
  const [copied9, setCopied9] = useState(false);

  function handleClick1() {
    setCopied1(!copied1);
    setTimeout(() => {setCopied1(false);},2000)
  }
  function handleClick2() {
    setCopied2(!copied2);
    setTimeout(() => {setCopied2(false);},2000)
  }
  function handleClick3() {
    setCopied3(!copied3);
    setTimeout(() => {setCopied3(false);},2000)
  } 
  function handleClick4() {
    setCopied4(!copied4);
    setTimeout(() => {setCopied4(false);},2000)
  }  
  function handleClick5() {
    setCopied5(!copied5);
    setTimeout(() => {setCopied5(false);},2000)
  }
    function handleClick6() {
    setCopied6(!copied6);
    setTimeout(() => {setCopied6(false);},2000)
  }
  function handleClick7() {
    setCopied7(!copied7);
    setTimeout(() => {setCopied7(false);},2000)
  } 
  function handleClick8() {
    setCopied8(!copied8);
    setTimeout(() => {setCopied8(false);},2000)
  }  
  function handleClick9() {
    setCopied9(!copied1);
    setTimeout(() => {setCopied9(false);},2000)
  }
  const btnText1 = copied1 ? 'Copied' : 'Copy'
  const btnText2 = copied2 ? 'Copied' : 'Copy'
  const btnText3 = copied3 ? 'Copied' : 'Copy'
  const btnText4 = copied4 ? 'Copied' : 'Copy'  
  const btnText5 = copied5 ? 'Copied' : 'Copy'
  const btnText6 = copied6 ? 'Copied' : 'Copy'
  const btnText7 = copied7 ? 'Copied' : 'Copy'
  const btnText8 = copied8 ? 'Copied' : 'Copy'
  const btnText9 = copied9 ? 'Copied' : 'Copy'

  return (
    <div className="blog">
      <Helmet>
        <title>jaykalia/blog/react/reactRouter</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Using React Router in your React app"
        />
        <meta
          name="keywords"
          content="Jay's blog,react,javascript,react router,blogs,Using React Router in your React app, single page application "
        />
        <link
          rel="canonical"
          href="http://jaykalia.netlify.app/blog/react/reactRouter"
        />
      </Helmet>

      <span className="recent-work">
        <header>Using React Router in your React app</header>
      </span>
      <br />
      <br />
      <div className="blogBody">
        <span className="project-header">What is SPA?</span>
        <p>
          A single-page application (SPA) is a website that re-renders its
          content in response to navigation actions (e.g. clicking a link)
          without making a request to the server to fetch new HTML.
        </p>
        <span className="project-header">Why react uses React Router?</span>
        <p>
          In general, when the user types a URL in the browser, an HTTP request
          is sent to the server, which then retrieves the HTML page. For each
          new URL, the user is redirected to a new HTML page.
        </p>
        <img src={img1} alt="without router" style={{ maxWidth: "100%" }} />
        <p>
          However, when using React router, the request does not go all the way
          to the server, instead the React Router intercepts the requests and
          what React router does is that it recognizes the component that we
          want to render, based on that it injects that particular component
          into the DOM.
        </p>
        <img src={img2} alt="with react router" style={{ maxWidth: "100%" }} />
        <br />
        <br />
        <span className="project-header">Installation and Setup</span>
        <p>To use React Router, you first have to install it using NPM:</p>
        <div className="code-example blog-filter">
        <button 
              onClick={() =>  {navigator.clipboard.writeText(`
npm install react-router-dom`
                ); handleClick1()}}
              >
              {btnText1}
            </button>
          npm install react-router-dom
        </div>
        <p>
          You'll need to import BrowserRouter, Route, and Switch from
          react-router-dom package:
        </p>
        <div className="code-example blog-filter">
        <button 
              onClick={() =>  {navigator.clipboard.writeText(`
import React, {Component} from 'react';
import {(BrowserRouter, Route, Switch)} from 'react-router-dom';`
                ); handleClick2()}}
              >
              {btnText2}
            </button>
          {`import React, {Component} from 'react';`}
          <br />
          {`import {(BrowserRouter, Route, Switch)} from 'react-router-dom';`}
        </div>
        <p>
          First, you'll need to set up your app to work with React Router.
          Everything that gets rendered will need to go inside the &nbsp;
          <em className="blog-filter">{`<BrowserRouter>`}</em>
          &nbsp; element, so wrap your App in those first.
        </p>
        <div className="code-example blog-filter">
          <button 
              onClick={() =>  {navigator.clipboard.writeText(`
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
)`
                ); handleClick3()}}
              >
            {btnText3}
          </button>
          {"// index.js"} <br />
          ReactDOM.render(
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{"<BrowserRouter>"}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<App />"}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{"</BrowserRouter>,"}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {`document.getElementById('root')`}
          <br />
          &nbsp;&nbsp;)
        </div>
        <p>
          Next, in our App component, add the Switch element .These ensure that
          only one component is rendered at a time.The{" "}
          <em className="blog-filter">{`<Switch>`}</em> component will only
          render the first route that matches/includes the path.
        </p>
        <div className="code-example blog-filter">
        <button 
              onClick={() =>  {navigator.clipboard.writeText(`
function App() {
  return (
    <div>
        <Switch>

        </Switch>
    </div>)
  }`
                ); handleClick4()}}
              >
            {btnText4}
          </button>
          {`function App() {`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;return (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<div>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          {`<Switch>`}
          <br />
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          {`</Switch>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`})
          <br />
          &nbsp;&nbsp;{"}"}
          <br />
        </div>
        <p>
          It's now time to add your{" "}
          <em className="blog-filter">{`<Route>`} </em>tags. These are the links
          between the components and should be placed inside the
          <em className="blog-filter"> {`<Switch>`} </em>tags.
        </p>
        <p>
          To tell the <em className="blog-filter">{`<Route>`} </em> tags which
          component to load, simply add a path attribute and the name of the
          component you want to load with component attribute.
        </p>
        <div className="code-example blog-filter">
        <button 
              onClick={() =>  {navigator.clipboard.writeText(`
<Route path='/' component={Home} />`
                ); handleClick5()}}
              >
            {btnText5}
          </button>
          {`<Route path='/' component={Home} />`}
        </div>
        <p>
          Many homepage URLs are the site name followed by "/". In this case, we
          add <em className="blog-filter">{`exact`} </em> to the Route tag. This
          is because the other URLs also contain "/", so if we don't tell the
          app that it needs to look for just{" "}
          <em className="blog-filter">{`/`}</em>, it loads the first one to
          match the route, and we get a pretty tricky bug to deal with.
        </p>
        <div className="code-example blog-filter">
          <button 
              onClick={() =>  {navigator.clipboard.writeText(`
function App() {
  {
  return (
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/footer" component={Footer} />
          </Switch>
        </main>
      }
    )
  }`
                ); handleClick6()}}
              >
            {btnText6}
          </button>
          {`function App() {`}
          <br />
          {`{`}
          <br />
          {`return (`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;
          {`<main>`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          {`<Switch>`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {'<Route path="/" component={Home} exact />'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {'<Route path="/about" component={About} />'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {'<Route path="/footer" component={Footer} />'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          {"</Switch>"}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;
          {"</main>"}
          <br />
          &nbsp;&nbsp;&nbsp;{"}"}
          <br />
          &nbsp;&nbsp;{") "}
          <br />
          {" }"}
          <br />
        </div>
        <p>Now import Home, About and Footer components in your app</p>
        <div className="code-example blog-filter">
        <button 
              onClick={() =>  {navigator.clipboard.writeText(`
import Home from './Home';
import About from './About';
import Footer from './Footer';`
                ); handleClick7()}}
              >
            {btnText7}
          </button>
          import Home from './Home'; <br />
          import About from './About';
          <br /> import Footer from './Footer';
        </div>
        <p>
          Also provide an appropriate error message, which loads if a user types
          an incorrect URL. This is just like a normal{" "}
          <em className="blog-filter">{`<Route>`} </em> tag, but with no path.
        </p>
        <div className="code-example blog-filter">
          <button 
              onClick={() =>  {navigator.clipboard.writeText(`
<Route render = { () => <h4> Error 404 </h4> } />`
                ); handleClick8()}}
              >
            {btnText8}
          </button>
          {`<Route render = { () => <h4> Error 404 </h4> } />`}
        </div>
        <p>
          So far, our site is only navigable by typing the URLs. To add
          clickable links to the site, we use the{" "}
          <em className="blog-filter">{`<Link>`} </em> element from React Router
          and set up a new Navbar component. Once again, don't forget to import
          the Navbar component into the app.
        </p>
        <div className="code-example blog-filter">
          <button 
              onClick={() =>  {navigator.clipboard.writeText(`
function Navbar() {
  return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/about">About Me </Link>
        <Link to="/footer">Footer </Link>
      </div>
    );
};`
                ); handleClick9()}}
              >
            {btnText9}
          </button>
          {`function Navbar() {`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          {`return (`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          {`<div>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          {`<Link to="/">Home </Link>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          {`<Link to="/about">About Me </Link>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
          {`<Link to="/footer">Footer </Link>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          {`</div>`}
          <br />
          &nbsp;&nbsp; &nbsp;&nbsp;
          {`);`}
          <br />
          &nbsp;&nbsp;{`};`}
          <br />
        </div>
        <p>
          Woohoo!🥳 Your site now has clickable links that can navigate you
          around your SPA!
        </p>
        <span className="project-header">Conclusion</span>
        <p>
          If you want to easily navigate around a React app, forget the anchor
          tags and add React Router. It's clean, organized, and it makes adding
          and deleting pages a whole lot easier.
        </p>

        <a
            href="https://jayprakash07.hashnode.dev/using-react-router-in-your-react-app-ckvxv1t6503e9z2s12bijbhs9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read this article on Hashnode?
        </a>

        <p>Thanks for reading this.🙏🏻</p>
      </div>
    </div>
  );
}
export default LearnReactRouter;

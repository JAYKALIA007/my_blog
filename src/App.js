import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import AllBut from "./AllBut";
import MyWork from "./MyWork";
import Navbar from "./Navbar";
import Blog from "./Blogs/Blog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactBlogs from "./Blogs/ReactBlogs";
import JSBlogs from "./Blogs/JSBlogs";
import DSABlogs from "./Blogs/DSABlogs";
import ScrollToTop from "./ScrollToTop";
import LearnReactRouter from "./Blogs/React/LearnReactRouter";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/allBut">
            <AllBut />
          </Route>
          <Route exact path="/myWork">
            <MyWork />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/blog/react">
            <ReactBlogs />
          </Route>
          <Route exact path="/blog/js">
            <JSBlogs />
          </Route>
          <Route exact path="/blog/dsa">
            <DSABlogs />
          </Route>
          <Route exact path="/blog/react/reactRouter">
            <LearnReactRouter />
          </Route>
          <Route
            render={() => <span className="errorMessage">Error 404</span>}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

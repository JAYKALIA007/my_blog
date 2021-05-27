import "./App.css";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import AllBut from "./AllBut";
import MyWork from "./MyWork";
import Navbar from "./Navbar";
import Blog from "./Blog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactBlogs from "./ReactBlogs";
import JSBlogs from "./JSBlogs";
import DSABlogs from "./DSABlogs";
function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/allBut">
              <AllBut />
            </Route>
            <Route path="/mywork">
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
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

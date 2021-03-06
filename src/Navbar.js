import { Link } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myWork">MyWork</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/allBut">
              AllBut
              <i className="fa fa-code" style={{ fontSize: "25px" }}></i>
            </Link>
          </li>
          <li>
            <DarkMode />
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}
export default Navbar;

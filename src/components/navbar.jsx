
import { Link, Outlet } from "react-router-dom";
import Animais from "./home";
import Home from "./animais";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dadJoke">Animais</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;

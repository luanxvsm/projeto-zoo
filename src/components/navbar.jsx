import { Link, Outlet } from "react-router-dom";
import Animais from "./animais.jsx";
import Home from "./home.jsx";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" component={Home}>Home</Link>
          </li>
          <li>
            <Link to="Animais" component={Animais}>Animais</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
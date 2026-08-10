import { NavLink } from "react-router-dom";
import colorLogo from "../assets/icons/colorlogo.svg";

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        <img src={colorLogo} alt="Kubra logo" />
      </NavLink>

      <nav className="site-nav" aria-label="Primær navigation">
        <NavLink to="/" end>
          Forside
        </NavLink>
        <NavLink to="/projects">Projekter</NavLink>
        <NavLink to="/about">Om mig</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;

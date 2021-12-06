import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <Link
        activeClass="active"
        id="logo"
        to="main"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        VSCRL
      </Link>

      <Link
        activeClass="active"
        to="login"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Login
      </Link>


      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        About
      </Link>

      <Link
        activeClass="active"
        to="stories"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Stories
      </Link>

      <Link
        activeClass="active"
        to="brands"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Brands
      </Link>
    </div>
  );
}

export default Navbar;

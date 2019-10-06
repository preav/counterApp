import React from "react";

const NavBar = ({ totalCounters }) => {
    console.log('Navbar-render')
  return (
    <nav className="navbar navbar-light bg-light">
      <span>Navbar</span>
      <span className="badge badge-primary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;

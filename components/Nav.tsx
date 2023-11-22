import React from "react";
import Link from "next/link";

interface NavBarProps {
  // Define your props here
}

function NavBar(props: NavBarProps) {
  return (
    <nav className="nav bg-primary d-flex justify-content-between">
        
          <Link className=" nav-link text-light logo" href="/" passHref>
            Home 
          </Link>
          <Link className="nav-link text-light" href="/login" passHref>
            Login
          </Link>
          <Link className=" nav-link text-light" href="/register" passHref>
            Register
          </Link>
    </nav>
  );
}

export default NavBar;
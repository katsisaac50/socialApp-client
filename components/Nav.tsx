import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";

interface NavBarProps {
  // Define your props here
}

function NavBar(props: NavBarProps) {

  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    setState({ ...state, user: null, token: '' });
    localStorage.removeItem('auth');
    router.push('/login');
  }

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
          <button className="btn btn-outline-light" onClick={logout}>Logout</button>
    </nav>
  );
}

export default NavBar;
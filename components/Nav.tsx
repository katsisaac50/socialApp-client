import React from "react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/router";

interface NavBarProps {
  // Define your props here
}

function NavBar(props: NavBarProps) {

  const [state, setState] = useContext(UserContext);
  const [current, setCurrent] = useState('');

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  },[process.browser && window.location.pathname]);

  const router = useRouter();

  console.log(state);

  const logout = () => {
    setState({ ...state, user: null, token: '' });
    localStorage.removeItem('auth');
    router.push('/login');
  }

  return (
    <nav className="nav bg-primary d-flex justify-content-between">
        
          <Link className={`nav-link text-light ${current === '/' ? 'active' : ''}`} href="/" passHref>
            Home 
          </Link>
          {state && state.user === null ? (
            <>
            <Link className={`nav-link text-light ${current === '/login' ? 'active' : ''}`} href="/login" passHref>
            Login
          </Link>
          <Link className={`nav-link text-light ${current === '/register' ? 'active' : ''}`} href="/register" passHref>
            Register
          </Link>
            </>
          ) : (
            <>
            <Link className={`nav-link text-light ${current === '/user/dashboard' ? 'active' : ''}`} href="/user/dashboard" passHref>
            {state && state.existingUser && state.existingUser.username}
            </Link>
            <a className="btn nav-link text-light " onClick={logout}>Logout</a>
            </>
          )}
          
          
    </nav>
  );
}

export default NavBar;
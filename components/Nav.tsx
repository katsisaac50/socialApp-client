import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";

interface NavBarProps {
  // Define your props here
}

function NavBar(props: NavBarProps) {
  const [state, setState] = useContext(UserContext);
  const [current, setCurrent] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state


  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();

  useEffect(() => {
    // Check if user is available and loading is true
    if (state && state.existingUser && loading) {
      setLoading(false); // Set loading to false once user data is available
    }
  }, [state, loading]);

  const logout = () => {
    setState({ ...state, user: null, token: "" });
    localStorage.removeItem("auth");
    router.push("/login");
  };

  console.log(state);

  return (
    <nav className="nav bg-primary d-flex justify-content-between">
      <Link
        className={`nav-link text-light ${current === "/" ? "active" : ""}`}
        href="/"
        passHref
      >
        Home
      </Link>
      <div className="dropdown mr-1">
  <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
    Offset
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>

      {loading ? (
        // Show loading state or a placeholder while user data is being fetched
        <p>Loading...</p>
      ) : state && state.user === null ? (
        <>
          <Link
            className={`nav-link text-light ${
              current === "/login" ? "active" : ""
            }`}
            href="/login"
            passHref
          >
            Login
          </Link>
          <Link
            className={`nav-link text-light ${
              current === "/register" ? "active" : ""
            }`}
            href="/register"
            passHref
          >
            Register
          </Link>
        </>
      ) : (
        <>
          <Link
            className={`nav-link text-light ${
              current === "/user/dashboard" ? "active" : ""
            }`}
            href="/user/dashboard"
            passHref
          >
            {state && state.user && state.user.name}
          </Link>
          <a className="btn nav-link text-light " onClick={logout}>
            Logout
          </a>
        </>
      )}
    </nav>
  );
}

export default NavBar;

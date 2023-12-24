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

      {loading ? (
        // Show loading state or a placeholder while user data is being fetched
        <p>Loading...</p>
      ) : state && state.user === null ? (
        <>
          <Link
            className={`nav-link text-light ${current === "/login" ? "active" : ""
              }`}
            href="/login"
            passHref
          >
            Login
          </Link>
          <Link
            className={`nav-link text-light ${current === "/register" ? "active" : ""
              }`}
            href="/register"
            passHref
          >
            Register
          </Link>
        </>
      ) : (
        <>
          <div className="dropdown">
            <Link
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              href={"/#"}
              aria-expanded="false"
            >
              {state && state.user && state.user.name}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Link
                className={`nav-link ${current === "/user/dashboard" ? "active text-light" : ""
                  }`}
                href="/user/dashboard"
                passHref
              >
                Dashboard
              </Link>
              </li>
              <li><a className="btn nav-link" onClick={logout}>
                Logout
              </a></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default NavBar;

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import {Avatar} from "antd";

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

  return (
    <nav className="nav bg-primary d-flex justify-content-between">
      <Link
        className={`nav-link text-light ${current === "/" ? "active" : ""}`}
        href="/"
        passHref
      >
        <Avatar size={40} src={<img src={"/images/favicon.png"} alt="avatar" />} />
        <span className="ms-2">Home</span>
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
              <li><Link
                className="btn nav-link"
                href="/user/profile/update"
                passHref
              >
                Profile
              </Link>
              </li>
              {state && state.user && state.user.role === "Admin" && (
                <li><Link
                  className={`btn nav-link  ${current === "/admin" ? "active" : ""}`}
                  href="/admin"
                  passHref
                >
                  Admin
                </Link>
                </li>
              )}
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

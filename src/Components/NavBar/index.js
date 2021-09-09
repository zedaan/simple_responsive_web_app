import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/",
    title: "News",
  },
  {
    link: "/",
    title: "Contact",
  },
  {
    link: "/",
    title: "About Us",
  },
];

const NavBar = () => {
  const ref = useRef();
  const [isSearchActive, SetSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar-container" ref={ref}>
      <div className="navbar-content">
        <div
          className="navbar-toggle"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <i className="fas fa-bars"></i>
          {isMenuOpen && (
            <div className="navbar-links">
              <ul>
                {links?.map((item) => (
                  <li>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="heading-text">
          <h3>ny times most popular</h3>
        </div>
        <div
          className={isSearchActive ? "navbar-items" : "navbar-items-inactive"}
        >
          <div className="navbar-search">
            {isSearchActive && (
              <input
                type="text"
                placeholder="search"
                className="search-input"
              />
            )}
            <i
              className="fas fa-search icon"
              onClick={() => SetSearchActive(!isSearchActive)}
            ></i>
          </div>
        </div>
        <div className="navbar-menu">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/JAutos.png";
import userIcon from "../../assets/images/user-icon.png";
import { Button, Container, Row } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);
  const menuRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  //Navbar background
  const [navBg, setNavBg] = useState("sticky__header");

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollHeight > 80 ||
        document.documentElement.scrollHeight > 80
      ) {
        setNavBg(navBg);
      } else {
        setNavBg(!navBg);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__toggle");

  //Navigate to Cart
  const navigateToCart = () => {
    navigate("/cart");
  };

  //Navigate to Home
  const navigateToHome = () => {
    navigate("/home");
  };

  //const

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* Logo */}
            <div className="logo" onClick={navigateToHome}>
              <img src={logo} alt="logo" />
              <div>
                <h1>J'Autos</h1>
              </div>
            </div>

            {/* Links */}
            <div className="navigation" ref={menuRef}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons */}
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="userIcon"
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span className="out" onClick={logout}>
                      Logout
                    </span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup" className="up">
                        Signup
                      </Link>
                      <Link to="/login" className="in">
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Dark and Light Mode */}
              {/* <div className="switch__menu">
                <span>
                  <ReactSwitch
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100px",
                      height,
                    }}
                  />
                </span>
              </div> */}

              {/* Mobile Menu */}
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

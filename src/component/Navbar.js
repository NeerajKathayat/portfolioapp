import React, { Component } from "react";
import { Link } from "react-scroll";
import Intro from "./Intro";
import "./Navbar.css";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showMenuLink: false,
      color: false,
    };
  }
  changeColor = () => {
    if (window.scrollY >= 70) {
      this.setState({ color: true });
    } else {
      this.setState({ color: false });
    }
  };

  onClientEntry = () => {
    window.addEventListener("scroll", this.changeColor);
  };

  componentDidMount() {
    this.onClientEntry();
  }

  render() {
    return (
      <div className="main" id="home">
        <nav
          className={
            this.state.color
              ? "main-nav fixed-NavBar scrolling-active"
              : "main-nav fixed-NavBar"
          }
        >
          <a className={this.state.color ? "sd logo" : "sl logo"} href="/">
            Portfolio
          </a>
          <div
            className={
              this.state.showMenuLink
                ? this.state.color
                  ? "scc kk menu-link mobile-menu-link"
                  : "sbb pp menu-link mobile-menu-link"
                : this.state.color
                ? "scc menu-link"
                : "sbb menu-link"
            }
          >
            <ul className="">
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  to="skill"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  to="project"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  duration={500}
                  offset={-100}
                  spy={true}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={
              this.state.color ? "hamburger-menu sd" : "hamburger-menu sl"
            }
          >
            <div
              onClick={() => {
                this.setState({ showMenuLink: !this.state.showMenuLink });
              }}
            >
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
        <Intro />

        <div className="social">
          <a
            href="https://www.linkedin.com/in/neeraj-kathayat-b293a6201"
            rel="noreferrer"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/neerajkathayat006/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/NeerajKathayat"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}

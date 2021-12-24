import React, { useState, useEffect } from "react";
import "../static/Home.scss";
import "../static/Modal.css";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import menu from "../images/menu.svg";
import Handler from "../components/Handler";
import "./Handler.scss";
import { Link } from "react-scroll";
import { Avatar } from "@material-ui/core";
import img from "../images/author.jpeg";
export default function Home(props) {
  const [modal, setModal] = useState(false);
  const [token, setToken] = useState("");
  
  const clicked = (click) => {
    setModal(click);
    console.log("click");
    if (modal) {
      document.getElementById("name").style.opacity = 0.7;
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(async () => {
    async function load_models() {
      let response = await fetch("http://127.0.0.1:8000/backendapi/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    load_models();
  }, []);

  useEffect(() => {
    console.log("useEffect");
    clicked(modal);
  }, [modal]);

  const exit = () => {
    document.getElementById("name").style.opacity = 1;
    setModal(false);
  };

  //const history = useNavigate();
  //   const [token, setToken] = useState(
  //     localStorage.getItem("authToken")
  //       ? JSON.parse(localStorage.getItem("authToken"))
  //       : null
  //   );
  //   let [authenticated, setAuthenticated] = useState(
  //     localStorage.getItem("authToken") ? true : false
  //   );
  setTimeout(function () {
    localStorage.removeItem("authToken");
  }, 120 * 60 * 1000);
  // useEffect(() => {
  //   // this code will scroll down to the oinput section.
  //   // var destination = document.getElementById("input").offsetTop;
  //   // window.scrollTo(0 , destination);
  // }, [token]);
  const userLogin = (tok) => {
    setToken(tok);
  };

  return (
    <div id="grand">
      {modal && <Login userLogin={userLogin} exit={exit} />}

      <div className="navbar">
        <div className="container">
          <a className="logo" href="#">
            <span>NLP </span>
            WEB
          </a>
          <img
            id="mobile-cta"
            className="mobile-menu"
            src={menu}
            alt="Open Navigation"
            width="30px"
          />

          <nav>
            <img
              id="mobile-exit"
              className="mobile-menu-exit"
              src="images/exit.svg"
              alt="Close Navigation"
            />

            <ul className="primary-nav">
              <li className="current">
                <Link to="hero" smooth={true} duration={1000}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="input__scroll" smooth={true} duration={1000}>
                  {" "}
                  Try{" "}
                </Link>
              </li>
              <li>
                <Link to="features" smooth={true} duration={1000}>
                  Features
                </Link>
              </li>
            </ul>

            <ul className="secondary-nav">
              <li>
                <Link to="contact" smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
              <li className="go-premium-cta">
                {!token ? (
                  <button
                    className="button"
                    onClick={() => {
                      setModal(!modal);
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="logout__btn"
                    onClick={() => {
                      setToken("");
                      localStorage.removeItem("authToken");
                    }}
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="hero" id="hero">
        <div className="container">
          <div className="left-col">
            <p className="subhead">It's Easier &amp; Cleaner</p>
            <h1>NLP WEB</h1>
            <div className="hero-cta">
              <Link
                to="input"
                className="primary-cta"
                duration={1000}
                smooth={true}
              >
                Just for free
              </Link>
            </div>
          </div>
          <img
            src="https://raw.githubusercontent.com/aub-mind/arabert/master/arabert_logo.png"
            className="hero-img"
            alt="Illustration"
          />
        </div>
      </div>

      <div>
        <section className="features-section" id="features">
          <div className="container">
            <ul className="features-list">
              <li>Unlimited Tasks</li>
              <li>Named Entity Recognition</li>
              <li>Summarizer</li>
              <li>Mask completion</li>
              <li>Other awesome features</li>
              <li> And Real Time Collaboration</li>
            </ul>

            <img
              src="https://storage.googleapis.com/kaggle-datasets-images/1415015/2344013/b1043d28932e77ab86b2ff365cd5374c/data-original.png?t=2021-06-17-08-40-17"
              alt="Man holding phone"
            />
          </div>
        </section>
      </div>
      <div>
        <section className="testimonials-section">
          <div className="container">
            <ul>
              <li>
                <img
                  src="https://assets.codepen.io/2621168/person.jpg"
                  alt="Person"
                />

                <blockquote>
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </blockquote>
                <cite>- Jane Doe</cite>
              </li>
              <li>
                <img
                  src="https://assets.codepen.io/2621168/person.jpg"
                  alt="Person"
                />

                <blockquote>
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </blockquote>
                <cite>- Jane Doe</cite>
              </li>
              <li>
                <img
                  src="https://assets.codepen.io/2621168/person.jpg"
                  alt="Person"
                />

                <blockquote>
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </blockquote>
                <cite>- Jane Doe</cite>
              </li>
            </ul>
          </div>
        </section>
      </div>
      {token && <Handler />}
        
      <section className="contact-section" id="contact">
        <div className="contact__div">
          <Avatar
            src={img}
            style={{ display: "inline-block", marginTop: "0.8em" }}
          >
            {" "}
            Aiman
          </Avatar>
          <h1
            style={{ color: "white", display: "inline", marginLeft: "0.4em" }}
          >
            Aiman Younis
          </h1>
        </div>

        <div className="contact-left">
          <h2> Contact me</h2>
          <form action="">
            <label type="name">Name</label>
            <input type="text" id="name" name="name" />
            <label type="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>

            <input
              type="submit"
              className="send-message-cta"
              value="Send message"
            />
          </form>
        </div>
      </section>
    </div>
  );
}

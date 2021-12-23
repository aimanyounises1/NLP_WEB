import React, { useState, useEffect } from "react";
import "../static/Home.scss";
import "../static/Modal.css";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import menu from "../images/menu.svg";
import Handler from "../components/Handler";
import "./Handler.scss";
export default function Home(props) {
  const [modal, setModal] = useState(false);
  const [token , setToken] = useState("");
  const clicked = (click) => {
    setModal(click);
    console.log("click");
    if (modal) {
        document.getElementById("name").style.opacity = 0.7;
        document.body.style.overflow = "hidden";
      }
  };
  useEffect(() => {
    console.log("useEffect");
    clicked(modal);
  }, [modal]);

  const exit = () => {
    document.getElementById("name").style.opacity = 1;
    setModal(false);
  };

  const history = useNavigate();
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
  useEffect(()=>{
      // this code will scroll down to the oinput section.
      var destination = document.getElementById("input").offsetTop;
      window.scrollTo(0 , destination);
  },[token])
  const userLogin = (tok) => {
    setToken(tok);
  };

  return (
    <div id="grand">
      {modal && <Login userLogin = {userLogin} exit = {exit}/>}
     
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>

              <ul className="secondary-nav">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li className="go-premium-cta">
                
                <button className="button" onClick={()=>{setModal(!modal)}} > Sign in</button>
                </li>
              </ul>
            </nav>
          </div>
         </div>

         <div className="hero">
          <div className="container">
            <div className="left-col">
              <p className="subhead">It's Easier &amp; Cleaner</p>
              <h1>NLP WEB</h1>
              <div className="hero-cta">
                <a href="#" class="primary-cta">
                  Just for free
                </a>
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
          <section className="features-section">
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
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore"
                  </blockquote>
                  <cite>- Jane Doe</cite>
                </li>
                <li>
                  <img
                    src="https://assets.codepen.io/2621168/person.jpg"
                    alt="Person"
                  />

                  <blockquote>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore"
                  </blockquote>
                  <cite>- Jane Doe</cite>
                </li>
                <li>
                  <img
                    src="https://assets.codepen.io/2621168/person.jpg"
                    alt="Person"
                  />

                  <blockquote>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore"
                  </blockquote>
                  <cite>- Jane Doe</cite>
                </li>
              </ul>
            </div>
          </section>
          </div>
         <div>
          <section className="contact-section">
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
                  class="send-message-cta"
                  value="Send message"
                />
              </form>
             </div>
             </section>
           
             </div>
             <div id="input">
             {token && <Handler />}
             </div>
            
    </div>
  );
}

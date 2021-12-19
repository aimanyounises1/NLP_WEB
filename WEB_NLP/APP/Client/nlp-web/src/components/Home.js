import React from "react";
import "../static/Home.scss";
function Home() {
  return (
   <div>
      <div className="navbar" >
        <div className="container">
          <a className="logo" href="#">
            i<span>Study</span>
          </a>
          <img
            id="mobile-cta"
            className="mobile-menu"
            src="images/menu.svg"
            alt="Open Navigation"
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
              <li class="go-premium-cta">
                <a href="#">Go Premium</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
 
       <div class="hero">
        <div class="container">
            <div class="left-col">
                <p class="subhead">It's Easier &amp; Cleaner</p>
                <h1>NLP WEB</h1>
                <div class="hero-cta">
                    <a href="#" class="primary-cta">Try for free</a>
                    <a href="#" class="watch-video-cta">
                        <img src="https://assets.codepen.io/2621168/watch.svg" alt="Watch a video"/>Watch a video
                    </a>
                </div>
            </div>
            <img src="https://raw.githubusercontent.com/aub-mind/arabert/master/arabert_logo.png" class="hero-img" alt="Illustration"/>
        </div>
        </div>
        <div>
        <section class="features-section">
        <div class="container">
            <ul class="features-list">
                <li>Unlimited Tasks</li>
                <li>SMS Task Reminders</li>
                <li>Confetti Explosions upon Task Completions</li>
                <li>Social Media Announcements</li>
                <li>Real Time Collaboration</li>
                <li>Other awesome features</li>
            </ul>

            <img src="https://storage.googleapis.com/kaggle-datasets-images/1415015/2344013/b1043d28932e77ab86b2ff365cd5374c/data-original.png?t=2021-06-17-08-40-17" alt="Man holding phone"/>
        </div>
    </section>
        </div>
        <div>
        <section class="testimonials-section">
        <div class="container">
            <ul>
                <li>
                    <img src="https://assets.codepen.io/2621168/person.jpg" alt="Person"/>

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
                <li>
                    <img src="https://assets.codepen.io/2621168/person.jpg" alt="Person"/>

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
                <li>
                    <img src="https://assets.codepen.io/2621168/person.jpg" alt="Person"/>

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
            </ul>
        </div>
    </section>
        </div>
      <div>
      <section class="contact-section">
        <div class="container">
            <div class="contact-left">
                <h2>Contact</h2>

                <form action="">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" />

                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>

                    <input type="submit" class="send-message-cta" value="Send message"/>
                </form>
            </div>
           

        </div>
    </section>
      </div>
      </div>
  );
};

export default Home;

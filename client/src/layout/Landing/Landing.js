import React, { Component } from "react";
// import { Parallax, Background } from "react-parallax";
import { Parallax, Row, Col } from "react-materialize";
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Parallax className="parallax-image" image={<img />} />
        <div className="section white">
          <div className="row container">
            <h2 className="text-bold-header">StatsDash</h2>
            <p className="grey-text text-darken-3 lighten-3">
              We provide in-depth player statistics for all your favorite
              sports, players, and custom stats.
            </p>
          </div>
        </div>

        <Parallax className="parallax-image2" image={<img />} />
        <div className="col 6">
          <div className="align-center">
            <i className="fa fa-terminal fa-5x mar-bot20" />
            <h4 className="text-bold">Services</h4>
            <p>What we offer</p>
          </div>
        </div>
        <div className="col 6">
          <div className="align-center">
            <i className="fa fa-code fa-5x mar-bot20" />
            <h4 className="text-bold">About</h4>
            <p>What we do</p>
          </div>
        </div>
        <section id="section-services" class="section pad-bot30 bg-white">
          <div class="container">
            <div className="row mar-bot40" />
          </div>
        </section>

        {/* <!-- spacer section:testimonial --> */}
        <section
          id="testimonials"
          class="section"
          data-stellar-background-ratio="0.5"
        />
        {/* 
    <!-- about --> */}
        <section id="section-about" class="section appear clearfix">
          <div class="container">
            <div class="row mar-bot40">
              <div class="col-md-offset-3 col-md-6">
                <div class="section-header">
                  <h2
                    class="section-heading animated"
                    data-animation="bounceInUp"
                  >
                    Our Team
                  </h2>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet consectetur, adipisci velit, sed quia non numquam.
                  </p>
                </div>
              </div>
            </div>

            <div class="row align-center mar-bot40">
              <div class="col-md-3">
                <div class="team-member">
                  <figure class="member-photo">
                    <img src="img/team/member1.jpg" alt="" />
                  </figure>
                  <div class="team-detail">
                    <h4>Anadelaine Catalla</h4>
                    <span>Frontend Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="team-member">
                  <figure class="member-photo">
                    <img src="img/team/member2.jpg" alt="" />
                  </figure>
                  <div class="team-detail">
                    <h4>Beccy Valentine</h4>
                    <span>Auth and more</span>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="team-member">
                  <figure class="member-photo">
                    <img src="img/team/member3.jpg" alt="" />
                  </figure>
                  <div class="team-detail">
                    <h4>Alex Sigala</h4>
                    <span>Backend and more </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

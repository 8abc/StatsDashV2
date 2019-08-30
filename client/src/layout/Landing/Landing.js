import React, { Component } from "react";
// import { Parallax, Background } from "react-parallax";
import { Parallax } from "react-materialize";
// import Footer from "./components/Footer/Footer";
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Parallax
          image={
            <img
              src="https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="hoop"
            />
          }
        />
        <div className="section white">
          <div className="row container">
            <div className="align-center">
              <h4 className="text-bold">About</h4>
              <p className="black-text">
                We provide in-depth player statistics for all your favorite
                sports, players, and custom stats.
              </p>
            </div>
            <div className="align-center">
              <h4 className="text-bold">Services</h4>
              <p className="black-text">
                A statistic dashboard that allows you to compare players in the
                NBA roster for strategic creation of fantasy league teams.
              </p>
            </div>
          </div>
        </div>

        <Parallax
          image={
            <img
              src="https://images.unsplash.com/photo-1551479460-5e76c686816a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80"
              alt="Jersey"
            />
          }
        />
        <div className="About-container z-depth-3 align-center">
          <section id="team">
            <h5 className="text-bold">The Team</h5>
            <p className="black-text" id="team-description">
              A full-stack project for UC Berkeley Extension Web Development
              Immersive created by:
            </p>
            <div className="container">
              <div className="row">
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="profile-pic"
                        src="https://avatars2.githubusercontent.com/u/46228172?s=460&v=4"
                        alt="Ana"
                      />
                    </div>
                    <div className="card-content team-members">
                      <a href="https://github.com/8abc" className="team-link">
                        Anadelaine Catalla
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="profile-pic"
                        src="https://avatars2.githubusercontent.com/u/46587755?s=460&v=4"
                        alt="Beccy"
                      />
                    </div>
                    <div className="card-content">
                      <a
                        href="https://github.com/beccyv11"
                        className="team-link"
                      >
                        Beccy Valentine
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4">
                  <div className="card">
                    <div className="card-image">
                      <img
                        className="profile-pic"
                        src="https://avatars0.githubusercontent.com/u/46912682?s=460&v=4"
                        alt="Alex"
                      />
                    </div>
                    <div className="card-content">
                      <a
                        href="https://github.com/po1sigala"
                        className="team-link"
                      >
                        Alexander Sigala
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <Footer /> */}
        <div className="align-center" id="footer">
          <span className="align-center" id="footer-text">
            Created by Ana Catalla, Beccy Valentine and Alex Sigala &copy;{" "}
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    );
  }
}

export default Landing;

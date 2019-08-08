import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-materialize";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div>
          <Parallax image={<img />} />
          <div className="section white">
            <div className="row container">
              <h2 className="header">Parallax</h2>
              <p className="grey-text text-darken-3 lighten-3">
                Parallax is an effect where the background content or image in
                this case, is moved at a different speed than the foreground
                content while scrolling.
              </p>
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
          <Parallax image={<img />} />
        </div>
      </div>
    );
  }
}

export default Landing;

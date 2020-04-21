import React, { Fragment } from 'react';
import MernImg from '../pages/mern.jpg';
const About = function () {
  return (
    <Fragment>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card text-center border-primary">
              <div className="card-header bg-primary text-light">
                <h3 className="font-weight-light">About this App</h3>
              </div>
              <div className="card-body">
                <img
                  className="rounded-circle"
                  src={MernImg}
                  alt="Logo"
                  width={500}
                />
                <h4 className="card-title">Full-stack MERN Contact Keeper</h4>
              </div>
              <div className="card-footer text-muted">
                <button className="btn btn-primary ">
                  <i className="fab fa-github" /> Github Page
                </button>
                <span> </span>
                <button className="btn btn-outline-primary">
                  <i className="fas fa-star" /> Star Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

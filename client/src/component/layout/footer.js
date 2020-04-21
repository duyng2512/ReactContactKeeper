import React, { Fragment } from 'react';

const Footer = function () {
  return (
    <Fragment>
      {/* FOOTER */}
      <div style={{ height: 100 }}></div>
      <footer id="main-footer" className="py-3 bg-info text-dark text-center">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mx-auto">
              <p className="lead font-weight-bold">
                Copyright © 2020
                <span id="year" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;

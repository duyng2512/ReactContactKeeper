import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import propTypes from 'prop-types';

/** Import Context */
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/ContactContext';
import '../../App.css';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  /** Logout */
  const logout = () => {
    authContext.logout();
    contactContext.clearContact();
  };

  /** Link for authenticated User */
  const guestLinks = (
    <Fragment>
      {/* About Page */}
      <li className="nav-item ">
        <Link to="/about">
          <span className="nav-link text-dark" style={{ fontSize: '1rem' }}>
            <i className="fas fa-info"></i> About
          </span>
        </Link>
      </li>
      {/* Login */}
      <li className="nav-item">
        <Link to="/login">
          <span className="nav-link text-dark" style={{ fontSize: '1rem' }}>
            <i className="fas fa-sign-in-alt" /> Login
          </span>
        </Link>
      </li>
    </Fragment>
  );

  /** Link for Guest User */
  const authLinks = (
    <Fragment>
      <li className="nav-item ">
        <span className="nav-link text-dark" style={{ fontSize: '1rem' }}>
          <p className="text-dark">
            Hello {authContext.user && authContext.user.name}
          </p>
        </span>
      </li>
      {/* About Page */}
      <li className="nav-item ">
        <Link to="/about">
          <span className="nav-link text-dark" style={{ fontSize: '1rem' }}>
            <i className="fas fa-info"></i> About
          </span>
        </Link>
      </li>
      {/* Logout */}
      <li className="nav-item">
        <button onClick={logout} className=" text-dark btn btn-link">
          <span style={{ fontSize: '1rem' }}>
            <i className="fas fa-sign-out-alt" /> Logout
          </span>
        </button>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary text-dark">
        {/* Exist in small, medium and large screen*/}
        <Link to="/" className="navbar-brand text-dark d-none d-sm-block">
          <div className="row align-items-center">
            <div className="col-md-2">
              <FaReact size="3rem" />
            </div>
            <div className="col-md-10">
              <span className="my-auto">
                <h2 className="d-inline mr-1">MERN</h2>
                Contact Keeper
              </span>
            </div>
          </div>
        </Link>
        {/* Only exist in extra small device*/}
        <Link className="navbar-brand text-dark d-block d-sm-none" to="/">
          <h5 className="d-inline">MERN</h5>
          <span className="font-weight-dark font-smaller">Contact Keeper</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {authContext.isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;

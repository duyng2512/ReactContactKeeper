import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';

const AuthLogin = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  useEffect(() => {
    if (authContext.isAuthenticated) {
      props.history.push('/');
    }

    if (authContext.error === 'Invalid Credentials') {
      alertContext.setAlert('Invalid Credentials', 'danger');
      authContext.clearError();
    } else if (authContext.error === 'Invalid Password') {
      alertContext.setAlert('Invalid Password', 'danger');
      authContext.clearError();
    }
    // eslint-disable-next-line
  }, [authContext.error, props.history, authContext.isAuthenticated]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const onChange = function (event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email === '' || password === '') {
      alertContext.setAlert('Please fill in all required fields', 'danger');
    } else {
      authContext.login({
        email,
        password,
      });
    }
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-left mx-auto mt-2">
            <h3 className="font-weight-light text-center">
              <span className="text-info">Login</span>
            </h3>
            {/** Form Register */}
            <form onSubmit={onSubmit}>
              {/** Email Input */}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Email"
                  />
                </div>
              </div>
              {/** Password Input */}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-info btn-block btn-large"
              >
                Login
              </button>
              <p className="text-muted">
                Don't have an account,
                <Link to="register">
                  <span className="text-primary"> create one </span>
                </Link>
                to use Contact Keeper for free
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLogin;

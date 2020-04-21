import React, { Fragment, useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const AuthRegister = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = user;
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isAuthenticated) {
      props.history.push('/');
    }

    if (authContext.error === 'User already exist') {
      alertContext.setAlert('User already exist', 'danger');
      authContext.clearError();
    } else if (authContext.error === 'Password is required') {
      alertContext.setAlert(
        'Password is required and have at least 6 characters',
        'danger'
      );
      authContext.clearError();
    } else if (authContext.error === 'Email is required') {
      alertContext.setAlert('Email is required', 'danger');
      authContext.clearError();
    } else if (authContext.error === 'Name is required') {
      alertContext.setAlert('Name is required', 'danger');
      authContext.clearError();
    }
    // eslint-disable-next-line
  }, [authContext.error, props.history, authContext.isAuthenticated]);

  const onChange = function (event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = function (event) {
    event.preventDefault();

    /** Empty Field */
    if (name === '' || email === '' || password === '' || password2 === '') {
      alertContext.setAlert(
        'Please Fill in all required field',
        'danger',
        10000
      );
      return;
    } else if (password.localeCompare(password2) !== 0) {
      /** Password did not matched */
      alertContext.setAlert(
        'Confirmed Password did not match',
        'danger',
        20000
      );
      return;
    } else {
      authContext.register({
        name,
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
              Account <span className="text-info">Register</span>
            </h3>
            {/** Form Register */}
            <form onSubmit={onSubmit}>
              {/** Name Input */}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Username"
                  />
                </div>
              </div>
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
                    placeholder="Password must have at least 6 character"
                  />
                </div>
              </div>
              {/** Confirm password */}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    onChange={onChange}
                    placeholder="Confirm password"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-info btn-block ">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthRegister;

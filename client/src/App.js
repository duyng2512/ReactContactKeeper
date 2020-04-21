/** React Component */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Page Layout Component */
import Navbar from './component/layout/navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Footer from './component/layout/footer';

/** Contact Component */
import ContactState from './context/contact/ContactState';

/** Auth Component */
import AuthState from './context/auth/AuthState';
import AuthRegister from './component/auth/AuthRegister';
import AuthLogin from './component/auth/AuthLogin';

/** Alert Component */
import AlertState from './context/alert/AlertState';
import Alerts from './component/alert/Alerts';

/** Utils Function */
import setAuthToken from './utils/setAuthToken';

/** Routing Component */
import PrivateRoute from './component/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AlertState>
      <ContactState>
        <AuthState>
          <Router>
            <Fragment className="container-fluid">
              <Navbar />
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={AuthRegister} />
                <Route exact path="/login" component={AuthLogin} />
              </Switch>
              <Footer />
            </Fragment>
          </Router>
        </AuthState>
      </ContactState>
    </AlertState>
  );
}

export default App;

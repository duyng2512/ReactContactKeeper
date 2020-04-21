import React, { Fragment, useEffect, useContext } from 'react';
/** Contact Component */
import Contact from '../contacts/Contact';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/AuthContext';

const Home = function () {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ">
            <ContactForm />
          </div>
          <div className="col-md-6">
            <ContactFilter />
            <Contact />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

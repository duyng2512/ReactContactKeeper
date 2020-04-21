import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/** Contact Context Import */
import ContactContext from '../../context/contact/ContactContext';

/** Sub-component */
import ContactItem from './ContactItem';

/** Spinner Image */
import Spinner from '../layout/spinner';

const Contact = (props) => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContact, loading } = contactContext;

  useEffect(() => {
    getContact();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h3 className="font-weight-light">Please add a contact</h3>;
  }

  return (
    <Fragment>
      <div className="row p-2">
        {contacts !== null && !loading ? (
          <TransitionGroup className="col-md-12">
            {filtered !== null
              ? filtered.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={1000}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={1000}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </div>
    </Fragment>
  );
};

Contact.propTypes = {};

export default Contact;

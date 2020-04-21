import React, { useState, Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = ({ Contact }) => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: '',
    type: 'personal',
    email: '',
    phone: '',
  });
  const { name, type, email, phone } = contact;

  /** Hooks from Edit Button */
  useEffect(() => {
    if (contactContext.currentContact !== null) {
      console.log('Or Lord');
      setContact(contactContext.currentContact);
    } else {
      setContact({ name: '', type: 'personal', email: '', phone: '' });
    }
  }, [contactContext, contactContext.currentContact]);

  /** OnChange Func */
  const onChange = function (event) {
    event.preventDefault();
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  /** OnSubmit Func */
  const onSubmit = function (event) {
    event.preventDefault();
    if (contactContext.currentContact === null) {
      /** Add state to Context */
      contactContext.addContact(contact);
    } else {
      /** Update state to Context */
      contactContext.updateContact(contact);
    }
    contactContext.clearCurrentContact();
    setContact({ name: '', type: 'personal', email: '', phone: '' });
  };

  /** clearAll Func */
  const clearAll = function (event) {
    event.preventDefault();
    setContact({ name: '', type: 'personal', email: '', phone: '' });
    contactContext.clearCurrentContact();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} className="p-3 ">
        <h3 className="font-weight-light text-dark">
          {contactContext.currentContact !== null
            ? 'Edit Contact'
            : 'Add Contact'}
        </h3>
        <div className="form-row">
          <div className="col">
            {/*NAME*/}
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text text-dark">
                    <i className="fas fa-user" />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {/*PHONE*/}
          <div className="col">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text text-dark">
                    <i className="fas fa-phone" />
                  </div>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/*EMAIL*/}
        <div className="form-row text-dark">
          <div className="col">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text text-dark">
                    <i className="fas fa-envelope" />
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          {/*TYPE*/}
          <div className="col">
            <h4 className="font-weight-light">Contact Type</h4>
            <input
              type="radio"
              name="type"
              value="personal"
              checked={type === 'personal'}
              onChange={onChange}
            />
            Personal{' '}
            <input
              type="radio"
              name="type"
              value="professional"
              checked={type === 'professional'}
              onChange={onChange}
            />
            Professional
          </div>
        </div>
        {/** SUBMIT BUTTON */}
        <button type="submit" className="btn btn-primary btn-block mt-2">
          {contactContext.currentContact !== null
            ? 'Update Contact'
            : 'Add Contact'}
        </button>
        {/** CLEAR BUTTON */}
        {contactContext.currentContact && (
          <button
            className="btn btn-secondary btn-block mt-2"
            onClick={clearAll}
          >
            Clear
          </button>
        )}
      </form>
    </Fragment>
  );
};

export default ContactForm;

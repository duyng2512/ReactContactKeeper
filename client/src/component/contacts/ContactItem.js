import React, { useContext } from 'react';
import PropsType from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { _id, name, email, type, phone } = contact;

  /** Delete OnClick */
  const onDelete = (event) => {
    event.preventDefault();
    contactContext.deleteContact(_id);
    contactContext.clearCurrentContact(contact);
  };

  /** Edit OnClick */
  const onEdit = (event) => {
    event.preventDefault();
    contactContext.setCurrentContact(contact);
  };

  return (
    <>
      <div className="col-md-12 p-2">
        <div
          className="card text-dark border-primary "
          style={{ backgroundColor: '#eef' }}
        >
          <div className="card-header ">
            <i className="fas fa-address-book d-inline mr-3" />
            <h5 className="d-inline mr-1">{name}</h5>
            <span
              className={
                'pull-right badge ' +
                (type === 'personal' ? 'badge-secondary' : 'badge-success')
              }
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: '#eef ' }}
              >
                <i className="fas fa-envelope mr-2" />
                {email}
              </li>
              <li
                className="list-group-item"
                style={{ backgroundColor: '#eef ' }}
              >
                <i className="fas fa-phone mr-2" />
                {phone}
              </li>
            </ul>
          </div>
          <div className="card-footer text-left font-smaller">
            <button className="btn btn-danger btn-sm mr-2" onClick={onEdit}>
              {' '}
              <i className="fas fa-pencil-alt mr-2"></i> Edit
            </button>
            <button className="btn btn-warning btn-sm mr-2" onClick={onDelete}>
              {' '}
              <i className="fas fa-trash mr-2"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ContactItem.PropsType = { contact: PropsType.object.isRequired };

export default ContactItem;

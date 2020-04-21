import React, { useEffect, useContext, useRef } from 'react';
import ContactContext from '../../context/contact/ContactContext';

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  /** onChange func */
  const onChange = (event) => {
    if (text.current.value !== '') {
      contactContext.filterContact(event.target.value);
    } else {
      contactContext.clearFilter();
    }
  };

  /** Check if text is null clear Filter  */
  useEffect(() => {
    if (contactContext.filtered === null) {
      text.current.value = '';
    }
  });

  return (
    <form>
      <input
        className="my-2 form-control"
        type="text"
        ref={text}
        placeholder="Filter Contact..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;

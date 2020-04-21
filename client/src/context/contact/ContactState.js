import React, { useReducer } from 'react';
import ContactContext from '../contact/ContactContext';
import ContactReducer from '../contact/ContactReducer';
import axios from 'axios';

import {
  GET_CONTACT,
  CLEAR_CONTACT,
  ADD_CONTACT,
  DEL_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../type';

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    currentContact: null,
    filtered: null,
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  /** GET CONTACT */
  const getContact = async () => {
    try {
      const res = await axios.get('api/contact');
      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.msg);
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  /** ADD CONTACT */
  const addContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/contact', contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  /** DELETE CONTACT */
  const deleteContact = async (id) => {
    try {
      await axios.delete(`api/contact/${id}`);
      dispatch({
        type: DEL_CONTACT,
        payload: id,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  /** UPDATE CONTACT */
  const updateContact = async (contact) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `api/contact/${contact._id}`,
        contact,
        config
      );
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  /** SET CURRENT CONTACT */
  const setCurrentContact = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  /** CLEAR CURRENT CONTACT */
  const clearCurrentContact = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  /** FILTER CONTACT */
  const filterContact = (text) => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text,
    });
  };

  /** CLEAR FILTER */
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  /** CLEAR CONTACT */
  const clearContact = () => {
    dispatch({
      type: CLEAR_CONTACT,
    });
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateContact,
        filterContact,
        clearFilter,
        getContact,
        clearContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

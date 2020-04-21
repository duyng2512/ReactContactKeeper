import React from 'react';

export const AlertItem = (props) => {
  const { msg, type } = props;
  return (
    <div className={`alert alert-${type}`}>
      <i className="fas fa-info-circle"></i> {msg}
    </div>
  );
};

export default AlertItem;

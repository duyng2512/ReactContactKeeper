import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AlertItem from '../alert/AlertItem';

export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 && (
      <div className="col-md-6 mx-auto m-2">
        {alertContext.alerts.map((alert) => (
          <AlertItem key={alert.id} msg={alert.msg} type={alert.type} />
        ))}
      </div>
    )
  );
};

export default Alerts;

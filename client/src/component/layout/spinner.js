import React, { Fragment } from 'react';
import spinner from '../layout/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <div className="col-md-12 text-center">
        <img src={spinner} width="400px" alt="Loading..." />
      </div>
    </Fragment>
  );
};
export default Spinner;

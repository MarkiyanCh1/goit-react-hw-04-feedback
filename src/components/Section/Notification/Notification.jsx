import React from 'react';

const Notification = ({ message }) => {
  return (
    <div style={{ padding: "30px 40px"}}>
      <h2>{message}</h2>
    </div>
  );
};

export default Notification;

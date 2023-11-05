import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div style={{ padding: "30px 40px"}}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Section

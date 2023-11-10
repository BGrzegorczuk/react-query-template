import React from 'react';
import './Content.css';

const Content = ({ children }) => {
  return (
    <div className="content-container">
      <div className="content-scrollable">
        {children}
      </div>
    </div>
  );
};

export default Content;

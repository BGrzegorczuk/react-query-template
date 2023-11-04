import React from 'react';
import './Content.css';

const Content = ({children}) => {
  return (
    <main className="content">
      <p>{children}</p>
    </main>
  );
};

export default Content;

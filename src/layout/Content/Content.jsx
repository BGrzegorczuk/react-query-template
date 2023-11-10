import React from 'react';
import './Content.css';

const Content = ({children}) => {
  return (
    <main className="content">
      <section>{children}</section>
    </main>
  );
};

export default Content;

import React from 'react';
import './Sidebar.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <NavLink to="todos">Todos</NavLink>
        <NavLink to="blank">Blank</NavLink>
        {/* Add more menu items as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;

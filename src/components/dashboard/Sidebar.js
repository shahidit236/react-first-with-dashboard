import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#f0f0f0', padding: '20px' }}>
      <h2>Admin Dashboard</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="users">Users</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="vehicles">Vehicles</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

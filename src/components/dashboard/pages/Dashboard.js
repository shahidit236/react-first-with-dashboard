import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;

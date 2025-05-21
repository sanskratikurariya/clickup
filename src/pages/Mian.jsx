import React from 'react';

import Topbar from './main/Topbar';
import Dashboard from './main/Dashboard';
import VerticalNavbar from './main/VerticalNavbar';

const Mian = () => {
  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden">
      {/* Topbar stays at top */}
      <Topbar />

      {/* Main content below topbar */}
      <div className="flex">
        {/* Fixed sidebar */}
        <VerticalNavbar />

        {/* Dashboard content with left margin and gap */}
        <div className="ml-20 flex-1 p-3">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Mian;

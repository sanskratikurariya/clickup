import React from 'react';
import Sidebar from './main/Sidebar';
import Topbar from './main/Topbar';
import Dashboard from './main/Dashboard';

const Mian = () => {
  return (
       <div className="w-screen h-screen bg-gray-950 text-white">
      <Topbar />
      <div className="flex pt-12 pl-2 h-full">
        <Sidebar />
        <div className="flex-1 p-4">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Mian;

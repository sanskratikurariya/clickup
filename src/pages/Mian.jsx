import React from 'react';

import Topbar from './main/Topbar';
import Dashboard from './main/Dashboard';


const Mian = () => {
  return (
       <div className="w-screen h-screen bg-black text-white overflow-hidden ">
      <Topbar />
        <div className="flex-1 p-3">
          <Dashboard />
      </div>
    </div>
  );
}

export default Mian;

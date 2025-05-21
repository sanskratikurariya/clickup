import React from 'react';
import { Search, Aperture, Inbox } from 'lucide-react';

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-64 h-full bg-[#1a1a1a] text-white p-4 flex rounded-xl flex-col gap-4">

 
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Home</span>
        <div className="flex items-center gap-2">
          <Search size={18} className="cursor-pointer" />
          <Aperture size={18} className="cursor-pointer" onClick={onClose} />
          <button className="bg-white text-black font-semibold px-3 py-1 text-sm rounded-md">
            + Create
          </button>
        </div>
      </div>


      <div className="flex items-center gap-2 text-sm mt-2 cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md">
        <Inbox size={16} />
        Inbox
      </div>

      <hr className="border-gray-600 my-2" />


      <div className="text-sm font-semibold">Sanskrati Kurariya's Workspace</div>
      <div className="text-sm">Team Space</div>
      <ul className="ml-4 space-y-2">
        <li>Projects</li>
        <li className="text-gray-400">New Space</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import {
  Search,
  Aperture,
  Inbox,
  ListTodo,
  Users2,
  FolderKanban,
  PlusSquare
} from 'lucide-react';

const Sidebar = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 sm:static sm:w-64 h-full bg-[#1a1a1a] text-white p-4 flex rounded-xl flex-col gap-4 sm:rounded-xl sm:block w-full sm:h-auto">
      
      {/* Header */}
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

      {/* Inbox */}
      <div className="flex items-center gap-2 text-sm mt-2 cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md">
        <Inbox size={16} />
        Inbox
      </div>

      <hr className="border-gray-600 my-2" />

      {/* Workspace Section */}
      <div className="text-sm font-semibold mb-1">Sanskrati Kurariya's Workspace</div>
      <ul className="ml-1 space-y-1">
        <li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md">
          <ListTodo size={16} /> All Tasks
        </li>
        <li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md">
          <Users2 size={16} /> Team Space
        </li>
        <li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 px-2 py-1 rounded-md">
          <FolderKanban size={16} /> Projects
        </li>
        <li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-800 text-gray-400 px-2 py-1 rounded-md">
          <PlusSquare size={16} /> New Space
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

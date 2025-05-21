import React, { useState } from 'react';
import {
  ChevronDown,
  Settings,
  ArrowUpRight,
  Users,
  AppWindow,
  LayoutDashboard,
  FileStack,
  Workflow,
  Plus
} from 'lucide-react';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuItems = [
    { label: 'Settings', icon: <Settings size={16} /> },
    { label: 'Upgrade', icon: <ArrowUpRight size={16} /> },
    { label: 'Manage Users', icon: <Users size={16} /> },
    { label: 'App Center', icon: <AppWindow size={16} /> },
    { label: 'Template Center', icon: <LayoutDashboard size={16} /> },
    { label: 'Custom Field Manager', icon: <FileStack size={16} /> },
    { label: 'Automation Manager', icon: <Workflow size={16} /> },
    { label: 'Create Workspace', icon: <Plus size={16} /> }
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white px-2 py-2 flex flex-col md:flex-row items-center justify-between z-50 shadow-md gap-2 md:gap-0">
      {/* Workspace Name with Dropdown */}
      <div className="relative w-full md:w-auto flex justify-between items-center">
        <div
          onClick={toggleDropdown}
          className="cursor-pointer text-sm font-bold flex gap-2 rounded-xl items-center bg-[#161515] px-3 py-2"
        >
          <span className="bg-red-400 px-1 py-1 rounded-lg text-white text-sm font-bold">S</span>
          <p className="flex items-center gap-1">
            Sanskrati Kurariya's Workspace <ChevronDown size={16} />
          </p>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-auto p-3 bg-[#1e1e1e] border border-gray-700 rounded-lg shadow-lg z-50">
            <div className="cursor-pointer text-sm font-bold whitespace-nowrap flex gap-2 items-center py-2 px-2 rounded hover:bg-[#1b1b1b]">
              <span className="bg-red-400 px-2 py-2 rounded-lg text-white text-sm font-bold">S</span>
              <p className="flex items-center gap-1">
                Sanskrati Kurariya's Workspace <ChevronDown size={16} />
              </p>
            </div>

            <hr className="my-2 border-gray-600" />

            <ul className="py-1">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer text-sm rounded"
                >
                  {item.icon}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Center Search and Task */}
      <div className="flex items-center justify-center w-full md:w-auto gap-2">
        {/* Hide input on small screens */}
        <input
          type="text"
          placeholder="Search everything..."
          className="hidden md:block bg-[#101010] px-2 py-1 rounded-md w-full md:w-64"
        />
        <button className="bg-purple-600 px-3 py-1 rounded-md whitespace-nowrap text-sm">
          + Task
        </button>
      </div>

      {/* Profile Circle */}
      <div className="hidden md:block w-8 h-8 bg-white rounded-full"></div>
    </div>
  );
};

export default Topbar;

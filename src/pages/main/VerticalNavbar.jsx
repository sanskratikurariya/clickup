import React from 'react';
import {
  Home,
  ListChecks,
  CalendarDays,
  BrainCircuit,
  UserPlus,
  Settings,
  TrendingUp
} from 'lucide-react';

const VerticalNavbar = () => {
  return (
    <div className="fixed top-14 rounded-xl left-0 z-50 h-[92%] w-20 bg-[#1a1a1a] text-white border-1 border-[#595858] flex flex-col justify-between py-6 px-2">
      
      {/* Top Navigation */}
      <div className="flex flex-col gap-6 items-center">
        <NavItem icon={<Home className="w-5 h-5" />} label="Home" />
        <NavItem icon={<ListChecks className="w-5 h-5" />} label="My Tasks" />
        <NavItem icon={<CalendarDays className="w-5 h-5" />} label="Calendar" />
        <NavItem icon={<BrainCircuit className="w-5 h-5" />} label="Brain" />
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-6 items-center">
        <NavItem icon={<UserPlus className="w-5 h-5" />} label="Invite" />
        <NavItem icon={<TrendingUp className="w-5 h-5" />} label="Upgrade" />
        <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-blue-400">
      {icon}
      <span className="text-[10px] mt-1 text-center">{label}</span>
    </div>
  );
};

export default VerticalNavbar;

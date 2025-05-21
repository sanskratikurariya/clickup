import React from 'react';
import { List, PlusCircle } from 'lucide-react';

const ListSection = () => {
  return (
    <div className="bg-[#151414] text-white p-6 rounded-xl mt-0 h-[20vh] sm:h-[40vh] border border-[#484848] md:h-[30vh] lg:h-[40vh]  flex flex-col items-center justify-between overflow-hidden">
      
      <h4 className="font-medium mb-2 text-sm sm:text-base self-start">Lists</h4>

   
      <div className="w-full bg-[#2d2c2c] p-2 rounded flex items-center gap-2 hover:bg-[#3a3a3a] cursor-pointer">
        <List size={18} className="text-gray-400" />
        <span className="text-sm">Project Tasks</span>
      </div>

  
      <div className="flex flex-col items-center justify-center mt-4">
        <PlusCircle size={45} className="text-white mb-2" />

        <button className="bg-white text-black px-6 py-1.5 rounded-lg text-sm font-semibold shadow hover:bg-gray-100 transition">
          Add
        </button>

        <p className="text-xs text-gray-400 mt-2 text-center px-2">
          add new list to your space
        </p>
      </div>
    </div>
  );
};

export default ListSection;

import React from 'react';
import { File } from 'lucide-react';

const FolderSection = () => {
  return (
    <div className="bg-[#151414] text-white p-4 rounded-xl mt-0 h-[20vh] sm:h-[40vh] border-1 border-[#484848] md:h-[30vh] lg:h-[40vh] overflow-y-auto">
      <h4 className="font-medium mb-2 text-sm sm:text-base">Folders</h4>
      <div className="bg-[#2d2c2c] p-2 rounded flex items-center gap-2 hover:bg-[#3a3a3a] cursor-pointer">
        <File size={18} className="text-gray-400" />
        <span className="text-sm">Projects</span>
      </div>
    
    </div>
  );
};

export default FolderSection;

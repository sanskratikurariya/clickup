import React from 'react';
import { UploadCloud } from 'lucide-react';

const ResourceSection = () => {
  return (
    <div className="bg-[#151414] text-white p-4 rounded-xl h-[20vh] sm:h-[40vh] md:h-[30vh] lg:h-[40vh] border border-[#484848] flex flex-col">
      
      {/* Header aligned to left */}
      <h1 className="text-white font-bold text-left mb-4">Resources</h1>
      
      {/* Drop area centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <UploadCloud size={45} className="text-white mb-3" />
          <p className="text-sm sm:text-base font-medium">Drop files here</p>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;

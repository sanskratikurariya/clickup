import React from 'react';
import { UploadCloud } from 'lucide-react';

const ResourceSection = () => {
  return (
    <div className="bg-[#151414] text-white p-4 rounded-xl h-[20vh] sm:h-[40vh] md:h-[30vh] lg:h-[40vh] border border-[#484848] flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <UploadCloud size={45} className="text-white mb-3" />
        <p className="text-sm sm:text-base font-medium">Drop files here</p>
      </div>
    </div>
  );
};

export default ResourceSection;

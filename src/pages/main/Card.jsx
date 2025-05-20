import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';

const Card = ({ title: initialTitle, items, icon: Icon, showAddButton = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleTitleClick = () => setIsEditing(true);
  const handleInputBlur = () => setIsEditing(false);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  return (
    <div
      className="
        bg-[#1b1b1b] 
        p-4 
        rounded-lg 
        border 
        border-[#242424] 
        text-white 
      
    
     h-fullw-full
        cursor-pointer
        flex  justify-between
     
      "
    >
      <div>
        {isEditing ? (
          <input
            ref={inputRef}
            className="
              bg-gray-900  
             
              rounded 
              px-2 
              py-1 
              text-lg 
              font-semibold 
              mb-4 
              w-full 
              text-white 

          
            "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <h3
            onClick={handleTitleClick}
            className="
              font-semibold 
              text-lg 
              mb-4 
              flex 
              items-center 
              gap-2 
              hover:underline
              transition 
              border-2 
              border-dashed 
              border-transparent
              hover:border-gray-400
              focus:outline-none
              focus:border-blue-500
              cursor-pointer
            "
            tabIndex={0}
            role="button"
            title="Click to edit"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsEditing(true);
              }
            }}
          >
            {Icon && <Icon size={20} />} {title}
          </h3>
        )}

        <ul className="text-sm space-y-3 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              {item.icon && <item.icon size={16} className="text-gray-400" />}
              <span className="truncate">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {showAddButton && (
        <div className="mt-4 flex justify-center items-center">
          <button
            className="
              flex 
              items-center 
              justify-center 
              gap-2 
              bg-white 
              text-black 
              font-semibold 
              py-2 
              px-4 
              rounded 
              shadow 
              transition 
              hover:bg-gray-200
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            title="Add new bookmark"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
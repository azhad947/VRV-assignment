import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DarkLightToggle = ({}) => {
    const { isDarkMode , toggleTheme} = useTheme()
 

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex  items-center h-8 w-12  sm:h-8 sm:w-16
        rounded-full transition-colors duration-200 ease-in-out
        ${isDarkMode ? 'bg-indigo-600' : 'bg-gray-200'}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      `}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Sun
          size={12}
          className={`transition-opacity duration-200 sm:w-4 sm:h-4 
            w-3 h-3  ${
            isDarkMode ? 'opacity-0' : 'opacity-100 text-yellow-500'
          }`}
        />
        <Moon
          size={12}
          className={`transition-opacity duration-200 sm:w-4 sm:h-4 
            w-3 h-3  ${
            isDarkMode ? 'opacity-100 text-white' : 'opacity-0'
          }`}
        />
      </div>

     
      <div
        className={`
          absolute left-0 inline-block h-5 w-5 sm:h-6 sm:w-6
          transform rounded-full bg-white shadow-lg 
          ring-0 transition-transform duration-200 ease-in-out
          ${isDarkMode 
            ? 'sm:translate-x-9 translate-x-1.5' 
            : 'sm:translate-x-1 translate-x-1'
          }
          ${isDarkMode ? 'shadow-purple-400/50' : 'shadow-sky-300/50'}
        `}
      >
        
        <div className="absolute inset-0 flex items-center justify-center">
          {isDarkMode ? (
            <Moon size={12} className="text-purple-600 sm:w-3 sm:h-3  w-2.5 h-2.5" />
          ) : (
            <Sun size={12} className="text-amber-500  sm:w-3 sm:h-3 w-2.5 h-2.5" />
          )}
        </div>
      </div>
    </button>
  );
};

export default DarkLightToggle;
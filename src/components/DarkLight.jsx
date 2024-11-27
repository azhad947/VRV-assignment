import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DarkLightToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="flex items-center">
            <button
                onClick={toggleTheme}
                className={`
                    relative inline-flex items-center justify-between
                    w-16 h-8 xs:w-18 sm:w-20 
                    rounded-full p-1
                    transition-all duration-300 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                    ${isDarkMode 
                        ? 'bg-indigo-600 focus:ring-indigo-500' 
                        : 'bg-gray-200 focus:ring-gray-400'
                    }
                `}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {/* Sun Icon */}
                <span 
                    className={`
                        absolute left-1.5 top-1/2 -translate-y-1/2
                        transition-all duration-300
                        ${isDarkMode 
                            ? 'opacity-0 scale-75' 
                            : 'opacity-100 scale-100 text-yellow-500'
                        }
                    `}
                >
                    <Sun size={16} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </span>

                {/* Moon Icon */}
                <span 
                    className={`
                        absolute right-1.5 top-1/2 -translate-y-1/2
                        transition-all duration-300
                        ${isDarkMode 
                            ? 'opacity-100 scale-100 text-white' 
                            : 'opacity-0 scale-75'
                        }
                    `}
                >
                    <Moon size={16} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </span>

                {/* Toggle Switch */}
                <div
                    className={`
                        absolute top-1/2 -translate-y-1/2 
                        w-6 h-6 xs:w-6 xs:h-6 sm:w-6 sm:h-6
                        bg-white rounded-full shadow-md
                        transform transition-all duration-300 ease-in-out
                        ${isDarkMode 
                            ? 'translate-x-8 xs:translate-x-9 sm:translate-x-10 ' 
                            : 'translate-x-0'
                        }
                        ${isDarkMode 
                            ? 'shadow-purple-400/50' 
                            : 'shadow-sky-300/50'
                        }
                    `}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        {isDarkMode ? (
                            <Moon 
                                size={14} 
                                className="text-purple-600 w-3.5 h-3.5 xs:w-4 xs:h-4" 
                            />
                        ) : (
                            <Sun 
                                size={14} 
                                className="text-amber-500 w-3.5 h-3.5 xs:w-4 xs:h-4" 
                            />
                        )}
                    </div>
                </div>
            </button>
        </div>
    );
};

export default DarkLightToggle;
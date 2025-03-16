import React from 'react';

export const Spinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
        <div className="relative w-20 h-20">
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    </div>
);


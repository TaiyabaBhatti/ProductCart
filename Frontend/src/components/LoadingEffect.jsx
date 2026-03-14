import React from 'react';

const LoadingEffect = ({text}) => {
    return (
                  <div className="absolute rounded-md z-50 top-0 left-0 h-full w-full bg-gray-400 opacity-75 flex items-center justify-center">
            <p className="text-4xl font-bold ">{text}...</p>
            
            </div>
    );
}

export default LoadingEffect;

// src/components/Bio.jsx
import React from 'react';

const Bio = ({ name, age, bio, heading }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-red-600">{heading}</h2>
      
      {/* Name */}
      <h1 className="text-2xl font-bold text-center text-amber-500 mt-4">{name}</h1>
      
      {/* Age */}
      <p className="text-lg text-center text-cyan-400">Age: {age}</p>
      
      {/* Bio */}
      <p className="mt-4 text-center text-gray-700">{bio}</p>
    </div>
  );
};

export default Bio;

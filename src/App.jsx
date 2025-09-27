// src/App.jsx
import React from 'react';
import Bio from './components/Bio';

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center p-6">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-center text-lime-600 mb-8">
        Welcome to My Page
      </h1>
      
      {/* Bio Card */}
      <Bio 
        heading="Personal Bio"
        name="Vijayalakshmi" 
        age={32} 
        bio="I'm a software developer with a passion for learning new technologies and building creative projects. I enjoy solving problems and collaborating with teams." 
      />
    </div>
  );
}

export default App;

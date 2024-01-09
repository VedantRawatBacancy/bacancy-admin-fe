import React from 'react';

const MainContent = ({ children, renderComp }) => {
    
    
  return (
    <div className="flex px-4 p-5 ml-64 align-center justify-center items-center w-dvw h-dvh">
      <main>
        {renderComp}
      </main>
    </div>
  );
};

export default MainContent;

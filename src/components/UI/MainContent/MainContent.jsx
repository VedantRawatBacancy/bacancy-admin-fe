import React from 'react';

const MainContent = ({ children }) => {
  return (
    <div className="flex px-4 -z-10 ml-60 align-center justify-center items-center w-dvw h-dvh">
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainContent;

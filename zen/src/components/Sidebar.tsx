import React from "react";

function Sidebar() {
  const currentDate = new Date();
  {
    /* 
    we need to make a light/dark icon
    */
  }
  return (
    <>
      <div className="pt-4 text-3xl h-screen bg-side-bg max-w-60 flex flex-col items-center font-roboto">
        <h2 className="text-center text-side-text">Welcome user!</h2>
        <h5 className="pt-15 flex text-center text-side-text">Today is,</h5>
        <h5 className="flex text-center text-side-text">
          {currentDate.toDateString()}
        </h5>
      </div>
    </>
  );
}

export default Sidebar;

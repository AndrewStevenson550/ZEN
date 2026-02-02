import React from "react";
import { SunMoon } from "lucide-react";

function Sidebar() {

  {/* 
    we need to make a light/dark icon
    */}
  return (
    <>
      <div className="pt-4 text-3xl h-screen bg-side-bg max-w-60 flex flex-col items-center">
        <h2 className="font-roboto text-center">Welcome user!</h2>

        <button className="mt-10 p-2 rounded-full hover:bg-gray-400 transition-colors"><SunMoon className="w-10 h-10"/></button>
        
      </div>
    </>
  );
}

export default Sidebar;

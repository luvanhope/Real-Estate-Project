import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[20px] px-[20px] gap-[10px]">
      
      <div className="flex items-center gap-[20px] sm:gap-[40px] lg:gap-[51px] text-white font-[400] min-w-0">
        
        <img 
          src="/logo.svg" 
          alt="logo" 
          className="w-[90px] sm:w-[110px] lg:w-[130px] shrink-0"
        />

        <div className="flex gap-[10px] sm:gap-[15px] lg:gap-[20px] text-[12px] sm:text-[16px] lg:text-[22px] whitespace-nowrap overflow-hidden">
          <p className="truncate">+1 234 567-89-00</p>
          <p className="truncate">+1 234 567-89-00</p>
        </div>
      </div>

      <button className="flex-shrink-0 text-[12px] sm:text-[16px] lg:text-[22px] font-[400] bg-[#2B3640E5] px-3 sm:px-4 py-2 rounded-[16px] text-white whitespace-nowrap">
        ❤ Избранное
      </button>
      
    </header>
  );
};

export default Header;
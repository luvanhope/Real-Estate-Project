import Link from "next/link";
import React from "react";

const SecondHeader = () => {
  return (
    <header className="w-full px-[20px] py-[20px]  bg-[#2B3640]">
      <div className="max-w-[100%] mx-auto flex justify-between items-start sm:items-center gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[20px]">
            <Link href={"/"}>
              <img
                src="/logo.svg"
                alt="logo"
                className="w-[100px] sm:w-[120px] lg:w-[140px]"
              />
            </Link>

            <div className="hidden sm:flex gap-[15px] text-white text-[16px] lg:text-[20px]">
              <p>+1 234 567-89-00</p>
              <p>+1 234 567-89-00</p>
            </div>
          </div>

          <div className="flex sm:hidden flex-col text-white text-[14px]">
            <p>+1 234 567-89-00</p>
            <p>+1 234 567-89-00</p>
          </div>
        </div>

        <button
          className="
          text-[14px] sm:text-[16px] lg:text-[20px]
          bg-[#2B3640E5]
          px-[14px] sm:px-[18px]
          py-[8px]
          rounded-[16px]
          text-white
          whitespace-nowrap
          self-start sm:self-auto
        "
        >
          ❤ Избранное
        </button>
      </div>
    </header>
  );
};

export default SecondHeader;

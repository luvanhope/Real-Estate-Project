import React from "react";
import Link from "next/link";

const Mortgage = () => {
  return (
    <section className=" bg-[#2B3640] px-[20px]! md:py-[60px] md:px-[40px]">
      <div className="max-w-[100%] flex flex-col gap-[30px] md:gap-[40px]">
        <h1 className="text-[40px] md:text-[60px] font-[500] text-white">
          Ипотека
        </h1>

        <ul className="flex flex-wrap items-stretch gap-[20px]">
          <li className="flex-1 min-w-[280px]">
            <Link
              href="/"
              className="block h-full transition-transform hover:scale-[1.02]"
            >
              <img
                src="/Variant1.png"
                alt="Ипотечные программы"
                className="w-full h-auto object-contain"
              />
            </Link>
          </li>

          <li className="flex-1 min-w-[280px]">
            <Link
              href="/"
              className="block h-full transition-transform hover:scale-[1.02]"
            >
              <img
                src="/Variant2.png"
                alt="Ипотечный калькулятор"
                className="w-full h-auto object-contain"
              />
            </Link>
          </li>

          <li className="flex-1 min-w-[280px]">
            <Link href="/" className="block h-full">
              <button className="w-full h-full min-h-[120px] px-[24px] py-[30px] text-[30px]! md:text-[24px] border rounded-[20px] border-gray-400 text-white flex items-center justify-center gap-4 transition-colors hover:bg-white/10">
                Посмотреть еще
                <span className="text-[28px]">→</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Mortgage;

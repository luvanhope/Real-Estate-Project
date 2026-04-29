import React from "react";

const SecondInfo = () => {
  return (
    <section className="bg-[#2B3640] text-white py-[50px] px-[20px]">
      <div className="max-w-[100%] mx-auto">
        <ul
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-[30px]
        "
        >
          <li className="flex items-start gap-[15px] text-[16px] sm:text-[17px] lg:text-[18px]">
            <img src="/In5.svg" alt="" className="w-[40px] h-[40px] shrink-0" />
            <p>Поможем со скорейшей продажей вашей квартиры</p>
          </li>

          <li className="flex items-start gap-[15px] text-[16px] sm:text-[17px] lg:text-[18px]">
            <img src="/In6.svg" alt="" className="w-[40px] h-[40px] shrink-0" />
            <p>Занимаемся сопровождением ипотечной программы</p>
          </li>

          <li className="flex items-start gap-[15px] text-[16px] sm:text-[17px] lg:text-[18px]">
            <img src="/In7.svg" alt="" className="w-[40px] h-[40px] shrink-0" />
            <p>
              Мы дорожим своей репутацией и работаем для вас 7 дней в неделю!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SecondInfo;

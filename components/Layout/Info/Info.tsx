import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col text-center pt-[40px] sm:pt-[126px] gap-[20px] sm:gap-[60px] px-[16px]">
      {/* Изменено: text-[36px] для мобильных, чтобы заголовок не занимал весь экран */}
      <h1 className="text-white text-[36px] sm:text-[40px] lg:text-[60px] font-[700] leading-tight">
        Найди недвижимость своей мечты
      </h1>

      <p className="text-white text-[18px] sm:text-[20px] lg:text-[24px] font-[500]">
        Легкий способ купить и продать вашу недвижимость
      </p>
    </div>
  );
};
export default Info;

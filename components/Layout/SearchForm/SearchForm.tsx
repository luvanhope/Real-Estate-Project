import React from "react";

const SearchForm = () => {
  return (
    <form className="bg-white mx-[20px] my-[60px] p-[16px] sm:p-[20px] rounded-[30px] flex flex-col lg:flex-row flex-wrap gap-[12px] lg:gap-[10px] items-stretch lg:items-center">
      <select
        name="city"
        id="city"
        defaultValue=""
        className="w-full sm:w-[48%] lg:w-[216px] h-[60px] lg:h-[70px] px-[16px] border rounded-[20px] bg-transparent text-gray-400 appearance-none"
      >
        <option value="" disabled>
          Город, район
        </option>
      </select>

      <input
        className="w-full sm:w-[48%] lg:w-[216px] h-[60px] lg:h-[70px] px-[16px] border rounded-[20px]"
        type="number"
        placeholder="Площадь"
      />

      <select
        name="rooms"
        id="rooms"
        defaultValue=""
        className="w-full sm:w-[48%] lg:w-[216px] h-[60px] lg:h-[70px] px-[16px] border rounded-[20px] bg-transparent appearance-none"
      >
        <option value="" disabled>
          Комнатность
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <input
        className="w-full sm:w-[48%] lg:w-[216px] h-[60px] lg:h-[70px] px-[16px] border rounded-[20px]"
        type="number"
        placeholder="Цена"
      />

      <button
        type="submit"
        className="w-full lg:w-auto bg-[#DE9C8E] px-[40px] lg:px-[78px] h-[60px] lg:h-[70px] text-white rounded-[20px] text-[18px] lg:text-[20px] font-[500]"
      >
        Поиск
      </button>
    </form>
  );
};

export default SearchForm;

import React from "react";

const SearchForm = () => {
  return (
   <div className="w-full px-[20px] mt-[30px] sm:mt-[60px]"> {/* Уменьшен отступ сверху */}
      <form
        className="
        bg-white 
        max-w-[100%] 
        mx-auto 
        p-[20px] 
        rounded-[20px] sm:rounded-[30px] 
        shadow-md
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-[repeat(4,1fr)_auto] 
        gap-[12px] lg:gap-[10px]
        items-center
      "
      >
        <select
          defaultValue=""
          className="h-[60px] lg:h-[70px] px-[16px] border rounded-[20px] text-gray-400 appearance-none"
        >
          <option value="" disabled>
            Город, район
          </option>
        </select>

        <input
          type="number"
          placeholder="Площадь"
          className="h-[60px] lg:h-[70px] px-[16px] border rounded-[20px]"
        />

        <select
          defaultValue=""
          className="h-[60px] lg:h-[70px] px-[16px] border rounded-[20px] appearance-none"
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
          type="number"
          placeholder="Цена"
          className="h-[60px] lg:h-[70px] px-[16px] border rounded-[20px]"
        />

        <button
          type="submit"
          className="
            h-[60px] lg:h-[70px]
            bg-[#DE9C8E]
            text-white
            rounded-[20px]
            text-[18px] lg:text-[20px]
            font-[500]
            px-[40px]
            w-full lg:w-auto
          "
        >
          Поиск
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

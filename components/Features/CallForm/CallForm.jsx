import React from "react";

const CallForm = () => {
  return (
    <div className="bg-[#2B3640] py-12 md:py-[80px] px-5">
      <form
        className="max-w-[100%] mx-auto bg-cover bg-center bg-no-repeat rounded-[30px] p-6 md:p-16 flex flex-col items-center text-center gap-8 md:gap-12"
        style={{ backgroundImage: "url('/CallFormFon.png')" }}
      >
        <div className="text-[#2B3640]">
          <h2 className="text-2xl md:text-[40px] font-medium mb-4">
            Заказать обратный звонок
          </h2>
          <p className="text-base md:text-[18px] font-normal opacity-90">
            Если у Вас возникли проблемы или вопросы мы с Вами свяжемся
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-[10px] w-full md:w-auto">
          <input
            className="bg-[#F4F5F7] px-4 py-3.5 text-[#2B3640] rounded-[14px] w-full md:w-[248px] h-[52px] outline-none"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className="bg-[#F4F5F7] px-4 py-3.5 text-[#2B3640] rounded-[14px] w-full md:w-[248px] h-[52px] outline-none"
            type="tel"
            placeholder="Номер телефона"
          />
          <button
            className="bg-[#2B3640] rounded-[14px] w-full md:w-[210px] h-[52px] text-white text-sm font-medium hover:bg-opacity-90 transition-all"
            type="submit"
          >
            Проконсультироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default CallForm;

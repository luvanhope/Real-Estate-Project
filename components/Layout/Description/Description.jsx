import React from "react";

const Description = () => {
  return (
    <section className="w-full bg-[#2B3640] px-5 py-10 md:py-20">
      <div className="w-full flex flex-col md:flex-row gap-[25px]">
        <div className="w-full md:w-1/2 bg-white rounded-[30px] p-6 md:p-10 flex flex-col justify-between min-h-[412px]">
          <div className="flex flex-col gap-[25px]">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#2B3640] leading-tight">
              О “КупиДом”
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.5] text-[#2B3640] font-normal max-w-full ">
              Мы работаем в городах Нур-Султан и Кокшетау и занимаемся полным
              сопровождением сделок на рынке недвижимости, как первичной, так и
              вторичной. Наша компания работает на рынке уже больше двух лет,
              наша основа — штат опытных специалистов, которые работают на рынке
              недвижимости не первый год, знают город как свои пять пальцев,
              могут рассказать вам особенности каждого района, плюсы и минусы
              любого ЖК в городах присутствия.
            </p>
          </div>

          <button className="flex items-center gap-5 text-[#2B3640] font-medium text-[18px] md:text-[20px] group w-fit">
            Подобрать жилье
            <svg
              width="54"
              height="14"
              viewBox="0 0 54 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-2 transition-transform duration-300"
            >
              <path
                d="M0 7H52M52 7L46 1M52 7L46 13"
                stroke="#2B3640"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            className="w-full h-full object-cover rounded-[30px]"
            src="/description.png"
            alt="Property"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;

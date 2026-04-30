"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstates } from "./VariantsSlice";

const BestVariants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRealEstates());
  }, [dispatch]);

  const RealEstates = useSelector((state) => state.RealEstates.RealEstates);
  const loading = useSelector((state) => state.RealEstates.loading);
  const error = useSelector((state) => state.RealEstates.error);

  return (
    <div className="bg-[#2B3640] py-10">
      <h1 className="text-white px-4 font-semibold text-3xl md:text-5xl lg:text-[60px] mb-[54px] text-center md:text-left">
        Лучшие варианты
      </h1>

      {loading && <h1 className="text-white text-center">Загрузка...</h1>}
      {error && <h1 className="text-red-400 text-center">{`Ошибка: ${error}`}</h1>}

      {RealEstates && (
        <ul className="
          /* Мобильная версия (Слайдер) */
          flex gap-5 overflow-x-auto px-10 pb-6 
          snap-x snap-mandatory justify-start md:justify-center
          no-scrollbar 
          /* Десктопная версия (Сетка) */
          md:grid md:grid-cols-3 lg:grid-cols-6 md:px-4 md:overflow-visible md:snap-none
        ">
          {RealEstates.slice(0, 5).map((RealEstate) => (
            <li
              key={RealEstate.id}
              className="
                min-w-[280px] sm:min-w-[320px] md:min-w-0 
                snap-center /* Карточка магнитится к центру при скролле */
                bg-white rounded-[20px] p-3 shadow-md flex flex-col justify-between
              "
            >
              <div>
                <img
                  src={RealEstate.images?.[0]?.srcUrl}
                  alt={RealEstate.customer?.branchName || "Недвижимость"}
                  className="w-full h-[177px] object-cover rounded-[16px]"
                />

                <div className="mt-3 flex flex-col gap-2">
                  <h1 className="font-semibold text-[16px]  line-clamp-1">
                    {RealEstate.customer?.branchName}
                  </h1>

                  <p className="text-[12px] text-[#474A57B2] leading-[1.4] line-clamp-3"    >
                    {RealEstate.bedrooms}-комнатная квартира, Площадь —{" "}
                    {RealEstate.displaySize}, Адрес —{" "}
                    {RealEstate.displayAddress}
                  </p>
                </div>
              </div>

              <h1 className="font-bold text-[18px] mt-4">
                {RealEstate.price?.amount?.toLocaleString()} $
              </h1>
            </li>
          ))}

          {/* КНОПКА "Посмотреть ещё" */}
          <li className="min-w-[280px] sm:min-w-[320px] md:min-w-0 h-full snap-center">
            <button
              className="w-full h-full min-h-[300px] md:min-h-full rounded-[20px] bg-center bg-cover text-white font-semibold text-lg flex items-center justify-center text-center p-5 relative overflow-hidden transition-transform active:scale-95"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/btnFon.png')",
              }}
            >
              <span className="z-10">Посмотреть ещё →</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BestVariants;
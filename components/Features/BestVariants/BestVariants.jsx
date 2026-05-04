"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstates } from "./VariantsSlice";
import Link from "next/link";

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
      {error && (
        <h1 className="text-red-400 text-center">{`Ошибка: ${error}`}</h1>
      )}

      {RealEstates && (
        <ul
          className="
      flex gap-5 overflow-x-auto px-5 pb-6 
      snap-x snap-mandatory justify-start
      no-scrollbar 
      md:grid md:grid-cols-3 lg:grid-cols-6 md:px-4 md:overflow-visible md:snap-none
      items-stretch
    "
        >
          {RealEstates.slice(0, 5).map((RealEstate) => (
            <Link
              key={RealEstate.id}
              href={`/Product/${RealEstate.id}`}
              className="flex min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center"
            >
              <li
                className="
            w-full
            bg-white rounded-[20px] p-3 shadow-md 
            flex flex-col justify-between
            transition-shadow hover:shadow-lg
          "
              >
                <div>
                  <div className="w-full h-[177px] overflow-hidden rounded-[16px]">
                    <img
                      src={RealEstate.images?.[0]?.srcUrl || "/no-image.png"}
                      alt={RealEstate.customer?.branchName || "Недвижимость"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-3 flex flex-col gap-2">
                    <h1 className="font-semibold text-[16px] line-clamp-1 text-[#1F262E]">
                      {RealEstate.customer?.branchName}
                    </h1>

                    <p className="text-[12px] text-[#474A57B2] leading-[1.4] line-clamp-3">
                      {RealEstate.bedrooms}-комнат, Площадь —{" "}
                      {RealEstate.displaySize}, Адрес —{" "}
                      {RealEstate.displayAddress}
                    </p>
                  </div>
                </div>

                <h1 className="font-bold text-[18px] mt-4 text-[#1F262E]">
                  {RealEstate.price?.amount?.toLocaleString()} $
                </h1>
              </li>
            </Link>
          ))}

          <li className="flex min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
            <Link href={"/Variants"} className="w-full">
              <button
                className="
            w-full h-full min-h-[250px] md:min-h-0
            rounded-[20px] bg-center bg-cover 
            text-white font-semibold text-lg 
            flex items-center justify-center text-center p-5 
            relative overflow-hidden transition-transform active:scale-95
          "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/btnFon.png')",
                }}
              >
                <span className="z-10">Посмотреть ещё →</span>
              </button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BestVariants;

"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstates } from "../../Features/BestVariants/VariantsSlice";
import Link from "next/link";

const AllVariants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRealEstates());
  }, [dispatch]);

  const { RealEstates, loading, error } = useSelector(
    (state) => state.RealEstates,
  );

  return (
    <div className="bg-[#2B3640] min-h-screen p-4 md:p-8 flex flex-col">
      {loading ? (
        <div className="m-auto bg-white px-[50px] py-[35px] rounded-[24px]">
          <h1 className="text-[40px] md:text-[60px] text-black text-center">
            Загрузка...
          </h1>
        </div>
      ) : error ? (
        <div className="m-auto">
          <h1 className="text-red-400 text-center text-2xl">{`Ошибка: ${error}`}</h1>
        </div>
      ) : (
        <ul className="max-w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {RealEstates?.map((item) => (
            <Link key={item.id} href={`/Product/${item.id}`}>
              <div className="bg-white rounded-[24px] overflow-hidden flex flex-row p-3 md:p-4 gap-4 md:gap-6 shadow-md">
                <div className="relative w-[110px] h-[110px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[180px] lg:w-[220px] lg:h-[180px] flex-shrink-0">
                  <img
                    src={item.images?.[0]?.srcUrl || "/no-image.png"}
                    alt="property"
                    className="w-full h-full object-cover rounded-[16px] md:rounded-[20px]"
                  />
                </div>

                <div className="flex flex-col flex-grow py-1 min-w-0 justify-center">
                  <div className="flex justify-between items-start">
                    <h2 className="text-[16px] md:text-[20px] font-bold text-[#2B3640] truncate">
                      {item.customer?.branchName}
                    </h2>
                  </div>

                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[18px] md:text-[22px] font-extrabold text-[#2B3640] whitespace-nowrap">
                      {item.price?.amount?.toLocaleString()} $
                    </span>
                  </div>

                  <p className="mt-1 text-[#2B3640] font-medium text-[13px] md:text-[16px]">
                    {item.bedrooms}-комнат, {item.displaySize}
                  </p>

                  <p className="text-gray-400 text-[11px] md:text-sm mt-1 line-clamp-2 leading-tight">
                    {item.displayAddress}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllVariants;

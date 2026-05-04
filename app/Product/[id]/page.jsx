"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRealEstates } from "../../../components/Features/BestVariants/VariantsSlice";
import SecondHeader from "../../../components/Layout/SecondHeader/SecondHeader";
import Link from "next/link";

const Page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { RealEstates, loading } = useSelector((state) => state.RealEstates);

  useEffect(() => {
    if (RealEstates.length === 0) {
      dispatch(fetchRealEstates());
    }
  }, [dispatch, RealEstates.length]);

  const data = RealEstates.find((item) => String(item.id) === String(id));

  if (loading || RealEstates.length === 0 || !data) {
    return (
      <div className="w-full h-screen bg-[#2B3640] flex items-center justify-center">
        <h1 className="text-white text-[24px] md:text-[40px] text-center">
          Загрузка...
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1F262E] min-h-screen pb-10">
      <SecondHeader />

      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="py-4">
          <Link
            href={"/Variants"}
            className="text-[#DE9C8E] text-[14px] hover:underline"
          >
            ← Назад к вариантам
          </Link>
        </div>

        <h1 className="text-white font-[500] text-[20px] sm:text-[24px] md:text-[31px] mb-6 leading-tight">
          Продажа жилья: {data?.bedrooms}-комн., {data?.displaySize},{" "}
          {data?.displayAddress}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-6">
          <div className="md:col-span-2 relative h-[250px] sm:h-[350px] md:h-[500px]">
            <img
              src={data.images?.[0]?.srcUrl || "/no-image.png"}
              alt=""
              className="w-full h-full object-cover rounded-lg md:rounded-l-lg md:rounded-r-none"
            />
            <button className="absolute top-4 left-4 bg-[#DE9C8E]/90 text-white px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-95 transition-transform">
              <span>♡</span> В избранное
            </button>
          </div>

          <div className="hidden md:grid grid-rows-2 gap-2 h-[500px]">
            <img
              src={data.images?.[1]?.srcUrl || "/no-image.png"}
              alt=""
              className="w-full h-full object-cover rounded-tr-lg"
            />
            <div className="relative h-full">
              <img
                src={data.images?.[2]?.srcUrl || "/no-image.png"}
                alt=""
                className="w-full h-full object-cover rounded-br-lg opacity-50"
              />
              <Link
                href={"/Variants"}
                className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium hover:scale-105 transition-transform"
              >
                Еще {RealEstates.length}+
              </Link>
            </div>
          </div>

          <div className="md:hidden flex gap-2 overflow-x-auto"></div>
        </div>

        <div className="bg-white rounded-2xl p-5 md:p-6 mb-6 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center shadow-lg text-black">
          <div className="flex flex-col gap-1">
            <h2 className="text-[28px] md:text-[32px] font-bold leading-none">
              {data.price?.amount?.toLocaleString()} GBP
            </h2>
            <p className="text-gray-500 text-sm">{data?.displayAddress}</p>
          </div>

          <div className="flex gap-8 md:gap-10 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0">
            <div>
              <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">
                Комнат
              </p>
              <p className="text-lg md:text-xl font-bold">{data?.bedrooms}</p>
            </div>
            <div>
              <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-wider">
                Площадь
              </p>
              <p className="text-lg md:text-xl font-bold">
                {data?.displaySize}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#2B3640] rounded-2xl p-6 md:p-8 text-white">
          <h2 className="text-[22px] md:text-[28px] font-bold mb-6">
            Характеристики
          </h2>

          <div className="space-y-4">
            {[
              { label: "Жилая площадь", value: data?.displaySize },
              {
                label: "Тип недвижимости",
                value: data?.propertySubType || "Detached",
              },
              { label: "Расположение", value: data?.displayAddress },
              {
                label: "Тип владения",
                value: data?.tenure?.tenureType || "Freehold",
              },
              { label: "Количество спален", value: data?.bedrooms },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-600 pb-2 gap-1"
              >
                <span className="text-gray-400 text-sm md:text-base">
                  {item.label}
                </span>
                <span className="font-medium text-sm md:text-base sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Импортируем закрашенное сердечко, так как здесь все товары по умолчанию в избранном
import { FaHeart } from "react-icons/fa";
import { deleteFromFavorites } from "../Favorites/FavoritesSlice";

const Favorites = () => {
  const favorites = useSelector((state) => state.FavoritesEstate.favorites);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#2B3640] min-h-screen p-4 md:p-8 flex flex-col">
      {favorites?.length > 0 ? (
        <ul className="max-w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {favorites.map((item) => (
            <div key={item.id} className="relative group">
              <Link href={`/Product/${item.id}`}>
                <div className="bg-white rounded-[24px] overflow-hidden flex flex-row p-3 md:p-4 gap-4 md:gap-6 shadow-md transition-shadow hover:shadow-xl">
                  {/* Изображение */}
                  <div className="relative w-[110px] h-[110px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[180px] lg:w-[220px] lg:h-[180px] flex-shrink-0">
                    <img
                      src={item.img || "/no-image.png"}
                      alt="property"
                      className="w-full h-full object-cover rounded-[16px] md:rounded-[20px]"
                    />
                  </div>

                  {/* Информация */}
                  <div className="flex flex-col flex-grow py-1 min-w-0 justify-center">
                    <h2 className="text-[16px] md:text-[20px] font-bold text-[#2B3640] truncate">
                      {item.branchName}
                    </h2>

                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-[18px] md:text-[22px] font-extrabold text-[#2B3640] whitespace-nowrap">
                        {item.price} $
                      </span>
                    </div>

                    <p className="mt-1 text-[#2B3640] font-medium text-[13px] md:text-[16px]">
                      {item.bedrooms}-комнат, {item.Size}
                    </p>

                    <p className="text-gray-400 text-[11px] md:text-sm mt-1 line-clamp-2 leading-tight">
                      {item.adress}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Активная кнопка-сердечко для удаления */}
              <button
                onClick={() => dispatch(deleteFromFavorites(item.id))}
                className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-all active:scale-90"
                title="Удалить из избранного"
              >
                <FaHeart className="text-red-500 text-xl" />
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="m-auto text-center">
          <h2 className="text-white text-2xl opacity-50">
            У вас пока нет избранных товаров
          </h2>
          <Link
            href="/Variants"
            className="text-blue-400 mt-4 inline-block hover:underline"
          >
            Вернуться к поиску
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;

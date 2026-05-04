import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  bg-[#2B3640] text-white pt-16 pb-8 px-5">
      <div className="max-w-[100%] px-[20px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-2">
            <img src="/logo.svg" alt="КупиДом" className="h-10" />
            <p className="text-gray-300 text-sm md:text-base max-w-[320px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium">Быстрые ссылки</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/Variants"
                  className="hover:text-white transition-colors"
                >
                  Вся Недвижимость
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium">Контакты</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <p>hello@landify.co</p>
              </li>
              <li>
                <p>+91 98765 43210</p>
              </li>
              <li>
                <p>772 Lyonwood Ave Walnut, CA 91789</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2026 КУПИДОМ. All rights reserved</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Sitemap
            </Link>
            <Link href="#" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

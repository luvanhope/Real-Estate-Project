import BestVariants from "@/components/Features/BestVariants/BestVariants";
import Header from "@/components/Layout/Header/Header";
import Info from "@/components/Layout/Info/Info";
import Mortgage from "@/components/Layout/Mortgage/Mortgage";
import SearchForm from "@/components/Layout/SearchForm/SearchForm";
import SecondInfo from "@/components/Layout/SecondInfo/SecondInfo";

export default function Home() {
  return (
    <>
      {/* Изменено: min-h-screen вместо h-screen и добавлен padding-bottom для мобилок */}
      <div className="bg-[url('/fon.jpg')] bg-cover bg-center min-h-screen pb-[40px] lg:pb-0">
        <Header />
        <Info />
        <SearchForm />
      </div>
      <SecondInfo />
      <Mortgage />
      <BestVariants/>
    </>
  );
}
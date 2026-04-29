import Header from "@/components/Layout/Header/Header";
import Info from "@/components/Layout/Info/Info";
import Mortgage from "@/components/Layout/Mortgage/Mortgage";
import SearchForm from "@/components/Layout/SearchForm/SearchForm";
import SecondInfo from "@/components/Layout/SecondInfo/SecondInfo";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/fon.jpg')] bg-cover bg-center h-screen">
        <Header />
        <Info />
        <SearchForm />
      </div>
      <SecondInfo />
      <Mortgage />
    </>
  );
}

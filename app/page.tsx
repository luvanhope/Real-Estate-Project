import BestVariants from "@/components/Features/BestVariants/BestVariants";
import Header from "@/components/Layout/Header/Header";
import Info from "@/components/Layout/Info/Info";
import Mortgage from "@/components/Layout/Mortgage/Mortgage";
import SearchForm from "@/components/Layout/SearchForm/SearchForm";
import SecondInfo from "@/components/Layout/SecondInfo/SecondInfo";
import Description from "../components/Layout/Description/Description";
import CallForm from "../components/Features/CallForm/CallForm";
import Footer from "../components/Layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/fon.jpg')] bg-cover bg-center min-h-screen pb-[40px] lg:pb-0">
        <Header />
        <Info />
        <SearchForm />
      </div>
      <SecondInfo />
      <Mortgage />
      <BestVariants />
      <Description />
      <CallForm />
      <Footer />
    </>
  );
}

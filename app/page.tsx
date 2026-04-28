import Header from "@/components/Layout/Header/Header";
import Info from "@/components/Layout/Info/Info";
import SearchForm from "@/components/Layout/SearchForm/SearchForm";

export default function Home() {
  return (
    <div className="bg-[url('/fon.jpg')] bg-cover bg-center min-h-screen">
      <Header />
      <Info />
      <SearchForm />
    </div>
  );
}
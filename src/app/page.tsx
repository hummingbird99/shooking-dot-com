import { SneakerList } from "@/pages/productList";
import { Header } from "@/widgets/header";

const Home = () => {
  return <>
  <main className="flex items-center justify-center min-h-screen">
    <div className="place-items-center w-[430px] h-[1000px] border border-black overflow-x-hidden overflow-y-auto">
    <Header />
    <SneakerList />
    </div>
  </main>
  </>
};

export default Home;

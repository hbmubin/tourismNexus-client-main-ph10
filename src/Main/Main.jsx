import { Outlet } from "react-router-dom";
import Header from "../Componetnts/Header";
import Footer from "../Componetnts/Footer";

const Main = () => {
  return (
    <div>
      <div className="w-[1344px] mx-auto ">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

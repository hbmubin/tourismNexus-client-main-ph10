import { Outlet } from "react-router-dom";
import Header from "../Componetnts/Header";
import Footer from "../Componetnts/Footer";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  return (
    <div>
      <div className="w-[1344px] mx-auto ">
        <Fade>
          <Header></Header>
        </Fade>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

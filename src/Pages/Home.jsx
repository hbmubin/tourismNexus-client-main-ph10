import { Link, useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import SpotCard from "./SpotCard";
import Countries from "./Countries";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import TravelTips from "../Componetnts/TravelTips";
import AboutUs from "../Componetnts/AboutUs";

const Home = () => {
  const spots = useLoaderData();
  const limitedSpots = spots.slice(0, 6);

  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <Fade>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper  mb-16 h-[80vh]"
          >
            <SwiperSlide>
              <div
                className="hero border-2 border-neutral-600  h-full rounded-[50px] overflow-hidden"
                style={{
                  backgroundImage: "url(https://i.ibb.co/myqPwL4/bd.jpg)",
                  zIndex: 99,
                }}
              >
                <div className="hero-overlay bg-opacity-30 "></div>
                <div className="hero-content  lg:mt-52 text-center text-neutral-content">
                  <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Bangladesh</h1>
                    <p className="mb-5">
                      Bangladesh boasts diverse natural beauty with lush green
                      landscapes, picturesque rivers, and the world's largest
                      mangrove forest, offering a captivating blend of tropical
                      flora and fauna
                    </p>
                    <button
                      onClick={handleScroll}
                      className="btn rounded-full bg-opacity-50 hover:bg-green-500 duration-300 px-10 hover:text-white outline-0 border-0"
                    >
                      Explore top Spots
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero border-2 border-neutral-600  h-full rounded-[50px] overflow-hidden "
                style={{
                  backgroundImage: "url(https://i.ibb.co/b6hfKsw/malay.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content mt-52 text-center text-neutral-content">
                  <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Malaysia</h1>
                    <p className="mb-5">
                      Malaysia is renowned for its breathtaking natural
                      landscapes, including ancient rainforests, turquoise
                      waters, and diverse wildlife, providing a rich tapestry of
                      ecological wonders.
                    </p>
                    <button
                      onClick={handleScroll}
                      className="btn rounded-full  bg-opacity-50 hover:bg-green-500 duration-300 px-10 hover:text-white outline-0 border-0"
                    >
                      Explore top Spots
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero border-2 border-neutral-600 h-full rounded-[50px] overflow-hidden"
                style={{
                  backgroundImage: "url(https://i.ibb.co/KGb3s5w/thai.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content mt-52 text-center text-neutral-content">
                  <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold">Thailand</h1>
                    <p className="mb-5">
                      Thailand showcases stunning natural beauty with pristine
                      beaches, majestic mountains, and lush jungles, making it a
                      paradise for nature lovers and adventurers alike.
                    </p>
                    <button
                      onClick={handleScroll}
                      className="btn rounded-full  bg-opacity-50 hover:bg-green-500 duration-300 px-10 hover:text-white outline-0 border-0"
                    >
                      Explore top Spots
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Fade>
      </div>
      <div>
        <div ref={ref} className="text-center text-3xl font-semibold ">
          Top Spots of
          <span className="text-green-500">
            <Typewriter
              words={[" South Asia"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </div>
        <hr className="h-[3px] w-full bg-neutral-400 mb-10 mt-4" />
        {spots ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {limitedSpots.map((spot) => (
              <SpotCard key={spot._id} spot={spot}></SpotCard>
            ))}
          </div>
        ) : (
          <div> No data to show</div>
        )}
        <div className="text-center mt-6">
          {spots && (
            <Link
              to="/alltourist"
              className="btn rounded-full  bg-green-600 hover:bg-green-500 duration-300 px-10 text-white"
            >
              Show All
            </Link>
          )}
        </div>
      </div>
      <div>
        <div className="mt-24">
          <div className="text-center text-3xl font-semibold ">
            Top Countries of{" "}
            <span className="text-green-500">
              <Typewriter
                words={[" South Asia"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </div>
          <hr className="h-[3px] w-full bg-neutral-400 mb-10 mt-4" />
        </div>
        <div>
          <Countries></Countries>
        </div>
      </div>

      <div>
        <TravelTips />
      </div>
      <div>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;

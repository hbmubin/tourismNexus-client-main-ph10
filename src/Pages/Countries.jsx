import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <div className="flex flex-col gap-6">
      <Link
        to={`/bangladesh`}
        className="hero h-[50vh] rounded-3xl overflow-hidden hover:scale-105 duration-300 w-11/12 mx-auto cursor-pointer"
        style={{
          backgroundImage: "url(https://i.ibb.co/myqPwL4/bd.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Bangladesh</h1>
            <p className="mb-5">
              Bangladesh boasts diverse natural beauty with lush green
              landscapes, picturesque rivers, and the world's largest mangrove
              forest, offering a captivating blend of tropical flora and fauna.
            </p>
            <div className="text-2xl text-neutral-300 font-semibold">
              Press to Show All
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/malaysia`}
        className="hero h-[50vh] rounded-3xl overflow-hidden hover:scale-105 duration-300 w-11/12 mx-auto cursor-pointer"
        style={{
          backgroundImage: "url(https://i.ibb.co/b6hfKsw/malay.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Malaysia</h1>
            <p className="mb-5">
              Malaysia is renowned for its breathtaking natural landscapes,
              including ancient rainforests, turquoise waters, and diverse
              wildlife, providing a rich tapestry of ecological wonders.
            </p>
            <div className="text-2xl text-neutral-300 font-semibold">
              Press to Show All
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/thailand`}
        className="hero h-[50vh] rounded-3xl overflow-hidden hover:scale-105 duration-300 w-11/12 mx-auto cursor-pointer"
        style={{
          backgroundImage: "url(https://i.ibb.co/KGb3s5w/thai.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Thailand</h1>
            <p className="mb-5">
              Thailand showcases stunning natural beauty with pristine beaches,
              majestic mountains, and lush jungles, making it a paradise for
              nature lovers and adventurers alike.
            </p>
            <div className="text-2xl text-neutral-300 font-semibold">
              Press to Show All
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/cambodia
`}
        className="hero h-[50vh] rounded-3xl overflow-hidden hover:scale-105 duration-300 w-11/12 mx-auto cursor-pointer"
        style={{
          backgroundImage: "url(https://i.ibb.co/KGb3s5w/thai.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Cambodia</h1>
            <p className="mb-5">
              Cambodia boasts natural beauty with its ancient Angkorian temples
              nestled amidst lush jungles, serene Tonle Sap Lake with floating
              villages, and the tranquil Cardamom Mountains adorned with
              waterfalls and diverse wildlife. The country's landscapes blend
              history and nature, offering unique experiences to visitors.
            </p>
            <div className="text-2xl text-neutral-300 font-semibold">
              Press to Show All
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/vietnam`}
        className="hero h-[50vh] rounded-3xl overflow-hidden hover:scale-105 duration-300 w-11/12 mx-auto cursor-pointer"
        style={{
          backgroundImage: "url(https://i.ibb.co/KGb3s5w/thai.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Vietnam</h1>
            <p className="mb-5">
              Vietnam captivates with its natural beauty, featuring picturesque
              landscapes of towering limestone karsts in Halong Bay, lush
              terraced rice paddies in Sapa, and pristine beaches along the
              central coast. The country's diverse ecosystems also include dense
              forests, winding rivers, and scenic waterfalls, offering
              enchanting experiences for travelers.
            </p>
            <div className="text-2xl text-neutral-300 font-semibold">
              Press to Show All
            </div>
          </div>
        </div>
      </Link>
      <Link
        to={`/Indonesia`}
        className="hero h-[50vh] rounded-3xl overflow-hidden hover:scale-105 duration-300 w-11/12 mx-auto cursor-pointer"
        style={{
          backgroundImage: "url(https://i.ibb.co/KGb3s5w/thai.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Indonesia</h1>
            <p className="mb-5">
              Indonesia boasts stunning natural beauty with its diverse
              landscapes, including lush rainforests teeming with wildlife,
              pristine beaches with turquoise waters, and majestic volcanic
              mountains that offer breathtaking vistas. The archipelago's rich
              biodiversity and vibrant coral reefs make it a paradise for nature
              lovers and adventurers alike.
            </p>
            <div className="text-2xl text-neutral-300 font-semibold">
              Press to Show All
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Countries;

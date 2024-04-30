import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  const {
    spotName,
    photo,
    description,
    country,
    location,
    cost,
    season,
    travel,
    visitors,
    _id,
  } = spot;
  return (
    <div
      className="hero border-2 border-neutral-600 rounded-3xl overflow-hidden w-full h-72 relative"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className=" w-2/5 text-center absolute right-0 h-full p-4 bg-[#cdddd95e]">
        <div className="text-3xl font-semibold text-neutral-800">
          {spotName}
        </div>
        <div className="text-neutral-700">{country}</div>
        <div className="flex justify-center gap-2 font-medium mt-2 text-neutral-800">
          <div>Average cost : </div>
          <span> {cost}$</span>
        </div>
        <div className="flex justify-center gap-2 font-medium mt-1 text-neutral-800">
          <div>Visitors (Year) : </div>
          <span> {visitors}</span>
        </div>
        <div className="flex justify-center gap-2 font-medium mt-1 text-neutral-800">
          <div>Travel Time : </div>
          <span> {travel}</span>
        </div>
        <div className="flex justify-center gap-2 font-medium mt-1 text-neutral-800">
          <div>Seasonality : </div>
          <span> {season}</span>
        </div>
        <Link
          to={`/detailspot/${_id}`}
          className="btn  hover:bg-green-600 bg-green-500 text-white rounded-3xl mt-2 border-none"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpotCard;

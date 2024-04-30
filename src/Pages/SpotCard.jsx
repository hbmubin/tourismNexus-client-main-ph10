import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  return (
    <div
      className="hero border-2 border-neutral-600 rounded-3xl overflow-hidden w-full h-72 p-4 relative"
      style={{
        backgroundImage: `url(${spot.photo})`,
      }}
    >
      <div className="flex-grow w-2/5 text-center rounded-2xl p-4 bg-[#cdddd95e]">
        <div className="text-3xl font-semibold">{spot.spotName}</div>
        <div className="text-neutral-700">{spot.country}</div>
        <div className="flex justify-center gap-2 font-medium mt-3 text-neutral-800">
          <div>Average cost : </div>
          <span> {spot.cost}</span>
        </div>
        <Link className="btn bg-[#cccccc9d] hover:bg-green-500 hover:text-white rounded-3xl mt-2 border-none">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpotCard;

import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AllTourist = () => {
  const spots = useLoaderData();

  return (
    <div className="mt-10">
      {spots ? (
        <div className="grid grid-cols-2 gap-6">
          {spots.map((spot) => (
            <SpotCard key={spot._id} spot={spot}></SpotCard>
          ))}
        </div>
      ) : (
        <div> No data to show</div>
      )}
    </div>
  );
};

export default AllTourist;

import { useLoaderData, useParams } from "react-router-dom";
import CountrySpot from "./CountrySpot";

const Country = () => {
  const { name } = useParams();
  const spots = useLoaderData();

  const countrySpots = spots.filter((spot) => spot.country == name);

  return (
    <div>
      <div className="text-center text-4xl font-semibold mt-8 text-neutral-600">
        All Tourist Spots of {name}
      </div>
      <hr className="h-[2px] w-full bg-neutral-600 mb-10 mt-4" />
      <div className="grid lg:grid-cols-2 gap-6">
        {countrySpots.map((spot) => (
          <CountrySpot key={spot._id} spot={spot}></CountrySpot>
        ))}
      </div>
      {countrySpots.length < 1 && (
        <div className="text-center text-2xl font-semibold text-neutral-600">
          No Spot added to this Country{" "}
        </div>
      )}
    </div>
  );
};

export default Country;

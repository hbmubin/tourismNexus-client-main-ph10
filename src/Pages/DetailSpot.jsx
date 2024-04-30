import { useLoaderData } from "react-router-dom";

const DetailSpot = () => {
  const spot = useLoaderData();
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
  } = spot;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 ">
        <figure className="w-1/3 max-h-full">
          <img className="rounded-tl-3xl rounded-bl-3xl " src={photo} />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title text-4xl">{spotName}</h2>
            <p className="text-neutral-500">
              {location}, {country}
            </p>
            <hr className="bg-neutral-400 w-full h-[2px] mb-4" />
            <p className="mb-4">{description}</p>
          </div>
          <div className="flex flex-col gap-1  text-lg">
            <div>Average Cost : {cost}$</div>
            <div>Seasonality : {season}</div>
            <div>Travel Time : {travel}</div>
            <div>Visitors per Year : {visitors}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSpot;

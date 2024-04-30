import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const [modifiedSpot, SetModifiedSpot] = useState(spot);
  const {
    _id,
    spotName,
    photo,
    description,
    country,
    location,
    cost,
    season,
    travel,
    visitors,
  } = modifiedSpot;

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spotName = form.spotName.value;
    const demoCountry = form.country.value;
    const country = demoCountry.toLowerCase();
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const travel = form.travel.value;
    const visitors = form.visitors.value;

    const updatedSpot = {
      photo,
      spotName,
      country,
      location,
      description,
      cost,
      season,
      travel,
      visitors,
    };
    console.log(updatedSpot);

    fetch(
      `https://tourism-nexus-server-assign-10-ogpmnb5xw-hbmubins-projects.vercel.app/spot/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedSpot),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        if (data.modifiedCount > 0) {
          SetModifiedSpot(updatedSpot);
          Swal.fire({
            title: "Success!",
            text: "Successfully Updated",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold">Update Spot</h1>
          </div>
          <div className="card shrink-0 w-full border-2 border-neutral-300  ">
            <form
              onSubmit={handleUpdateSpot}
              className="card-body grid grid-cols-2"
            >
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">
                    Photo URL <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={photo}
                  name="photo"
                  className="input input-bordered rounded-full "
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">
                    Spot Name <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="spotName"
                  defaultValue={spotName}
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Country Name <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="country"
                  defaultValue={country}
                  className="input input-bordered rounded-full"
                  required
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Location <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">
                    Description <span className="text-orange-500">*</span>
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered rounded-2xl"
                  defaultValue={description}
                  name="description"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Average Cost <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  defaultValue={cost}
                  name="cost"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Seasonality <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={season}
                  name="season"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Travel Time <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={travel}
                  name="travel"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Visitors per Year <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  defaultValue={visitors}
                  name="visitors"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>

              <div className="form-control mt-6 col-span-2">
                <button className="btn bg-green-500 text-white rounded-full">
                  Add New Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;

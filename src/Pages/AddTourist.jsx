import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddTourist = () => {
  const { user } = useContext(AuthContext);

  const handleAddSpot = (e) => {
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
    const email = form.email.value;
    const username = form.username.value;
    const newSpot = {
      photo,
      spotName,
      country,
      location,
      description,
      cost,
      season,
      travel,
      visitors,
      email,
      username,
    };

    fetch("https://tourism-nexus-server-assign-10.vercel.app/spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully added",
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
            <h1 className="text-5xl font-bold">Add New Spot</h1>
          </div>
          <div className="card shrink-0 w-full border-2 border-neutral-300  ">
            <form
              onSubmit={handleAddSpot}
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
                  placeholder="Photo URL"
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
                  placeholder="Spot Name"
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
                  placeholder="Country"
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
                  placeholder="Location"
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
                  name="description"
                  placeholder="Description"
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
                  placeholder="Average Cost "
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
                  placeholder="Seasonality"
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
                  placeholder="Travel Time"
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
                  name="visitors"
                  placeholder="Visitors per Year"
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Your Email <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  className="input input-bordered rounded-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Your Username <span className="text-orange-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="username"
                  defaultValue={user.displayName}
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

export default AddTourist;

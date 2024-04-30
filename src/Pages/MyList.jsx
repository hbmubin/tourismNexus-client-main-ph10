import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
  const spots = useLoaderData();
  const { user } = useContext(AuthContext);
  const [modifiedMyList, setModifiedMyList] = useState(spots);

  const myList = spots.filter((spot) => spot.email == user.email);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tourism-nexus-server-assign-10-ogpmnb5xw-hbmubins-projects.vercel.app/spot/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your spot has been deleted.",
                icon: "success",
              });
              const remaining = spots.filter((spot) => spot._id !== _id);
              setModifiedMyList(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="overflow-x-auto lg:w-3/5 mx-auto ">
          {modifiedMyList.length > 0 ? (
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Spot Name</th>
                  <th>Country</th>
                  <th>Average Cost</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {modifiedMyList.map((spot) => (
                  <tr key={spot._id}>
                    <td>{spot.spotName}</td>
                    <td>{spot.country}</td>
                    <td>{spot.cost}</td>
                    <td className="text-end">
                      <Link
                        to={`/updatespot/${spot._id}`}
                        className="btn  rounded-3xl text-white hover:bg-sky-600 bg-sky-500"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(spot._id)}
                        className=" btn rounded-3xl ml-4 text-white hover:bg-orange-600 bg-orange-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className=" text-center text-xl text-neutral-600 font-semibold">
              No Spot in My List
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyList;

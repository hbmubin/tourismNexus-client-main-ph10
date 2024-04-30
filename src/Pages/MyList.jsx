import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const MyList = () => {
  const spots = useLoaderData();
  const { user } = useContext(AuthContext);

  const myList = spots.filter((spot) => spot.email == user.email);

  return (
    <div>
      <div>MyList :{myList.length}</div>
      <div>
        <div className="overflow-x-auto w-3/5 mx-auto ">
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
              {myList.map((spot) => (
                <tr key={spot._id}>
                  <td>{spot.spotName}</td>
                  <td>{spot.country}</td>
                  <td>{spot.cost}</td>
                  <td className="text-end">
                    <button className="btn  rounded-3xl text-white hover:bg-sky-600 bg-sky-500">
                      Update
                    </button>
                    <button className=" btn rounded-3xl ml-4 text-white hover:bg-orange-600 bg-orange-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;

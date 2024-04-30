import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { useState } from "react";

const AllTourist = () => {
  const spots = useLoaderData();
  const [sortedSpots, setSortedSpots] = useState([...spots]);

  const handleSortBy = (filter) => {
    if (filter === "descending") {
      const sorted = [...spots].sort((a, b) => b.cost - a.cost);
      setSortedSpots(sorted);
    }
    if (filter === "ascending") {
      const sorted = [...spots].sort((a, b) => a.cost - b.cost);
      setSortedSpots(sorted);
    }
  };

  return (
    <div>
      <div className="text-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 rounded-3xl">
            Sort by Cost
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-3xl"
          >
            <li>
              <a onClick={() => handleSortBy("ascending")}>Ascending</a>
            </li>
            <li>
              <a onClick={() => handleSortBy("descending")}>Descending</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:mt-10">
        {spots ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {sortedSpots.map((spot) => (
              <SpotCard key={spot._id} spot={spot}></SpotCard>
            ))}
          </div>
        ) : (
          <div> No data to show</div>
        )}
      </div>
    </div>
  );
};

export default AllTourist;

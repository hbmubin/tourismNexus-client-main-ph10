const TravelTips = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Travel Tips</h2>
      <hr className="h-[2px] w-full bg-neutral-400 mb-6" />
      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
          <p className="text-sm">
            Explore the diverse culinary delights of the region, from street
            food to fine dining.
          </p>
          <button className="mt-4 btn bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-500 duration-300">
            Discover More
          </button>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Cultural Experiences</h3>
          <p className="text-sm">
            Immerse yourself in local traditions and festivals for a unique
            cultural journey.
          </p>
          <button className="mt-4 btn bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-500 duration-300">
            Explore Now
          </button>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Adventure Tours</h3>
          <p className="text-sm">
            Embark on thrilling adventures exploring nature's wonders, from
            hiking trails to adrenaline-pumping activities.
          </p>
          <button className="mt-4 btn bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-500 duration-300">
            Start Exploring
          </button>
        </div>
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Local Art & Crafts</h3>
          <p className="text-sm">
            Discover the vibrant art scene and traditional crafts of the region,
            showcasing local talent and cultural heritage.
          </p>
          <button className="mt-4 btn bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-500 duration-300">
            Browse Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;

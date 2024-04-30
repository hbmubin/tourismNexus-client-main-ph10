const AboutUs = () => {
  return (
    <div className="my-12 mt-16 h-[50vh]">
      <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
      <hr className="h-[2px] w-full bg-neutral-400 mb-2" />
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-between h-[50vh]">
          <img
            src="/public/letter-n-alphabet-natural-green-icons-leaf-logo-free-vector2.jpg"
            alt="About Us"
            className=" rounded-lg w-[400px]"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            Welcome to <span className="text-green-500">Torism Nexus!</span> We
            are dedicated to providing unforgettable travel experiences that
            connect people with nature and diverse cultures around the world.
          </p>
          <p className="text-lg mb-4">
            Our goal is to inspire a sense of wonder and appreciation for the
            planet's natural beauty. Through our curated tours and activities,
            we aim to promote sustainable travel and cultural exchange,
            enriching the lives of our travelers.
          </p>
          <p className="text-lg">
            Join us on this journey of discovery and exploration, and let's
            create lasting memories while preserving the environment and
            supporting local communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

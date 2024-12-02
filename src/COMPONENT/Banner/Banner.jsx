import rectangle from "../../assets/Rectangle 1.svg";
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mb-24">
  <section
    className="text-white rounded-xl"
    style={{
      backgroundImage: `url(${rectangle})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "500px",
    }}
  >
    <div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-32 lg:flex lg:h-full lg:items-center">
      <div className="mx-auto max-w-lg text-center lg:max-w-3xl">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
          Discover an exceptional cooking
          <span className="block">class tailored for you!</span>
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm sm:text-lg text-gray-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-8 py-3 text-xs sm:text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="#"
          >
            Explore now
          </a>

          <a
            className="block w-full rounded border border-blue-600 px-8 py-3 text-xs sm:text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="#"
          >
            Our Feedback
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default Banner;
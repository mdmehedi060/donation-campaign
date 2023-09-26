

const Banner = () => {
    return (
      
      <div
      
        className="hero w-full h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md gap-2">
            <h1 className="mb-5 text-5xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <input
              className="p-3 rounded-md w-60"
              type="text"
              placeholder="Search here"
            />
            <button className="p-3 rounded-md text-white bg-[#FF444A]">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
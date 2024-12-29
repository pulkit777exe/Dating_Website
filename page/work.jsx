export function Work() {
    return (
      <div className="mt-[200px] max-w-screen mb-[200px]">
        <div className="py-16 md:py-24 flex justify-between items-center">

          <div className="text-center ml-[250px] md:text-left w-full md:w-1/2">
            <h2 className="text-2xl font-bold mt-8 mb-16 md:mt-0">Work at Hinge.</h2>
            <h1 className="text-5xl md:text-6xl mt-6 mb-16 w-[280px] md:w-[400px] mx-auto md:mx-0 font-semibold">
              Let’s work together
            </h1>
            <p className="text-xl text-gray-400 mt-6 mb-8 mx-auto md:mx-0 md:w-[350px]">
              We’re looking for people who want to make dating effective, not addictive.
            </p>
            <button className="text-xl text-white bg-black rounded-full w-[180px] mt-8 mx-auto md:mx-0 hover:bg-gray-800 transition-colors p-1">
              Join us
            </button>
          </div>
  
          <div className="flex gap-4 justify-center md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.hinge.co/37d75e9dc4f19f56c56515e953dd0797dec14dff-838x1200.jpg?w=384&q=75"
              alt="Hinge Office"
              className="rounded-2xl w-[250px] h-[350px] object-cover"
            />
            <img
              src="https://images.hinge.co/28bca069952ec64ea2cc24cce75191077c349e97-1599x2419.jpg?w=384&q=75"
              alt="Hinge Collaboration"
              className="rounded-3xl w-[300px] h-[450px] object-cover"
            />
            <img
              src="https://images.hinge.co/8d7c570149cb51ac7b04255f9ed22f6853fe33a1-1970x2704.jpg?w=384&q=75"
              alt="Hinge Team"
              className="rounded-2xl w-[250px] h-[350px] object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  
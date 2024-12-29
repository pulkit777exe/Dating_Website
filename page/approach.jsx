export function Approach() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col min-h-screen px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-around items-center md:items-start">
            <div className="text-2xl pt-[40px] md:pt-[100px] font-semibold pl-4 md:pl-[40px] text-center md:text-left">
              Our Approach
              <div className="text-3xl sm:text-4xl md:text-5xl pt-[20px] md:pt-[40px]">
                Go on your last first <br /> date.
              </div>
            </div>
            <div className="text-xl text-gray-400 mt-8 md:mt-[420px] w-full md:w-[400px] text-center md:text-left">
              Hinge is built on the belief that anyone looking for love should be able to find it. It's also built on an acclaimed Nobel-Prize-winning algorithm, so we can succeed in getting you out on promising dates, not keeping you on the app.
              How we do it
              <br />
              <button className="mt-4 sm:mt-[50px] px-6 py-2 text-white rounded-full bg-black text-white hover:bg-gray-800 min-w-[150px]">
                Here we go.
              </button>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row justify-around items-center mt-10 md:mt-[150px]">
          <div className="w-full md:w-[800px] mb-8 md:mb-0">
            <img
              src="https://cdn.prod.website-files.com/64339668e5bde96984e41146/64e8e462b8c939b052bdfbd0_246f7f7790f593d162867c37a6391902a6e65cb9-1200x912-p-1080.webp"
              alt="Hinge"
              className="rounded-3xl w-full max-w-full h-auto object-cover md:-translate-x-20"
            />
          </div>
  
          <div className="flex flex-col items-center md:items-start w-full md:w-[400px] mt-8 md:mt-[150px] text-center md:text-left">
            <div className="font-semibold text-2xl mb-[30px]">Hinge Labs</div>
            <div className="text-3xl sm:text-4xl md:text-5xl mb-[50px] font-semibold">
              We're love scientists.
            </div>
            <div className="text-xl text-gray-400 w-full md:w-[300px]">
              Our Hinge Labs researchers, behavioral analysts, and matchmakers study daters and compatibility so we can make Hinge better for you. We've gotten pretty good at it.
            </div>
          </div>
        </div>
      </div>
    );
  }
  
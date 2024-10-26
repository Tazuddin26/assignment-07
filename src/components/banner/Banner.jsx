/* eslint-disable react/prop-types */
import { ToastContainer } from "react-toastify";
const Banner = ({ handleAddToClaim }) => {
  return (
    <div className="container mx-auto rounded-2xl h-[450px] bg-[#131313] bg-[url('./images/bg-shadow.png')] ">
      <div className=" ">
        <div className="flex justify-center items-center mb-6">
          <img
            className="mt-8 object-cover"
            src="./images/banner-main.png"
            alt=""
          />
        </div>

        <div className="text-center space-y-4 ">
          <h1 className="text-4xl  text-white font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-400 text-xl font-semibold">
            Beyond Boundaries Beyond Limits
          </p>
          <div>
            <button
              onClick={() => handleAddToClaim(6000000)}
              className="btn btn-outline border border-[#E7FE29] hover:text-black rounded-xl px-1 p-1 hover:bg-[#E7FE29]"
            >
              <p className=" bg-[#E7FE29] px-6 py-3 rounded-lg font-bold">
                Claim Free Credit
              </p>
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

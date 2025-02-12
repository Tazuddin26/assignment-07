/* eslint-disable react/prop-types */
import { FaUser, FaFlag } from "react-icons/fa";
const Player = ({ player, handleAddToSelected }) => {
  const {
    img,
    player_name,
    player_country,
    player_category,
    bowling_style,
    rating,
    batting_style,
    price,
  } = player;

  return (
    <div className="card card-compact bg-base-100 w-96 mx-auto shadow-xl mb-8 border p-4">
      <figure className="">
        <img
          className="w-full h-[250px] object-cover"
          src={img}
          alt="Palyers"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {player_name}
        </h2>
        <div className=" flex justify-between">
          <div className="flex items-center">
            <span>
              <FaFlag className="text-gray-500" />
            </span>
            <p className="ml-2 text-gray-500">{player_country}</p>
          </div>
          <div className="">
            <p className="border px-6 py-2 rounded-xl bg-slate-100 text-gray-700">
              {player_category}
            </p>
          </div>
        </div>
        <hr />
        <div className="space-y-2">
          <p className="font-bold flex items-center">
            Rating <span className="text-amber-700 ml-2 ">{rating}</span>
          </p>
          <div className="flex items-center">
            <p className="font-bold">{batting_style}</p>
            <p className="text-end text-gray-500">{bowling_style}</p>
          </div>
        </div>
        <div className="card-actions justify-end items-center">
          <p className="font-bold">Price: ${price}</p>
          <button
            onClick={() => handleAddToSelected(player)}
            className="btn border rounded-xl "
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;

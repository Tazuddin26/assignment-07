/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
const PlayerCart = ({ playerCart, handleDelete }) => {
  const { id, img, player_name, player_category,price } = playerCart;

  return (
    <div>
     
      <div className="border p-4 m-4 rounded-xl bg-slate-100 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4 ">
          <img
            className="w-14 h-14 border rounded-full object-cover"
            src={img}
            alt=""
          />
          <div>
            <p className="font-bold">{player_name}</p>
            <p>{player_category}</p>
          </div>
        </div>
        <button
          onClick={() => handleDelete(id,price)}
          className="text-3xl text-red-700 rounded-full border btn w-14 h-14 hover:btn-outline text-center"
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default PlayerCart;

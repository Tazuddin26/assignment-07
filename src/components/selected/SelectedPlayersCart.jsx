/* eslint-disable react/prop-types */
import PlayerCart from "../playercart/PlayerCart";

const SelectedPlayersCart = ({ selectedPlayerCart, handleDelete,handleAddMorePlayer }) => {
  return (
    <div>
      {selectedPlayerCart.map((playerCart, idx) => (
        <PlayerCart
          key={idx}
          playerCart={playerCart}
          handleDelete={handleDelete}
        />
      ))}
      <div className="p-4">
        <button onClick={handleAddMorePlayer} className="btn bg-[#E7FE29]">
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayersCart;

/* eslint-disable react/prop-types */
import PlayerCart from "../playercart/PlayerCart";
// import Players from "../players/Players";

const SelectedPlayersCart = ({
  selectedPlayerCart,
  handleDelete,
   handleAddMorePlayer,
  playerCartPrice,

}) => {
  return (
    <div>
      {selectedPlayerCart.map((playerCart, idx) => (
        <PlayerCart
          key={idx}
          playerCart={playerCart}
          handleDelete={handleDelete}
          playerCartPrice={playerCartPrice}
        />
      ))}
      <div className="p-4">
        <button onClick={handleAddMorePlayer} className="btn bg-[#E7FE29]">
          Add More Player
        </button>
       {}
      </div>
    </div>
  );
};

export default SelectedPlayersCart;

/* eslint-disable react/prop-types */
import PlayerCart from "../playercart/PlayerCart";

const SelectedPlayersCart = ({
  selectedPlayerCart,
  handleDelete,
  playerCartPrice,
  handleToggleBtn,
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
        <button
          onClick={() => handleToggleBtn("allPlayer")}
          className="btn bg-[#E7FE29]"
        >
          Add More Player
        </button>
        {}
      </div>
    </div>
  );
};

export default SelectedPlayersCart;

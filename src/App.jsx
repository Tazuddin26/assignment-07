import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Players from "./components/players/Players";
import Footer from "./components/footer/Footer";
import SelectedPlayersCart from "./components/selected/SelectedPlayersCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [playerCartPrice, setplayerCartPrice] = useState(0);
  const [selectedPlayerCart, setSelectedPlayerCart] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);
  const [toggleBtn, setToggleBtn] = useState({
    allPlayer: true,
    status: "allPlayer",
  });

  const handleToggleBtn = (status) => {
    if (status == "allPlayer") {
      setToggleBtn({
        allPlayer: true,
        status: "allPlayer",
      });
    } else {
      setToggleBtn({
        allPlayer: false,
        status: "selected",
      });
    }
  };
  const handleAddToClaim = (coins) => {
    toast.success("Credit Added to your Account!", {
      position: "top-center",
    });
    setplayerCartPrice(playerCartPrice + coins);
  };

  const handleDelete = (id, price) => {
    setplayerCartPrice(playerCartPrice +price)
    setSelectedPlayerCart(
      selectedPlayerCart.filter((deletePlayer) => deletePlayer.id !== id)
    );
  };

  const handleAddMorePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  const handleAddToSelected = (player) => {
    {
      player.price > playerCartPrice
        ? toast.warning(
            "Not enough Money to buy this player.Claim Some Credit!",
            {
              position: "top-center",
            }
          )
        : "";
    }
    if (player.price > playerCartPrice) {
      return;
    }

    if (selectedPlayerCart.length >= 6) {
      toast.warning("players is already 6! Cannot add more players.", {
        position: "top-center",
      });
      return;
    }
    const isPlayer = selectedPlayerCart.find(
      (onePlayer) => onePlayer.id === player.id
    );
    if (isPlayer) {
      toast.warning("players is already Added!", {
        position: "top-center",
      });
      return;
    } else {
      toast.success(`Congrates !! ${player.player_name} is now in Your Squad`, {
        position: "top-center",
      });
      setSelectedPlayerCart([...selectedPlayerCart, player]);
      setplayerCartPrice(playerCartPrice - player.price);
    }
  };

  return (
    <>
      <Header playerCartPrice={playerCartPrice} />
      <Banner handleAddToClaim={handleAddToClaim} />
      <div className="container mx-auto border rounded-xl mt-6">
        <div className="m-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            {toggleBtn.allPlayer
              ? "Available Player"
              : `Selected Player (${selectedPlayerCart.length}/6)`}
          </h1>
          <div className="join border">
            <button
              onClick={() => handleToggleBtn("allPlayer")}
              className={`${
                toggleBtn.allPlayer ? "btn px-8 bg-[#E7FE29]" : "join-item px-8"
              } `}
            >
              Available
            </button>
            <button
              onClick={() => handleToggleBtn("selected")}
              className={`${
                toggleBtn.allPlayer
                  ? " px-8 "
                  : "bg-[#E7FE29] join-item px-8 btn"
              }`}
            >
              <p>Selected {selectedPlayerCart.length}</p>
            </button>
          </div>
        </div>
        {toggleBtn.allPlayer ? (
          <Players
            toggleBtn={toggleBtn}
            handleToggleBtn={handleToggleBtn}
            handleAddToSelected={handleAddToSelected}
          />
        ) : (
          <SelectedPlayersCart
            selectedPlayerCart={selectedPlayerCart}
            handleDelete={handleDelete}
            handleAddMorePlaye={handleAddMorePlayer}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

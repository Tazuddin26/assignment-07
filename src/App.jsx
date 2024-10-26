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
      position: "top-center"
    });
    setplayerCartPrice(playerCartPrice + coins);
  };

  const handleDelete = (id) => {
    setSelectedPlayerCart(
      selectedPlayerCart.filter((deletePlayer) => deletePlayer.id !== id)
    );
  };

  const handleAddMorePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  const handleAddToSelected = (player) => {
    setplayerCartPrice(playerCartPrice - player.price);
    if (selectedPlayerCart.find((onePlayer) => onePlayer.id === player.id)) {
      alert("All ready Player is Exiest");
    } else {
      setSelectedPlayerCart([...selectedPlayerCart, player]);
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

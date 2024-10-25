import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import Players from "./components/players/Players";

function App() {
  const [coinAmount, setCoinAmount] = useState(0);

  const handleAddToClaim = (coins) => {
    setCoinAmount(coins + coinAmount);
  }

  return (
    <>
      <Header coinAmount={coinAmount} />
      <Banner handleAddToClaim={handleAddToClaim} />
      <div className="container mx-auto ">
        <Players />
      </div>
    </>
  );
}

export default App;

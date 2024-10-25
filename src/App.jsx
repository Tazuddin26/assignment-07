import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";

function App() {
  const [coinAmount, setCoinAmount] = useState(0);

  const handleAddToClaim = (coin) => {
    setCoinAmount(coin + coinAmount);
  }

  return (
    <>
      <Header coinAmount={coinAmount} />
      <Banner handleAddToClaim={handleAddToClaim} />
    </>
  );
}

export default App;

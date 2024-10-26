/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Player from "../player/Player";
const Players = ({ handleAddToSelected, handleAddToCartPrice}) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="mt-4 rounded-2xl ">
      <div className="grid md:grid-cols-3 grid-cols-1 mt-6">
        {players.map((onePlayer, id) => (
          <Player
            key={id}
            player={onePlayer}
            handleAddToSelected={handleAddToSelected}
            handleAddToCartPrice={handleAddToCartPrice}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Players;

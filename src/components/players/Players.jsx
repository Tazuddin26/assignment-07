import { useEffect, useState } from "react";
import Player from "../player/Player";
const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="mt-4">
      <div>
        <h1>Players:{players.length}</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-6">
        {players.map((onePlayer) => (
          <Player key={onePlayer.players_id} player={onePlayer} />
        ))}
      </div>
    </div>
  );
};

export default Players;

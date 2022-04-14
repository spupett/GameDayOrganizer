import { useEffect } from "react";
import { getGame } from "../data";

const Game = (game) => {
  console.log(game);
  useEffect(() => {
    async function getAGame() {
      let game = (await getGame(parseInt("10547")))[0];
      console.log(game);
    }
    getAGame();
  }, []);

  const listCategories = game.category.map((c, index) => {
    return <li key={index}>{c}</li>;
  });

  const listMechanics = game.mechanics.map((m, index) => {
    return <li key={index}>{m}</li>;
  });

  return (
    <main>
      <a href={game.bggLink} target="_blank" rel="noreferrer">
        <b>{game.name}</b>
      </a>
      <img src={game.thumbnail} alt="someting" />
      <ul>{listCategories}</ul>
      <ul>{listMechanics}</ul>
      Player Count: Min: {game.playerCount.min} - Max: {game.playerCount.max} :
      Best: {game.playerCount.best}
    </main>
  );
};

export default Game;

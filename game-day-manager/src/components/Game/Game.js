import { useEffect, useState } from "react";
import { getGame } from "../../gameGroupApi/gameGroupApi";
import GameName from "./GameName";
import GamePlayerCount from "./GamePlayerCount";
import GameMechanics from "./GameMechanics";
import GameCategories from "./GameCategories";
import GameImage from "./GameImage";
import GamePlayTime from "./GamePlayTime";

const GameDetail = (props) => {
  const [gameDetails, setUserGames] = useState({
    bggId: "",
    bggLink: "",
    category: [],
    description: "",
    display: false,
    image: "",
    mechanics: [],
    name: "",
    playTime: 0,
    playerCount: {
      min: 0,
      max: 0,
      best: "0",
    },
    thumbnail: "",
  });

  useEffect(() => {
    const getGameDetails = async (id) => {
      const details = await getGame(id);
      setUserGames(details[0]);
    };

    getGameDetails(props.gameId).catch(console.error);
  }, [props.gameId]);

  console.log(gameDetails);

  return (
    <div>
      <GameName name={gameDetails.name} />
      <GameImage
        name={gameDetails.name}
        link={gameDetails.bggLink}
        id={gameDetails.bggId}
        thumbnail={gameDetails.thumbnail}
      />
      <GamePlayerCount playerCount={gameDetails.playerCount} />
      <GameMechanics mechanics={gameDetails.mechanics} />
      <GameCategories categories={gameDetails.category} />
      <GamePlayTime playTime={gameDetails.playTime} />
    </div>
  );
};

export default GameDetail;

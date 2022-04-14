const baseApiUrl = "http://localhost:3030/api/v1/";

export async function getGame(gameId) {
  return fetch(`${baseApiUrl}games/${gameId}`, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function getUserGames(user) {
  return [
    {
      name: "Betrayal at the House on the Hill",
      thumbnail:
        "https://cf.geekdo-images.com/lqmt2Oti_qJS65XqHcB8AA__thumb/img/EDOmDbRhLy4za2PHkJ5IbhNxZmk=/fit-in/200x150/filters:strip_icc()/pic5146864.png",
      category: ["Adventure", "Exploration", "Horror", "Miniatures"],
      mechanics: [
        "Dice Rolling",
        "Map Addition",
        "Modular Board",
        "Player Elimination",
        "Role Playing",
        "Storytelling",
        "Team-Based Game",
        "Traitor Game",
        "Variable Player Powers",
      ],
      description:
        "From the press release:&#10;&#10;Betrayal at House on the Hill quickly builds suspense and excitement as players explore a haunted mansion of their own design, encountering spirits and frightening omens that foretell their fate. With an estimated one hour playing time, Betrayal at House on the Hill is ideal for parties, family gatherings or casual fun with friends.&#10;&#10;Betrayal at House on the Hill is a tile game that allows players to build their own haunted house room by room, tile by tile, creating a new thrilling game board every time. The game is designed for three to six people, each of whom plays one of six possible characters.&#10;&#10;Secretly, one of the characters betrays the rest of the party, and the innocent members of the party must defeat the traitor in their midst before it&rsquo;s too late! Betrayal at House on the Hill will appeal to any game player who enjoys a fun, suspenseful, and strategic game.&#10;&#10;Betrayal at House on the Hill includes detailed game pieces, including character cards, pre-painted plastic figures, and special tokens, all of which help create a spooky atmosphere and streamline game play.&#10;&#10;An updated reprint of Betrayal at House on the Hill was released on October 5, 2010.&#10;&#10;",
      playerCount: { min: 3, max: 6, best: "5" },
      bggLink: "https://www.boardgamegeek.com/boardgame/10547",
    },
  ];
}

const GamePlayerCount = (props) => {
  return (
    <div>
      <span>Min: {props.playerCount.min}</span>
      <span>Max: {props.playerCount.max}</span>
      <span>Best At: {props.playerCount.best}</span>
    </div>
  );
};

export default GamePlayerCount;

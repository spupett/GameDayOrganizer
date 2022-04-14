const GameMechanics = (props) => {
  const mechanics = props.mechanics.map((mechanic, index) => {
    return <li key={index}>{mechanic}</li>;
  });

  return (
    <div>
      <ul>{mechanics}</ul>
    </div>
  );
};

export default GameMechanics;

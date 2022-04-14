const GameImage = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.thumbnail} alt={props.name + " " + props.id} />
      </a>
    </div>
  );
};

export default GameImage;

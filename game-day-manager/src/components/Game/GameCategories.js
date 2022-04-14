const GameCategories = (props) => {
  const categories = props.categories.map((categories, index) => {
    return <li key={index}>{categories}</li>;
  });

  return (
    <div>
      <ul>{categories}</ul>
    </div>
  );
};

export default GameCategories;

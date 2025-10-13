const ItemList = ({ itemCards }) => {
  console.log(itemCards);
  return (
    <div className="p-2 m-2  border-black border-b-2">
      {itemCards.map((ele) => (
        <div key={ele.card.info.id}>
          <div className=" ">
            <span> {ele.card.info.name}</span>
            <span>{ele.card.info.price}</span>
          </div>
          <p>{ele.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

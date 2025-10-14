import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemCards }) => {
  console.log(itemCards);
  return (
    <div className="">
      {itemCards.map((ele) => (
        <div
          key={ele.card.info.id}
          className="p-2 m-2  border-black border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2 font-bold">
              <span> {ele.card.info.name}</span>
              <span>
                - ₹
                {ele.card.info.price
                  ? ele.card.info.price / 100
                  : ele.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{ele.card.info.description}</p>
          </div>
          <div className="w-30 p-3">
            <div className="absolute ">
              <button className="cursor-pointer px-2 rounded-lg bg-black text-white shadow-lg ">
                Add +
              </button>
            </div>
            <img src={CDN_URL + ele.card.info.imageId} className=""></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

import { IMG_CDN_URL} from "../constants";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ name, price, imageId, id, description, index  }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = (index) => {
    dispatch(clearCart(index));
  };
  return (
    <div key={id} className="w-56 m-2 p-2 bg-orange-100 shadow-md">
      {/* <img className="p-2" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + imageId} /> */}
      <h2 className="font-bold text-md">{name}</h2>
      <h2 className="bg-orange-300 font-semibold">price: {price / 100} rs.</h2>
      <p className="bg-orange-300 font-semibold"> {description}</p>
      <button onClick={() => handleRemoveItem()}>
        Delete
      </button>
    </div>
  );
};

export default FoodItem;

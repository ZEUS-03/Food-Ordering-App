import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="flex">
        <h1 className="font-bold text-xl p-2 m-2">
          Cart Items: {cartItems.length}
        </h1>
        {cartItems.length !== 0 && (
          <button
            className=" bg-orange-400 mx-5 hover:shadow-md rounded-md p-2"
            onClick={() => handleClearCart()}
          >
            Clear cart
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <h1 className="font-bold text-xl p-2 m-2">Your cart is empty! </h1>
      ) : (
        <div className="flex flex-wrap">
          {cartItems.map((items, index) => (
            <FoodItem {...items} index={index} key={index} />
          ))}
        </div>
      )}
    </>
  );
};


export default Cart;
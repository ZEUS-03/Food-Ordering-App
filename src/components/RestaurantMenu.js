import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);;
  const dispatch = useDispatch();
const addFoodItem = (item) => {
  dispatch(addItem(item));
}
  return (!restaurant) ? (
    <Shimmer />
  ) : (
    <div className="flex p-5 m-5 menu-container">
      <div className="px-2 py-2 mx-2 my-2">
        <h4>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h4>
        <h4>
          {restaurant?.data?.cards[0]?.card?.card?.info?.locality}{" "}
          {restaurant?.data?.cards[0]?.card?.card?.info?.areaName}
        </h4>
        <img
          className="h-200 w-200"
          alt="restaurant_image"
          src={
            IMG_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>
          {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h2>
      </div>
      <div>
        <h2>Menu Items:</h2>
        <ul data-testid="menu" className="px-2 py-2 mx-2 my-2">
          {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            ? restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
              (item) => {
                return <li  className="px-2 py-2 mx-2 my-2" key={item.card.info.name}> {item.card.info.name}  <button data-testid="addBtn" className="p-1 bg-green-100" onClick={() => addFoodItem(item) } >Add</button> </li>;
              }
            )
            : restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
              ? restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                (item) => {
                  return <li className="px-2 py-2 mx-2 my-2" key={item.card.info.name}>{item.card.info.name}</li>;
                }
              )
              : <li>No menu items available</li>
          }
        </ul>

      </div>
    </div>
  );
};
export default RestaurantMenu;
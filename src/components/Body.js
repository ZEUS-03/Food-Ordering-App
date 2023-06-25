import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_URL } from "../constants";
import filterData from "./filterData";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/useContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState("");
  const [restaurants, setRestaurant] = useState("");
  const {user,setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const res = await fetch(RESTAURANTS_URL);
    const json = await res.json();

    setRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setAllRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center  p-2 bg-pink-200 my-5">
        <input
        data-testid="search-input"
          className="p-2 bg-purple-50 hover:bg-green-200"
          value={searchText}
          placeholder="search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
        data-testid="search-btn"
          className="p-2 m-2 bg-purple-600 hover:bg-purple-900 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setRestaurant(data);
          }}
        >
          search
        </button>
        <input
  value={user.name}
  onChange={(e) => setUser({ ...user, name: e.target.value })}
/>
<input
  value={user.email}
  onChange={(e) => setUser({ ...user, email: e.target.value })}
/>
      </div>
      <div data-testid="res-list" className="flex flex-wrap justify-evenly">
        {restaurants.length === 0 ? (
          <h1>No Restaurant with matching name found!</h1>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;

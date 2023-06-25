import { IMG_CDN_URL} from "../constants";
import { useContext } from "react";
import UserContext from "../utils/useContext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  avgRatingString,
  costForTwo,
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={ IMG_CDN_URL + cloudinaryImageId} alt="bbc" />
      <h3 className="font-bold text-xl"> {name} </h3>
      <h4> {cuisines.slice(0, 2).join(",")} </h4>
      <h4> {costForTwo}  </h4>
      { avgRatingString === 0 ? (
       <h4>0 ⭐</h4> 
      ) : 
      <h4> {avgRatingString} ⭐ </h4>
    }
    {/* UserContext */}
    <h5> {user.name}</h5>
    <h6> {user.email} </h6>
    </div>
  );
};

export default RestaurantCard;

import { useContext } from "react";
import UserContext from "../utils/useContext";

const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div className="flex flex-wrap justify-between items-center bg-pink-300 py-4 px-6  bottom-0 w-full">
      <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
        <p className="text-black"> {user.name} Nehru Nagar , Jaipur</p>
      </div>
      <div className="w-full md:w-auto text-center mb-4 md:mb-0">
        <h3 className="text-black"> Copyright @ 2023 Reserved </h3>
      </div>
      <div className="w-full md:w-auto text-center md:text-right">
        <div className="flex justify-center md:justify-end">
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-700"><i className="fab fa-facebook">FB</i></a>
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-700"><i className="fab fa-twitter">TW</i></a>
          <a href="#" className="mx-2 text-gray-500 hover:text-gray-700"><i className="fab fa-instagram">IN</i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
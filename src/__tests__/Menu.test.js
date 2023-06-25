import { render , waitFor, fireEvent} from "@testing-library/react";
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../utils/store"
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../mocks/data";
import Shimmer from "../components/Shimmer";
import { expect } from '@jest/globals';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json :()=> Promise.resolve(MENU_DATA),
    })
})

test("res menu", async() => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("menu")));
    const addBtn = body.getAllByTestId("addBtn");
    fireEvent.click(addBtn[0]);

    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart - 0 items");

})
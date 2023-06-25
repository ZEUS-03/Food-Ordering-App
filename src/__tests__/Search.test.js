import { render , waitFor, fireEvent} from "@testing-library/react";
import Body from "../components/Body";
import { Provider } from "react-redux";
import store from "../utils/store"
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../mocks/data";
import Shimmer from "../components/Shimmer";
import { expect } from '@jest/globals';
import { toBeInTheDocument } from '@testing-library/jest-dom';


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json :()=> Promise.resolve(RESTAURANT_DATA),
    })
})

/* integration testing for search 
test("search results on homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    const searchBtn = body.getByTestId("search-btn");
})
*/


// integration testing for shimmerUI 
test("shimmer results before search & body", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
    // console.log(shimmer);
})

// integration testing for res card 
test("restaurant card loads on homepage", async() => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
    // console.log(shimmer);
})


test("search for food string", async() => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")));
    const input = body.getByTestId("search-input");
    fireEvent.change("input", { target : {
        value : "food",
    },
    })

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(5);

})
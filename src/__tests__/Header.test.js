import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("logo should load on header render", () => {
    // logo loader
    const header = render(
    <StaticRouter>
        <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );
    console.log(header);
    //check if logo is loaded
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png");
     
});

test("check if user is online or not", () => {
    
    const header = render(
    <StaticRouter>
        <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );
    //check if user is online or not
    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("🟩 Online");
 
});

test("cart should have 0 items", () => {
    
    const header = render(
    <StaticRouter>
        <Provider store={store}><Header/></Provider>
    </StaticRouter>
    );
    //check if cart is empty or not
    const cartItems = header.getByTestId("cart");
    expect(cartItems.innerHTML).toBe("Cart 0");
 
});
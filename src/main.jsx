import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/Productcontext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-3smfu6jjsxkpetki.us.auth0.com"
    clientId="Em3i4VVd9bX1Ea52nhOjlwqEOcR5AYY2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
          </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </BrowserRouter>
  </Auth0Provider>
);

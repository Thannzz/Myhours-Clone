import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ChakraProvider } from "@chakra-ui/react";
<<<<<<< HEAD
import AuthContextProvider from "./Components/AuthContext"
=======
import AppContextProvider from "./context/Appcontext";

>>>>>>> 2397850e27894ecc6233cc36c508b6dc4f347121
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<<<<<<< HEAD
    <ChakraProvider>
      <BrowserRouter>
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </BrowserRouter>
=======
      <ChakraProvider>
        <AppContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppContextProvider>
>>>>>>> 2397850e27894ecc6233cc36c508b6dc4f347121
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import CakeShop from "./components/CakeShop";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeShop from "./components/HooksCakeShop";
import IceCreamShop from "./components/IceCreamShop"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeShop />
        <CakeShop />
        <IceCreamShop />
      </div>
    </Provider>
  );
}

export default App;

import "./App.css";
import Header from "./components/Layout/Header";
import CarPart from "./components/CarParts/CarPart";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const[cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => { 
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCartHandler={hideCartHandler}/>}s
      <Header onShowCartHandler={showCartHandler}/>
      <main>
        <CarPart />
      </main>
    </CartProvider>
  );
}

export default App;

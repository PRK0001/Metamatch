import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HOME";
import About from "./components/About";
import Nav from "./components/Nav";
import Order from "./components/Order";
import NoMatch from "./components/noMatch";
import Products from "./components/Products";

function App() {
  return (
<div>
<Nav/>
    <Routes>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/about-the"element={<About/>}></Route>
      <Route path="/Order" element ={<Order/>}></Route>
      <Route path="/Products" element ={<Products/>}></Route>
      <Route path="*" element ={<NoMatch/>}></Route>
    </Routes>
</div>
  );
}

export default App;

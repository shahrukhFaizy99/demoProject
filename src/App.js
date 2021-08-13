import React from "react";
import Card from "./components/card";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import Modal from "./components/modal";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <h1 className="h1">CARDS SECTION</h1>
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Modal />
    </>
  );
};

export default App;

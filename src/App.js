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
        <Card
          img="/images/dark.JPG"
          alt=""
          width="150"
          height="80"
          title="DARK"
          text="NETFLIX SERIES"
        />

        <Card
          img="/images/stranger.JPG"
          alt=""
          width="150"
          height="80"
          title="STRANGER THINGS"
          text="NETFLIX SERIES"
        />

        <Card
          img="/images/money-heist.JPG"
          alt=""
          width="150"
          height="80"
          title="MONEY HEIST"
          text="NETFLIX SERIES"
        />

        <Card
          img="/images/extraction.JPG"
          alt=""
          width="150"
          height="80"
          title="Extraction"
          text="NETFLIX SERIES"
        />

        <Card
          img="/images/sacred-games.JPG"
          alt=""
          width="150"
          height="80"
          title="SACRED GAMES"
          text="NETFLIX SERIES"
        />

        <Card
          img="/images/mirzapur.JPG"
          alt=""
          width="150"
          height="80"
          title="MIRZAPUR"
          text="NETFLIX SERIES"
        />
      </div>
      <Modal />
    </>
  );
};

export default App;

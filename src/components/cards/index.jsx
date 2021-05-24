import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardRandomizer from "./cardRandomizer";
let currentDeck = [];
let count = 0;

const Cards = () => {
  const [currentCard, setCurrentCard] = useState();
  const [currentPlayer, setCurrentPlayer] = useState();
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const newDeck = () => {
    count = 0;
    currentDeck = CardRandomizer();
    setCurrentCard(currentDeck[0]);
    setGameStarted(true);
  };
  const nextCard = () => {
    count++;
    setCurrentCard(currentDeck[count]);
  };

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/cardImages", false, /\.(png|jpe?g|svg)$/)
  );

  const handlePlayers = (event) => {
    setCurrentPlayer(event.target.value);
  };

  const handleAddingPlayers = () => {
    setPlayers((prev) => [...prev, currentPlayer]);
    console.log(players);
  };

  return (
    <div style={{ height: "100%", backgroundColor: "white" }}>
      <form noValidate autoComplete="off">
        <TextField
          style={{ marginTop: "2vh" }}
          value={currentPlayer}
          onChange={handlePlayers}
          id="outlined-basic"
          label="Players"
          variant="outlined"
        />
      </form>
      <Button
        style={{ marginTop: "2vh" }}
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleAddingPlayers}
      >
        Add Player
      </Button>
      <form noValidate autoComplete="off">git
      </form>
      <Button
        style={{ marginTop: "2vh" }}
        variant="contained"
        size="medium"
        color="primary"
        onClick={newDeck}
      >
        New Deck
      </Button>
      {gameStarted &&
      <p>Card #{count + 1} - {players[count % players.length]}</p>
}
      {currentCard && (
        <img
          alt="playing card"
          style={{ marginTop: "2vh", height: "60vh" }}
          src={images[`${currentCard}.png`]}
          onClick={nextCard}
        />
      )}
      {players.map((player) => (
        <p>{player}</p>
      ))}
    </div>
  );
};

export default Cards;

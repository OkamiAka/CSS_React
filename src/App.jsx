import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import "./app.css";
const Card = styled.div`
  width: 300%;
  display: grid;
  grid-template-columns: 0.9fr 0.1fr;
  background-color: gray;
`;
const Top = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
`;
const Bot = styled.div``;
const Img = styled.img`
  background-image: url(https://i.ytimg.com/vi/Nn5GyHhsMIw/maxresdefault.jpg);
  background-size: cover;
  background-color: black;
  background-position: center;
`;
const Des = styled.div``;
const Titre = styled.h2``;
const SousTitre = styled.p``;
const Annee = styled.p``;

function App() {
  const [isFavorite, setIsFavorite] = useState(false);
  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }
  return (
    <>
      <Card>
        <Top>
          <Img src="" />
          <Des>
            <Titre>Rozes</Titre>
            <SousTitre>Under the Grave</SousTitre>
            <Annee>(2016)</Annee>
          </Des>
        </Top>
        <Bot
          onClick={handleClickFavorite}
          className={isFavorite ? "isFavorite" : "notFavorite"}
        />
      </Card>
    </>
  );
}

export default App;

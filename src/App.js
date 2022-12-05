import "./styles.css";
import "hover.css";
import styled from "styled-components";
import SelectCharacter from "./components/SelectCharacter";
import FightView from "./components/FightView";
import React, { useState } from "react";

import shrek_url from "./images/Shrek.png";
import honda_url from "./images/Honda.png";
import akuma_url from "./images/Akuma.png";
import blanka_url from "./images/Blanka.png";
import cammy_url from "./images/Cammy.png";
import chun_url from "./images/Chun-li.png";

export default function App() {
  let [selectedCharacter, setSelectedCharacter] = useState(null);
  let [selectedCharacter2, setSelectedCharacter2] = useState(null);

  const characters = [
    { name: "Shrek", img_url: shrek_url },
    { name: "EHonda", img_url: honda_url },
    { name: "Akuma", img_url: akuma_url },
    { name: "Blanka", img_url: blanka_url },
    { name: "Cammy", img_url: cammy_url },
    { name: "Chun", img_url: chun_url }
  ];

  const onSelect = (selectedCharacter) => {
    setSelectedCharacter(selectedCharacter);
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    setSelectedCharacter2(randomCharacter);
  };

  const resetSelect = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      <h1>Meme Fighter</h1>
      <SelectCharacterContainer>
        <SelectCharacter
          characters={characters}
          onSelect={onSelect}
        ></SelectCharacter>
        <FightView
          selectedCharacter={selectedCharacter}
          selectedCharacter2={selectedCharacter2}
          resetSelect={resetSelect}
        ></FightView>
      </SelectCharacterContainer>
    </div>
  );
}

const SelectCharacterContainer = styled.div`
  color: white;
  background: rgb(10, 4, 48);
  height: 600px;
  display: flex;
  flex-direction: column;
`;

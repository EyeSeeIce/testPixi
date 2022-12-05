import React, { useState } from "react";
import styled from "styled-components";
import KeyboardEventHandler from "react-keyboard-event-handler";
import background from "../../src/images/background1.png";
import { Stage, Sprite } from "@inlet/react-pixi";
import useWindowSize from "../hooks/useWindowDimensions";
import HealthBar from "../components/HealthBar";
import Fighter from "../components/Fighter";
import Fireball from "../components/Fireball";

function FightView(props) {
  // console.log(props);
  const character = props.selectedCharacter;
  const character2 = props.selectedCharacter2;
  const windowSize = useWindowSize();
  const height = windowSize.height;
  const width = windowSize.width;

  // const { height, width } = useWindowDimensions();
  console.log(height);

  // listener for key press
  // document.addEventListener("keydown", logKey);

  const [char2X, setchar2X] = useState(1150);
  const [char1Y, setchar1Y] = useState(height - (height - 400));

  const [char1X, setchar1X] = useState(20);
  const [char2Y, setchar2Y] = useState(height - (height - 400));

  const [char1_health, setChar1_Health] = useState(90);
  const [char2_health, setChar2_Health] = useState(90);

  const [char1_fireball, setChar1_Fireball] = useState();
  const [char2_fireball, setChar2_Fireball] = useState();

  const keys = ["all"];
  function handleClick(event) {
    console.log(event);
    if (event[0] == "d") {
      if (char1X < width) setchar1X(char1X + 20);
    }
    if (event[0] == "a") {
      if (char1X >= 0) setchar1X(char1X - 20);
    }
    if (event[0] == "w") {
      if (char1Y > 0) setchar1Y(char1Y - 50);
    }
    if (event[0] == "s") {
      if (char1Y < height) setchar1Y(char1Y + 50);
    }

    if (event[0] == "l") {
      if (char1X < width) setchar2X(char2X + 20);
    }
    if (event[0] == "j") {
      if (char1X >= 0) setchar2X(char2X - 20);
    }
    if (event[0] == "i") {
      if (char1Y > 0) setchar2Y(char2Y - 50);
    }
    if (event[0] == "k") {
      if (char1Y < height) setchar2Y(char2Y + 50);
    }

    if (event[0] === "c") {
      createHadouken("char1");
    }
    if (event[0] === "n") {
      createHadouken("char2");
    }
  }

  function createHadouken(character) {
    unmount(character);
    const initialPosition = {
      char1: { x: char1X + 50, y: char1Y + 100 },
      char2: { x: char2X - 50, y: char2Y + 100 }
    };
    var opposition =
      character === "char1" ? [char2X, char2Y] : [char1X, char1Y];
    console.log(opposition);
    var fireball = (
      <Fireball
        character={character}
        position={initialPosition[character]}
        color="#fff"
        bounds={{ height: height, width: width }}
        opp_position={opposition}
        unmount={unmount}
      ></Fireball>
    );

    if (character === "char1") {
      setChar1_Fireball(fireball);
    }

    if (character === "char2") {
      setChar2_Fireball(fireball);
    }
  }

  function unmount(character) {
    if (character === "char1") {
      setChar1_Fireball(null);
    }

    if (character === "char2") {
      setChar2_Fireball(null);
    }
  }

  return (
    <Container
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: `no-repeat`,
        height: `1000px`
      }}
    >
      <HealthStrip>
        <HealthBar
          direction={"left"}
          character={character}
          health={char1_health}
        ></HealthBar>
        <Versus></Versus>
        <HealthBar
          direction={"right"}
          character={character2}
          health={char2_health}
        ></HealthBar>
      </HealthStrip>
      <Stage width={width} height={height} options={{ backgroundAlpha: 0 }}>
        {character ? (
          <Fighter
            character={character}
            position={{ x: char1X, y: char1Y }}
          ></Fighter>
        ) : null}
        {char1_fireball}
        {char2_fireball}
        {character2 ? (
          <Fighter
            character={character2}
            position={{ x: char2X, y: char2Y }}
          ></Fighter>
        ) : null}
      </Stage>
      <Key keys={keys} handleClick={handleClick} />
    </Container>
  );
}

export default FightView;

function Key(props) {
  return (
    <KeyboardEventHandler
      handleKeys={props.keys}
      handleFocusableElements={true}
      onKeyEvent={(key) => {
        const keyInfo = [key, props.keys.indexOf(key)];
        props.handleClick(keyInfo);
      }}
    />
  );
}

const Container = styled.div``;

const HealthStrip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Versus = styled.div`
  height: 50px;
  width: 100px;
`;

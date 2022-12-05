import React, { useState } from "react";
import styled from "styled-components";
import { Stage, Sprite } from "@inlet/react-pixi";
import { useTick } from "@inlet/react-pixi";

function Fighter(props) {
  const character = props.character;
  let { x, y } = props.position;

  const [state, setState] = useState({});
  // useTick(delta => {
  //   y = y + 1
  // })
  console.log(x, y);

  return (
    <Sprite image={character.img_url} height={400} width={400} x={x} y={y} />
  );
}
export default Fighter;

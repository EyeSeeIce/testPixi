import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Stage, Sprite } from "@inlet/react-pixi";
import { useTick, Graphics } from "@inlet/react-pixi";
import { unmountComponentAtNode } from "react-dom";

function Fireball(props) {
  const color = props.color;
  let { x, y } = props.position;

  const [graphic_x, setGraphic_X] = useState(x);
  const [graphic_y, setGraphic_Y] = useState(y);
  const [opp_position, setOpp_Position] = useState(props.opp_position);

  useTick((delta) => {
    let [opp_x, opp_y] = opp_position;
    if (graphic_x <= props.bounds.width && graphic_x >= 0) {
      if (props.character === "char1") {
        setGraphic_X(graphic_x + 10);
      }
      if (props.character === "char2") {
        setGraphic_X(graphic_x - 10);
      }
    }

    if (props.character === "char1") {
      if (graphic_x >= opp_x - 50) {
        console.log(graphic_x, opp_x);
        props.unmount(props.character);
      }
    }

    if (props.character === "char2") {
      if (graphic_x <= opp_x + 50) {
        console.log(graphic_x, opp_x);
        props.unmount(props.character);
      }
    }
  });

  const destroy = () => {};

  const draw = useCallback(
    (g) => {
      g.clear();
      g.beginFill(props.color);
      g.drawCircle(graphic_x, graphic_y, 100);
      g.endFill();
    },
    [props, graphic_x, graphic_y]
  );
  return <Graphics draw={draw} destroy={destroy} />;
}
export default Fireball;

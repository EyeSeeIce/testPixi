import React from "react";
import styled from "styled-components";

function HealthBar(props) {
  const health = props.health;
  // background: #d34549;
  const transformValue = props.direction === "right" ? "scaleX(-1)" : null;
  const flipStyle = { transform: transformValue };
  const healthStyle = {
    width: health + "%",
    background: "green"
  };
  return (
    <CharacterHealthContainer>
      <CharacterImage></CharacterImage>
      <div>{props.character?.name}</div>
      <div class="health-bar" style={flipStyle}>
        <div class="health-bar-glass">
          <div class="health-bar-fluid anim-width" style={healthStyle}></div>
        </div>
      </div>
    </CharacterHealthContainer>
  );
}
export default HealthBar;

const CharacterHealthContainer = styled.div`
  height: 100px;
  width: 500px;
  background: transparent;
  display: flex;
  flex-direction: column;
`;
const CharacterImage = styled.image``;

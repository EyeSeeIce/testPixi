import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function SelectCharacter(props) {
  let characters = props.characters;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500
  };

  return (
    <Container>
      <Slider {...settings}>
        {characters.map((character) => {
          return (
            <Fighter key={character.name} className="hvr-bob">
              <FighterImageContainer>
                <FighterImage
                  alt={character.name}
                  src={character.img_url}
                ></FighterImage>
              </FighterImageContainer>
              <FighterName>{character.name}</FighterName>
              <button onClick={() => props.onSelect(character)}>Select</button>
            </Fighter>
          );
        })}
      </Slider>
    </Container>
  );
}

export default SelectCharacter;

const Container = styled.div`
  margin: 100px;
`;

const Fighter = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

const FighterName = styled.div`
  font-size: 30px;
`;

const FighterImageContainer = styled.div`
  height: 400px;
  width: 200px;
  margin: auto;
`;

const FighterImage = styled.img`
  width: 300px;
  margin: auto;
`;

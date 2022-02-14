import React from "react";

import {
  Container,
  ImageContaner,
  GameImage,
  GameInformation,
  Title,
  Description,
} from "./styles";

import GameImg from "../../assets/legend.png";

export const GameList = () => {
  return (
    <Container>
      <ImageContaner>
        <GameImage source={GameImg} />
      </ImageContaner>
      <GameInformation>
        <Title>Lendários</Title>
        <Description>Lançamento: 18/06 às 21:00h</Description>
      </GameInformation>
    </Container>
  );
};

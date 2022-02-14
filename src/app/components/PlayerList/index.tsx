import React from "react";

import { Container, PlayerImage, ImageContainer, Name } from "./styles";

interface Props {
  image: string;
  name: string;
}

export const PlayerList = ({ image, name }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <PlayerImage source={{ uri: image }} />
        <Name>{name}</Name>
      </ImageContainer>
    </Container>
  );
};

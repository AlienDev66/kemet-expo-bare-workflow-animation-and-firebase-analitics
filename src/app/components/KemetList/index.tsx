import React from "react";

import {
  Container,
  KemetImage,
  ImageContainer,
  DescriptionContainer,
  Title,
  Description,
} from "./styles";
import KemetImg from "../../assets/KemetImg.png";

export const KemetList = () => {
  return (
    <Container>
      <ImageContainer>
        <KemetImage source={KemetImg} />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Conheça cleopatra</Title>
        <Description>
          Pessoa que foi raptada hoje de manhã e ninguém sabe de nada, por isso,
          vamos procurar ela.
        </Description>
      </DescriptionContainer>
    </Container>
  );
};

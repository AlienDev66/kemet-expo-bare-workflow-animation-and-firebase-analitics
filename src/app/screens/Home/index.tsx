import React from "react";

import {
  Container,
  Header,
  Body,
  Background,
  Logo,
  LogoContainer,
  Gradient,
  HomeImageContainer,
  HomeImage,
  Separator,
  SeparatorContainer,
  List,
} from "./styles";

import homeHeaderImg from "../../assets/homeHeaderImg.png";
import LogoImg from "../../assets/originalLogo.png";
import CleopatraImg from "../../assets/cleopatra.png";
import SeparatorImg from "../../assets/separator.png";
import { KemetList } from "../../components/KemetList";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Background source={homeHeaderImg}>
          <LogoContainer>
            <Logo source={LogoImg} />
          </LogoContainer>
          <HomeImageContainer>
            <HomeImage source={CleopatraImg}>
              <Gradient></Gradient>
            </HomeImage>
          </HomeImageContainer>
        </Background>
      </Header>
      <SeparatorContainer>
        <Separator source={SeparatorImg} />
      </SeparatorContainer>
      <Body>
        <List>
          <KemetList />
        </List>
      </Body>
    </Container>
  );
};

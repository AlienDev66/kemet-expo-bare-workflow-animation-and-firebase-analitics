import React from "react";

import {
  Container,
  Header,
  Logo,
  LogoContainer,
  BannerContainer,
  Banner,
  Gradient,
  Description,
  InformationContainer,
  Title,
  Disponible,
  Dot,
  Label,
  HoursContainer,
  Hour,
  Simbol,
  Footer
} from "./styles";

import LottieView from "lottie-react-native";

import LogoImg from "../../assets/logo.png";
import BannerInfo from "../../assets/banner_info.png";

export const GameInformation = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo source={LogoImg} />
          <LottieView
            source={require("../../assets/animations/home.json")}
            autoPlay
            loop
            style={{ width: 190 }}
          />
          <BannerContainer>
            <Banner source={BannerInfo}>
              <Gradient></Gradient>
            </Banner>
          </BannerContainer>
        </LogoContainer>
      </Header>
      <Description>
        <InformationContainer>
          <Title>Cyberpunk</Title>
          <Disponible>
            <Dot></Dot>
            <Label>Disponível</Label>
          </Disponible>
        </InformationContainer>
        <HoursContainer>
          <Hour>05</Hour>
          <Simbol>HS</Simbol>
        </HoursContainer>
      </Description>

      <Footer>

      </Footer>
    </Container>
  );
};

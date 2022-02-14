import React from "react";
import {
  Container,
  Header,
  Logo,
  LogoContainer,
  Middle,
  Footer,
  Background,
  Title,
  Description,
  Intro,
  Button,
} from "./styles";
import { ScrollView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

import LogoImg from "../../assets/gs_logo.png";
import NeoBg from "../../assets/neon_bg.png";

import LottieView from "lottie-react-native";

export const GettingStarted = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header>
          <LogoContainer>
            <Logo source={LogoImg} />
          </LogoContainer>
        </Header>
        <Middle>
          <Background source={NeoBg}>
            <Intro>
              <Title>Seus jogos mais proximos de ti</Title>
              <Description>
                Jogue seus jogos favoritos com todo mundo e ganhe sempre com a
                nossa plataforma
              </Description>
            </Intro>
          </Background>
        </Middle>
        <Footer>
          <Button
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: "Home",
                })
              )
            }>
            <LottieView
              source={require("../../assets/animations/buttonAnimation.json")}
              autoPlay
              loop
              style={{ width: 70 }}
            />
          </Button>
        </Footer>
      </Container>
    </ScrollView>
  );
};

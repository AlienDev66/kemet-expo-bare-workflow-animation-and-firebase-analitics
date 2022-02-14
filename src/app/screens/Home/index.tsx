import React from "react";

import {
  Container,
  Header,
  LogoContainer,
  Logo,
  BannerImage,
  Banner,
  GameListContainer,
  HeaderList,
  HeaderTitle,
  TotalGames,
} from "./styles";
import LottieView from "lottie-react-native";
import LogoImg from "../../assets/logo.png";
import HomeImage from "../../assets/homeImage.png";
import { GameList } from "../../components/KemetList";
import { useNavigation, CommonActions } from "@react-navigation/native";

export const Home = () => {
  const navigation = useNavigation();

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
        </LogoContainer>
        <Banner
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: "GameInformation",
              })
            )
          }>
          <BannerImage source={HomeImage} />
        </Banner>
      </Header>
      <GameListContainer>
        <HeaderList>
          <HeaderTitle>Olhe seus games</HeaderTitle>
          <TotalGames>Total 6</TotalGames>
        </HeaderList>
        <GameList />
        <GameList />
        <GameList />
        <GameList />
        <GameList />
        <GameList />
        <GameList />
        <GameList />
        <GameList />
      </GameListContainer>
    </Container>
  );
};

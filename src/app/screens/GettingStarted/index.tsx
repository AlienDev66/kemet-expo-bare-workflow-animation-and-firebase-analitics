import React from "react";
import {
  Container,
  Header,
  HeaderImage,
  Logo,
  LogoContainer,
  Title,
  Footer,
  FooterImage,
  Button,
  ButtonTitle,
} from "./styles";
import HeaderImg from "../../assets/headerImg.png";
import FooterImg from "../../assets/footerImg.png";
import LogoImg from "../../assets/originalLogo.png";
import { ScrollView } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const GettingStarted = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <Header>
          <HeaderImage source={HeaderImg} />
          <LogoContainer>
            <Logo source={LogoImg} />
            <Title>CONHEÇA O EDITO</Title>
          </LogoContainer>
        </Header>

        <Footer>
          <FooterImage source={FooterImg}>
            <Button
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "Home",
                  })
                )
              }>
              <ButtonTitle>Getting Started</ButtonTitle>
            </Button>
          </FooterImage>
        </Footer>
      </Container>
    </ScrollView>
  );
};

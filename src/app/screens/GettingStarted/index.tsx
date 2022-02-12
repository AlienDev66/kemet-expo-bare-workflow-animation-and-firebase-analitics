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

export const GettingStarted = () => {
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
            <Button>
              <ButtonTitle>Getting Started</ButtonTitle>
            </Button>
          </FooterImage>
        </Footer>
      </Container>
    </ScrollView>
  );
};

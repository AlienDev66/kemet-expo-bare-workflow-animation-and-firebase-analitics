import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;
export const Header = styled.View``;
export const HeaderImage = styled.Image`
  width: 100%;
  height: 394px;
`;
export const Logo = styled.Image`
  width: 98.36px;
  height: 75px;
`;
export const LogoContainer = styled.View`
  align-items: center;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  letter-spacing: 10px;
`;
export const Footer = styled.View``;
export const FooterImage = styled.ImageBackground`
  width: 100%;
  height: 177px;
  align-items: center;
  justify-content: center;
`;
export const Button = styled(RectButton)`
  width: 142px;
  height: 54px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.button};
  align-items: center;
  justify-content: center;
`;
export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`;

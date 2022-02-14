import { RectButton } from "react-native-gesture-handler";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;
export const Header = styled.View`
  align-items: center;
`;
export const Logo = styled.Image`
  width: 151px;
  height: 31px;
`;
export const LogoContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 30}px;
`;
export const Middle = styled.View``;
export const Footer = styled.View`
  align-items: center;
  margin-bottom: ${getBottomSpace() + 10}px;
`;
export const Background = styled.ImageBackground`
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
`;
export const Description = styled.Text`
  text-align: center;
  margin-top: 11px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
export const Intro = styled.View`
  width: 272px;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.TouchableOpacity``;

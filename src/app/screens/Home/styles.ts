import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;
export const Body = styled.View``;
export const Background = styled.ImageBackground`
  height: 346px;
  align-items: center;
`;
export const LogoContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 25}px;
`;
export const Logo = styled.Image`
  width: 98.36px;
  height: 75px;
`;
export const Gradient = styled(LinearGradient).attrs({
  colors: ["transparent", theme.colors.default],
})`
  height: 100%;
  border-radius: 12px;
`;
export const HomeImageContainer = styled.View.attrs({
  paddingHorizontal: 20,
})`
  width: 100%;
  margin-top: 46px;
  border-radius: 12px;
`;
export const HomeImage = styled.ImageBackground`
  width: 100%;
  height: 202px;
`;
export const Separator = styled.Image`
  width: 337px;
`;
export const SeparatorContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;
export const List = styled.View.attrs({
  paddingHorizontal: 20,
})``;

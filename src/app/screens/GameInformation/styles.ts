import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View``;
export const Logo = styled.Image`
  width: 120px;
  height: 20.32px;
`;
export const LogoContainer = styled.View`
  align-items: center;
  margin-top: ${getStatusBarHeight() + 25}px;
`;
export const BannerContainer = styled.View`
  width: 100%;
`;
export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
`;
export const Gradient = styled(LinearGradient).attrs({
  colors: ["transparent", theme.colors.primary],
})`
  height: 234px;
`;
export const Description = styled.View`
  height: 95px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #243189;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 21px;
  padding-right: 21px;
`;
export const InformationContainer = styled.View``;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  margin-bottom: 10px;
`;
export const Disponible = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Dot = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 50px;
`;
export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  margin-left: 8px;
`;
export const HoursContainer = styled.View`
  width: 52px;
  height: 60px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.success};
  align-items: center;
  justify-content: center;
`;
export const Hour = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;
export const Simbol = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;
export const Footer = styled.View``;

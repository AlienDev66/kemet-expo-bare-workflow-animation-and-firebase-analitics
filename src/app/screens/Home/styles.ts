import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 15,
})`
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
  align-items: center;
  margin-top: ${getStatusBarHeight() + 25}px;
`;
export const Logo = styled.Image`
  width: 120px;
  height: 20.32px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 163px;
`;
export const Banner = styled.TouchableOpacity``;
export const GameListContainer = styled.View`
  margin-top: 18px;
`;
export const HeaderList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;
export const TotalGames = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};
`;

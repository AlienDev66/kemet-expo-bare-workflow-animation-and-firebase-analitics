import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  height: 102px;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  border-radius: 12px;
  align-items: center;
`;
export const ImageContaner = styled.View``;
export const GameImage = styled.Image`
  width: 64px;
  height: 68px;
`;
export const GameInformation = styled.View`
  width: 260px;
  height: 60px;
  margin-left: 20px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  margin-bottom: 12px;
`;
export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

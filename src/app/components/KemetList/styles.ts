import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  height: 102px;
  background-color: ${({ theme }) => theme.colors.default};
  flex-direction: row;
  border-radius: 12px;
  align-items: center;
`;
export const KemetImage = styled.Image`
  width: 74px;
  height: 98px;
  border-radius: 12px;
`;
export const ImageContainer = styled.View`
  margin-left: 2px;
`;
export const DescriptionContainer = styled.View``;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;
export const Description = styled.Text``;

import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 95px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #243189;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 21px;
  padding-right: 21px;
  margin-bottom: 15px;
`;
export const PlayerImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 48px;
`;
export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  margin-left: 10px;
`;

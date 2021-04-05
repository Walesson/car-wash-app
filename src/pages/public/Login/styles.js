import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: ${({theme}) => theme.hp(20)}px;
`;

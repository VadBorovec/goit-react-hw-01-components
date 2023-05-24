import styled from '@emotion/styled';

export const BoardHeader = styled.div`
  padding: ${props => props.theme.spacing(10)};

  background-color: ${props => props.theme.colors.accent};
`;

export const BoardTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  margin: 0;
`;

export const List = styled.ul`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 0 ${props => props.theme.spacing(3)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;

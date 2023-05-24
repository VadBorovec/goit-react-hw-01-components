import styled from '@emotion/styled';

export const BoardHeader = styled.div`
  padding: ${props => props.theme.spacing(10)};

  background-color: ${props => props.theme.colors.accent};
`;

export const BoardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  text-transform: uppercase;

  font-weight: 700;
  color: ${props => props.theme.colors.white};

  margin: 0;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

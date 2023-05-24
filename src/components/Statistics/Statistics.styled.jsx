import styled from '@emotion/styled';

export const StatisticTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
  text-align: center;
  text-transform: uppercase;

  color: ${props => props.theme.colors.dark};

  margin-top: ${props => props.theme.spacing(8)};
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

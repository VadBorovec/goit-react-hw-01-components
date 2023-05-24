import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  overflow: hidden;
  margin: 0 auto;

  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    background-color: #f1f1f1;
    box-shadow: ${props => props.theme.shadows.regular};
    transform: scale(1.01);
  }
`;

export const StatisticTitle = styled.h3`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};

  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${props => props.theme.spacing(2)};
`;

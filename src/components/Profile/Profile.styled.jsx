import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(80)};
  overflow: hidden;
  margin: 0 auto;

  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    background-color: #f1f1f1;
    box-shadow: ${({ theme }) => theme.shadows.regular};
    transform: scale(1.01);
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.spacing(2)};
  margin: ${props => props.theme.spacing(8)} 0;
`;

export const CardPoster = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  text-transform: capitalize;
  letter-spacing: ${props => props.theme.spacing(0.2)};
`;

export const CardText = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.2)};
  color: ${props => props.theme.colors.gray};
  margin: ${props => props.theme.spacing(2)};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-top: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.light};
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(4)};
  border-right: 1px solid ${props => props.theme.colors.gray};

  &:last-child {
    border-right: none;
  }
`;

export const ItemLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gray};
`;

export const ItemValue = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.dark};
  font-weight: bold;
`;

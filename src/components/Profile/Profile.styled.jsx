import styled from '@emotion/styled';

export const CardBody = styled.div`
  max-width: ${props => props.theme.spacing(80)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-top: 1px solid ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.light};
`;

export const StatsListItem = styled.li`
  width: 100%;
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
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
`;

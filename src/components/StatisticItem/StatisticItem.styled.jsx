import styled from '@emotion/styled';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  padding: ${props => props.theme.spacing(5)};
`;

export const StatLabel = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};
  margin-bottom: 0;
`;

export const StatValue = styled.span`
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;

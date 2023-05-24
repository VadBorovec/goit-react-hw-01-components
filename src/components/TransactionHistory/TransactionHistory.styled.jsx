import styled from '@emotion/styled';
import { theme } from 'styles';

export const Table = styled.table`
  text-align: center;

  width: ${props => props.theme.spacing(120)};
  overflow: hidden;
  margin: 0 auto;
  border-collapse: collapse;

  box-shadow: ${({ theme }) => theme.shadows.medium};
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

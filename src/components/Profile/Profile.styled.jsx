import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.8s ease, transform 0.8s ease;

  &:hover,
  &:focus {
    border: none;
    background-color: #f1f1f1;
    transform: scale(1.1);
  }

  &:hover {
    p,
    span {
      color: white;
    }
  }
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

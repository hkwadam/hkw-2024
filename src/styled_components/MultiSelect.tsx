/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const MultiSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MultiSelectButton = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.selected ? '#FDF4E2' : '#9E9E9E'};
  background-color: ${props => props.selected ? '#FDF4E2' : 'transparent'};
  color: ${props => props.selected ? '#1F1F1F' : '#fff'};
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #FDF4E2;
    background-color: #FDF4E2;
    color: #1F1F1F;
  }
`;

export { MultiSelectContainer, MultiSelectButton };

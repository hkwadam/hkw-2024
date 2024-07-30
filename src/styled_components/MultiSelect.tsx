/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const MultiSelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
`;

const MultiSelectButton = styled.button<{ selected: boolean }>`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 450;
  border: 1px solid ${props => props.selected ? '#FDF4E2' : '#292929'};
  color: ${props => props.selected ? '#1F1F1F' : '#fff'};
  border-radius: 3rem;
  cursor: pointer;
  background: ${props => props.selected ? '#FDF4E2' : 'linear-gradient(#292929 50%, #fff 50%)'};
  background-repeat: repeat;
  background-size: 100% 200%;
  transition: all 0.3s ease-in-out;
  @media (min-width: 1080px) {
    &:hover {
        color: #1F1F1F;
        background-position: 0 100%;
    }
  }

`;

export { MultiSelectContainer, MultiSelectButton };
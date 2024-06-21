/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const GlobalGrid = styled.div`
    display: grid;
    grid-template-columns: ${({ theme }) => theme.grid.columns};
    grid-template-rows: ${({ theme }) => theme.grid.rows};
    padding: ${({ theme }) => theme.grid.vertPadding} ${({ theme }) => theme.grid.horizPadding};
    gap: ${({ theme }) => theme.grid.gap};
`;

export default GlobalGrid;

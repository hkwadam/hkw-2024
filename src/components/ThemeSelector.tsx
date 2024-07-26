/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Select from '../styled_components/Select';
import Container from '../styled_components/Container';

interface ThemeSelectorProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const SelectContainer = styled(Container)`
  grid-column: 1 / 13;
  padding: 1rem 0;
`

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ setTheme }) => {

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <>
    <SelectContainer>
      <Select onChange={handleThemeChange}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </Select>
    </SelectContainer>
    </>
  );
};

export default ThemeSelector;

/** @jsxImportSource @emotion/react */
import React from 'react';
import StyledSelect from '../styled_components/StyledSelect';
import StyledContainer from '../styled_components/StyledContainer';

interface ThemeSelectorProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ setTheme }) => {
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <>
    <StyledContainer columnStart={'1'} columnEnd={'6'} padding={'0'}>
      <StyledSelect onChange={handleThemeChange} padding={'8px'} margin={'0px'}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>ork
      </StyledSelect>
    </StyledContainer>
    </>
  );
};

export default ThemeSelector;

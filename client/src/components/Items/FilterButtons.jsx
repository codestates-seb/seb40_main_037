import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from 'styled-components';

const FilterButtonBox = styled.div`
  width: 70%;
  display: flex;
  margin: 10px auto;
`;
export default function FiliterButtons() {
  const [alignment, setAlignment] = React.useState('최신순');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <FilterButtonBox>
      <ToggleButtonGroup
        color="warning"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="Platform"
      >
        <ToggleButton value="최신순">최신순</ToggleButton>
        <ToggleButton value="인기순">인기순</ToggleButton>
      </ToggleButtonGroup>
    </FilterButtonBox>
  );
}

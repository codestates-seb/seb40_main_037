import React from 'react';
import { Wrapper } from './style';
import { ProductsBox } from './style';
import { Button } from '../button';

const Header = () => {
  return (
    <Wrapper>
      <span>Page</span>
      <ProductsBox>
        <Button primary="Linkbutton" label="Products">
          Products
        </Button>
      </ProductsBox>
    </Wrapper>
  );
};

export default Header;

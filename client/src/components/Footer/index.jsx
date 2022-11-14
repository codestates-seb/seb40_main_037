import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Container, InnerBox, ListWrap, List } from './style';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <InnerBox className="logo">
          <Link className="logo" to="/">
            <span>Beer House</span>
          </Link>
        </InnerBox>
        <InnerBox className="sitemap"></InnerBox>
        <InnerBox direction="column" className="sns">
          <ListWrap className="sns"></ListWrap>
          <ListWrap className="sns">
            <List>
              Site design / logo © 2022
              <br />
              2022.11.14
            </List>
          </ListWrap>
        </InnerBox>
      </Container>
    </Wrapper>
  );
};

export default Footer;

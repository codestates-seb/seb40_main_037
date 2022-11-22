import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Container, InnerBox, ListWrap, List } from './style';
import { FOOTER_LIST, SITE_LIST } from '../../constants/header_footer';

const { FE_MEMBERS, BE_MEMBERS, FE_TOOLS, BE_TOOLS } = FOOTER_LIST;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <InnerBox className="logo">
          <Link className="logo" to="/">
            <span>House Beer</span>
          </Link>
        </InnerBox>
        <InnerBox className="sitemap">
          {[FE_MEMBERS, BE_MEMBERS, FE_TOOLS, BE_TOOLS].map((list, i) => {
            return (
              <ListWrap key={i}>
                {list.map((list, i) => {
                  return list.href !== undefined ? (
                    <List key={i} className="title">
                      <a href={list.href}>{list.name}</a>
                    </List>
                  ) : (
                    <List key={i} className="title">
                      {list.name}
                    </List>
                  );
                })}
              </ListWrap>
            );
          })}
        </InnerBox>
        <InnerBox direction="column" className="sns">
          <ListWrap className="sns">
            {SITE_LIST.map((site, i) => {
              return (
                <a href={site.href} key={i}>
                  <List>{site.name}</List>
                </a>
              );
            })}
          </ListWrap>
          <ListWrap className="sns">
            <List>
              Site design / logo rev 2022.11.11
              <br />
              Error page background img 작가 dgim-studio 출처 Freepik
            </List>
          </ListWrap>
        </InnerBox>
      </Container>
    </Wrapper>
  );
};

export default Footer;

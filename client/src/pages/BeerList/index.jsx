import React from 'react';

import { Wrapper, BeerLiheader, Beercontainer, Beertagbox, Tags, BeerItems } from './style';

import { Button } from '../../components/button';
import { Banner } from '../../components/MainPage/style';
import { Beer_type } from '../../constants/Beer';
import Layout from '../../components/Layout';
import BeerCard from '../../components/BeerCard';
import Paging from '../../components/Pagenation';

const BeerList = () => {
  return (
    <Layout>
      <Wrapper>
        <Banner />
        <BeerLiheader>
          <span>Beer List</span>
          <Button
            primary="Pagingbutton"
            label="Beer Request"
            onClick={() => {
              location = '/BeerRequest';
            }}
          />
        </BeerLiheader>
        <Beercontainer>
          <Beertagbox>
            {Beer_type.map((item, i) => {
              return (
                <Tags key={i}>
                  <div>{item.title}</div>
                  <ul>
                    {item.Kind.map((item, i) => {
                      return (
                        <li key={i}>
                          <Button primary="Mypagebutton" label={item} />
                        </li>
                      );
                    })}
                  </ul>
                </Tags>
              );
            })}
          </Beertagbox>
          <BeerCard />
        </Beercontainer>
        <Paging />
      </Wrapper>
    </Layout>
  );
};

export default BeerList;

import React from 'react';
import { Button } from '../button';

import { Banner } from '../MainPage/style';

import { Wrapper, BeerLiheader, Beercontainer, Beertagbox, Tags, BeerItems } from './style';
import { Beer_type } from '../../constants/Beer';
import TrandingBeer from '../MainPage/TrandingBeer';

const Beerli = () => {
  return (
    <Wrapper>
      <Banner />
      <BeerLiheader>
        <span>Beer List</span>
        <Button
          primary="pagingbutton"
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
        <BeerItems>
          <TrandingBeer />
        </BeerItems>
      </Beercontainer>
    </Wrapper>
  );
};

export default Beerli;

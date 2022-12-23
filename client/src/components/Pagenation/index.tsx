import { React } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Pagingcontainer, Pagination, Perpage } from './style.js';
import { Button } from '../Button';
import { getBeerList } from '../../api/Beer';

const Paging = () => {
  const { isLoading, data } = useQuery(['getBeerList', {}], () => {
    return getBeerList();
  });

  if (isLoading) return <div>now loading..</div>;

  const pageInfo = data.pageInfo;
  const pages = [];
  const choosed = window.location.href.includes('=')
    ? Number(window.location.href.split('=')[1])
    : 1;

  let upper = 5;

  if (pageInfo.totalPages < 5) {
    upper = pageInfo.totalPages;
  } else {
    if (choosed + 2 < pageInfo.totalPages && choosed + 2 > 5) {
      upper = choosed + 2;
    } else if (choosed + 2 >= pageInfo.totalPages) {
      upper = pageInfo.totalPages;
    }
  }

  let downer = choosed - 2;
  if (choosed - 2 <= 0) {
    downer = 1;
  } else if (choosed - 2 > pageInfo.totalPages - 4) {
    downer = pageInfo.totalPages - 4;
    if (downer <= 0) {
      downer = 1;
    }
  }

  {
    for (let n = downer; n < upper + 1; n++) {
      pages.push(n);
    }
  }

  return (
    <Pagingcontainer>
      <Pagination>
        {choosed + 2 > 5 && pageInfo.totalPages > 5 ? (
          <Button
            primary="Pagingbutton"
            label="1"
            onClick={e => {
              window.location.replace(`?page=${e.target.value}`);
            }}
          />
        ) : null}
        {choosed + 2 > 5 && pageInfo.totalPages > 5 ? '... ' : null}

        {pages.map((num, i) => {
          return (
            <Button
              key={i}
              primary="Pagingbutton"
              Selected={choosed === num ? 'Selected' : null}
              label={`${num}`}
              onClick={e => {
                window.location.replace(`?page=${e.target.value}`);
              }}
            />
          );
        })}
        {choosed - 2 < pageInfo.totalPages - 4 && pageInfo.totalPages > 5 ? '... ' : null}
        {choosed - 2 < pageInfo.totalPages - 4 && pageInfo.totalPages > 5 ? (
          <Button
            primary="Pagingbutton"
            label={pageInfo.totalPages}
            onClick={e => {
              e.target.value;
            }}
          />
        ) : null}
      </Pagination>
      <Perpage>
        <Button primary="Pagingbutton" Selected="Selected" label="10" />
        per page
      </Perpage>
    </Pagingcontainer>
  );
};

export default Paging;

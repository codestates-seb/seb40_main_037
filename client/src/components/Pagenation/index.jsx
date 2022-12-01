import { React } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Pagingcontainer, Pagination, Perpage } from './style.js';
import { Button } from '../Button';
import { getAQuestion } from '../../api/questions';
import { AQPage } from '../../store/AQData.js';

const Paging = () => {
  const [page, setPage] = useRecoilState(AQPage);

  const { isLoading, data } = useQuery(['AllQuestion', { page }], () => {
    return getAQuestion(page);
  });

  if (isLoading) return <div>now loading..</div>;

  const pageInfo = data.pageInfo;
  const pages = [];
  const choosed = pageInfo.page;

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
              setPage(e.target.value);
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
                setPage(e.target.value);
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
              setPage(e.target.value);
            }}
          />
        ) : null}
      </Pagination>
      {window.location.href.includes('users') ? (
        <></>
      ) : (
        <Perpage>
          <Button primary="Pagingbutton" Selected="Selected" label="10" />
          per page
        </Perpage>
      )}
    </Pagingcontainer>
  );
};

export default Paging;

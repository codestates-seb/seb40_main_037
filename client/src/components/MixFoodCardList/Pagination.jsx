import * as React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
`;
const ButtonBox = styled.div`
  flex-direction: row;
  display: inline-block;
  padding: 5px;
`;

const MixPagination = ({ pageInfo, currentPage, onClickPage }) => {
  console.log(pageInfo.pageInfo.totalPages);

  return (
    <Wrapper>
      <ButtonBox>
        <button onClick={() => onClickPage('Prev')}>이전</button>
      </ButtonBox>
      {Array.from({ length: +pageInfo.pageInfo.totalPages }).map((el, i) => {
        return (
          <ButtonBox>
            <li key={i}>
              <button onClick={() => onClickPage(i)}>{i + 1}</button>
            </li>
          </ButtonBox>
        );
      })}
      <ButtonBox>
        <button onClick={() => onClickPage('Next')}>다음</button>
      </ButtonBox>
    </Wrapper>
  );
};

export default MixPagination;

import styled from 'styled-components';

const Pagingcontainer = styled.div`
  margin-top: 30px;
`;

const Pagination = styled.span`
  margin-bottom: 50px;
  float: left;
  display: flex;
`;

const Perpage = styled.span`
  float: right;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: hsl(210, 8%, 25%);
`;

export { Pagingcontainer, Pagination, Perpage };

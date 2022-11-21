import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
`;

export const CardBox = styled.div`
  flex-direction: coloumn;
  display: inline-block;
`;
export const CardImage = styled.img`
  height: 150px;
  width: 300px;
  border-radius: 3%;
`;
export const CardBottom = styled.div`
  flex-direction: row;
  flex-grow: 1;
  margin-top: 5px;
`;
export const CardIDImage = styled.img`
  height: 17px;
  width: 17px;
  margin-right: 10px;
  margin-top: 2px;
`;
export const CardIDTitle = styled.div`
  color: #914669;
  display: inline-block;
  margin-right: 1rem;
`;
export const CardTag = styled.button`
  float: right;
`;
export const CardVote = styled.button`
  margin-right: 0;
  float: right;
`;
export const CardTitle = styled.div`
  display: inline-block;
`;

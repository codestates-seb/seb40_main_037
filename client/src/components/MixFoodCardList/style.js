import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const CardBox = styled.div`
  height: 320px;
  width: 280px;
  margin: 20px;
  margin-right: 15px;
  margin-left: 15px;
  padding: 5px;
  background: linear-gradient(45deg, red, yellow);
  border-radius: 15%;
  display: inline-block;
  float: left;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const CardImageBox = styled.div`
  padding-top: 15px;
`;
export const CardImage = styled.img`
  height: 150px;
  width: 250px;
  border-radius: 30px;
  margin: auto;
  display: flex;
  justify-content: center;
`;
export const CardBottom = styled.div`
  flex-direction: row;
  flex-grow: 1;
  margin-top: 5px;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const CardIDImage = styled.img`
  height: 17px;
  width: 17px;
  margin-right: 10px;
  // margin-top: 2px;
`;
export const CardIDTitle = styled.div`
  color: #914669;
  display: inline-block;
  margin-right: 1rem;
`;
export const CardVote = styled.div`
  float: right;
  color: white;
`;

export const CardTitle = styled.div`
  color: white;
  flex-wrap: wrap;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: large;
`;
export const CardTime = styled.div`
  color: white;
  float: right;
  padding-top: 30px;
  font-size: small;
  padding-right: 5px;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderBar = styled.div`
  background-color: ;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 20px;
  height: 65px;
  width: 1000px;
`;
export const Title = styled.div`
  font-size: xx-large;
  color: black;
  display: inline-block;
`;
export const Time = styled.div`
  margin-right: auto;
  margin-left: auto;
  float: right;
  font-size: small;
`;
export const TimeBox = styled.div`
  background-color: ;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  height: 30px;
  width: 1000px;
`;
export const MixDetailImg = styled.img`
  height: 300px;
  width: 500px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
export const UDbutton = styled.button`
  float: right;
  weight: 50px;
  margin-left: 10px;
  margin-top: 10px;
`;
export const MixContent = styled.div`
  margin-top: 30px;
  padding: 10px;
`;

export const MixContentBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1000px;
  border-top: solid 1px;
  border-color: black;
  border-bottom: solid 1px;
`;
export const VoteBox = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1000px;
  border-bottom: solid 1px;
`;
export const Vote = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100px;
  height: 30px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const ReviewsBox = styled.div`
  width: 70%;
  margin: 20px auto;
  ul {
    width: 100%;
    height: auto;
  }
  .reviewList {
    width: 100%;
    margin: 30px 0;
    border: 1px solid blue;
    background-color: #f6f6f6;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
  .profile {
    border: 1px solid blue;
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .commentBox {
    width: 100%;
    margin: 10px 0;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  }
`;

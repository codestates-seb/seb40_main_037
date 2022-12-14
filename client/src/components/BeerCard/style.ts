import styled from 'styled-components';

export const BeerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  .title {
    width: 90%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    font-size: 30px;
    font-weight: 600;
    margin: 0 auto;
  }
  .title_info {
    width: 90%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    margin: 0 auto;
    color: #c0c0c0;
  }
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const BeerContent = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  .title {
    width: 90%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    font-size: 30px;
    font-weight: 600;
    margin: 0 auto;
  }
  .title_info {
    width: 90%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    margin: 0 auto;
    color: #c0c0c0;
  }
`;

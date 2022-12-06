import MixFoodCardList from '../components/MixFoodCardList';
import ListdummyImg from '/assets/ListdummyImg.png';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
`;
const Banner = styled.div`
  width: 100%;
  height: 600px;
  background: url(${ListdummyImg});
  background-size: 100% 100%;
`;
const FoodAndWrite = styled.div`
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
`;
const Food = styled.div`
  font-size: x-large;
  font-weight: bold;
  display: inline-block;
`;
const WriteFood = styled.button`
  width: 75px;
  height: 25px;
  float: right;
  border-radius: 5px;
`;

const MixList = () => {
  return (
    <Layout>
      <Wrapper>
        <Banner />
        <FoodAndWrite>
          <Food>Recomened Food</Food>
          <WriteFood>
            <Link to={`/Mix/Create`}>글 작성</Link>
          </WriteFood>
        </FoodAndWrite>
        <MixFoodCardList />
      </Wrapper>
    </Layout>
  );
};
export default MixList;

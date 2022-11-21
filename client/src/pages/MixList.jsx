import MixFoodCardList from '../components/MixFoodCardList';
import ListdummyImg from '../assets/ListdummyImg.png';
import styled from 'styled-components';
import Layout from '../components/Layout';

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
  padding: 40px;
`;
const Food = styled.div`
  font-size: x-large;
  font-weight: bold;
  display: inline-block;
`;
const WriteFood = styled.button`
  width: 75px;
  height: 25px;
  background: gray;
  color: white;
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
          <WriteFood>글 작성</WriteFood>
        </FoodAndWrite>
        <MixFoodCardList />
      </Wrapper>
    </Layout>
  );
};
export default MixList;

import * as React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import dummy from '../../../data/data.json';
import HeartImg from '/assets/icon/Heart.png';
import EmptyHeartImg from '/assets/icon/EmptyHeart.png';
const ProductInfoBox = styled.div`
  width: 70%;
  margin: 30px auto;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: #ffe2bc;
`;
const ProductionButton = styled.button`
  /* background-color: gold; */
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 50px;
  width: 130px;
  height: 40px;
  vertical-align: top;
  margin: 10px 10px;
  font-weight: bold;
  font-size: 20px;
`;

const HeartBuuton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default function ProductInformation() {
  const [like, setLike] = React.useState(false);

  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const res = await axios.get('http://localhost:3001/users/');
  //     if (res.data.type === 'liked') setLike(true);
  //   };
  //   fetchData();
  // }, []);

  const toggleLike = async e => {
    // const res = await axios.post(...) // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    setLike(!like);
  };

  return (
    <ProductInfoBox>
      {dummy.items.map(item => {
        return (
          <div>
            <Rating className="rating-star" value={item.rating} size="large" readOnly />
            {item.tags &&
              item.tags.map((tag, i) => {
                return <ProductionButton key={tag[i]}>{tag}</ProductionButton>;
              })}
            <HeartBuuton like={like} onClick={toggleLike} src={like ? HeartImg : EmptyHeartImg} />
          </div>
        );
      })}
    </ProductInfoBox>
  );
}

import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import HeartImg from '../../assets/icon/Heart.png';
import EmptyHeartImg from '../../assets/icon/EmptyHeart.png';

import { BeerListDetail } from './fetchBeer';
import { useParams } from 'react-router-dom';
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
  // 서버 연결
  const { id } = useParams();
  const [update, setUpdate] = useState(true);
  const [info, setInfo] = useState({});
  // 렌더링 될때

  const getBeerDetail = id => {
    BeerListDetail(id).then(res => {
      setInfo(res);
    });
  };

  useEffect(() => {
    if (update) {
      getBeerDetail(id);
      setUpdate(false);
    }
  }, [update]);

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
      <div>
        <Rating className="rating-star" value={Number(info.soda)} size="large" readOnly />
        {/* soda가 아니라 score 로 해야하는데 점수가 0.0 으로 되어있음 */}
        <ProductionButton>{info.name}</ProductionButton>
        <ProductionButton>{info.aroma}</ProductionButton>
        <ProductionButton>{info.country}</ProductionButton>
        <HeartBuuton like={like} onClick={toggleLike} src={like ? HeartImg : EmptyHeartImg} />
      </div>
    </ProductInfoBox>
  );
}

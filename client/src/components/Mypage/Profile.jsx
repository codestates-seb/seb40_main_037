import React from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';

const Header = styled.div`
  width: 100%;
  background-color: tomato;
  padding: 50px 0;
`;

const UserName = styled.h1`
  text-align: center;
  color: white;
  font-size: 30px;
`;

const ProfileImgBox = styled.div`
  width: 200px;
  margin: 0 auto;
  img {
    border: 5px solid white;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const TagBoxs = styled.div`
  background-color: pink;
  text-align: center;
  width: 70%;
  padding: 20px;
  margin: 0 auto;
`;
const TagButton = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding: 10px 30px;
  box-shadow: 2px 2px 1px gray;
  font-weight: bold;
  color: white;
`;

function Profile() {
  return (
    <Header>
      <UserName>(랜덤칭호있어도좋을지도)userName</UserName>
      <ProfileImgBox>
        <img src="../../src/assets/avatar/1.jpg" />
      </ProfileImgBox>
      <TagBoxs>
        <h2>Selected Tags</h2>
        <TagButton bgColor="red">SWEET</TagButton>
        <TagButton bgColor="blue">BITTER</TagButton>
        <TagButton bgColor="green">ORANGE</TagButton>
      </TagBoxs>
    </Header>
  );
}

export default Profile;

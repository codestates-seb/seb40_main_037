import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  background-color: tomato;
  padding: 50px 0;
`;

const UserName = styled.h1``;

const ProfileImgBox = styled.div`
  width: 50%;
  height: 200px;
  background-color: blue;
  margin: 0 auto;
`;

const TagBoxs = styled.div`
  background-color: pink;
  width: 70%;
  height: 200px;
  margin: 0 auto;
`;
const TagButton = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
`;

const MyReviewBox = styled.div`
  background-color: skyblue;
  width: 70%;
  height: 200px;
  margin: 0 auto;
`;

function Profile() {
  return (
    <Header>
      <UserName>userName</UserName>
      <ProfileImgBox>
        <img></img>
      </ProfileImgBox>
      <TagBoxs>
        <h2>Tags</h2>
        <TagButton bgColor="red">Hi</TagButton>
        <TagButton bgColor="blue">My</TagButton>
        <TagButton bgColor="green">Name</TagButton>
      </TagBoxs>
    </Header>
  );
}

export default Profile;

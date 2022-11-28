import React from 'react';
import styled from 'styled-components';
import dummy from '../../../data/data.json';

const Header = styled.div`
  width: 100%;
  padding: 50px 0;
  background: rgb(255, 89, 89);
  background: linear-gradient(90deg, rgba(255, 89, 89, 1) 0%, rgba(255, 171, 0, 1) 100%);
`;

const UserName = styled.h1`
  text-align: center;
  font-size: 30px;
  color: white;
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
  text-align: center;
  width: 70%;
  padding: 20px;
  margin: 0 auto;

  h2 {
    color: white;
    font-size: 36px;
  }
`;
const TagButton = styled.button`
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding: 10px 30px;
  box-shadow: 2px 2px 1px gray;
  font-weight: bold;
`;

function Profile() {
  return (
    <Header>
      {dummy.users.map(user => {
        return (
          <div>
            <UserName>{user.name}</UserName>
            <ProfileImgBox>
              <img src={user.avatar} />
            </ProfileImgBox>
            <TagBoxs>
              <h2>interested Tags</h2>
              {user.tags &&
                user.tags.map((item, i) => {
                  return <TagButton key={item[i]}>{item}</TagButton>;
                })}
            </TagBoxs>
          </div>
        );
      })}
    </Header>
  );
}

export default Profile;

import * as React from 'react';
import styled from 'styled-components';
import UploadButtons from '../Items/UploadButton';
import dummy from '../../../data/data.json';

const MyReivewForm = styled.form`
  width: 70%;
  flex-wrap: nowrap;
  margin: 20px auto;
  border: 1px solid blue;
  border-radius: 20px;
  .formBox {
    margin: 20px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
  span {
    vertical-align: top;
  }
  .commentBox {
    background-color: gold;
    width: 100%;
    padding: 20px;
    font-weight: bold;
    margin-top: 30px;
    border-radius: 20px;
  }
`;
export default function MixDetailReviewForms() {
  const [value, setValue] = React.useState(0);
  return (
    <MyReivewForm>
      {dummy.users.map(user => {
        return (
          <div className="formBox" key={user.name}>
            <img src={user.avatar} />
            <UploadButtons />
            <input className="commentBox"></input>
          </div>
        );
      })}
    </MyReivewForm>
  );
}

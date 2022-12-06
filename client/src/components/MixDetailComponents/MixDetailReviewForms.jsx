import * as React from 'react';
import styled from 'styled-components';
import UploadButtons from '../Items/UploadButton';
import dummy from '../../../data/data.json';
import { useState } from 'react';
import { fetchReplyCreate } from '../../util/fetchReply';
// import 체크로그인

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
function MixDetailReviewForms({ replyId, update }) {
  const [content, setContent] = useState('');

  const onChangeContent = content => {
    setContent(content);
  };
  const onClickSubmit = async () => {
    if (contenet.length < 10) {
      alert('최소 10글자를 적어야합니다.');
    } else {
      checkIfLogined().then(() => {
        fetchReplyCreate({ replyId, content }).then(() => {
          update(true);
        });
      });
    }
  };

  return (
    <MyReivewForm>
      <div className="formBox" onChange={onChangeContent}>
        <UploadButtons onClick={onClickSubmit} />
        <input className="commentBox"></input>
      </div>
    </MyReivewForm>
  );
}
export default MixDetailReviewForms;

import React, { useState } from 'react';
import { Button } from '../../components/button';
import Layout from '../../components/Layout';

import { Wrapper, Reqcontainer, InputList, InputImg } from './style';

const BeerRequest = () => {
  const fileInput = document.getElementById('fileUpload');

  const handleFiles = e => {
    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile[0]);

    fileReader.onload = function () {
      document.getElementById('previewImg').src = fileReader.result;
    };

    setIsImg(!isImg);
  };

  const RequestBeer = e => {
    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(selectedFile[0]);

    fileReader.onload = function () {
      document.getElementById('previewImg').src = fileReader.result;
    };

    setIsImg(!isImg);
  };

  const [isImg, setIsImg] = useState(false);

  return (
    <Layout>
      <Wrapper>
        <div>이름을 제외한 부분은 선택사항입니다.</div>
        <Reqcontainer>
          <InputList>
            <div>
              이름 (필수 입력사항입니다.)
              <input placeholder="ex) Asahi Super Dry" className="Necessary" />
            </div>
            <div>
              생산지
              <input placeholder="ex) 일본" />
            </div>
            <div>
              브랜드
              <input placeholder="ex) Asahi" />
            </div>
            <div>
              맥주의 주종
              <input placeholder="ex) 페일라거" />
            </div>
          </InputList>
          <InputImg>
            <div>{isImg && <img id="previewImg" alt="이미지 영역" />}</div>
            <span>
              <input type="file" id="fileUpload" accept="image/*" />
              <Button label="submit" primary="Pagingbutton" onClick={e => handleFiles(e)} />
            </span>
          </InputImg>
        </Reqcontainer>
        운영진의 검토 후, 주류를 추가하겠습니다.
        <Button
          primary="Mypagebutton"
          Selected="Selected"
          label="Request"
          onClick={e => RequestBeer(e)}
        />
      </Wrapper>
    </Layout>
  );
};

export default BeerRequest;

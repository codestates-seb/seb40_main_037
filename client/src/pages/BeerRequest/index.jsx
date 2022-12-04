import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { postBeerOrder } from '../../api/Beer';
import { Button } from '../../components/button';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

import { Wrapper, Reqcontainer, InputList, InputImg } from './style';

const BeerRequest = () => {
  const fileInput = document.getElementById('fileUpload');
  const handleFiles = () => {
    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile[0]);
    fileReader.onload = function () {
      document.getElementById('previewImg').src = fileReader.result;
    };
    setIsImg(!isImg);
  };

  const [isImg, setIsImg] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const { mutate } = useMutation(postBeerOrder, {
    retry: 0,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    },
    onError: error => {
      alert(`${error.code}
      ${error.message}`);
    },
  });

  const handleSignUp = e => {
    e.preventDefault();

    if (name === '') {
      if (name === '') setNameError(true);
      return;
    }
    mutate({
      nickname: name,
    });
  };

  const handleChangeSign = useCallback(
    e => {
      const id = e.target.id;
      if (id === 'name') {
        setNameError(false);
        setName(e.target.value);
      }
    },
    [name],
  );

  return (
    <Layout>
      <Wrapper>
        <div>이름을 제외한 부분은 선택사항입니다.</div>
        <Reqcontainer>
          <InputList>
            <TextInput
              id="name"
              label="제품명"
              errorMsg="필수 입력사항입니다."
              isError={nameError}
              value={name}
              onChange={handleChangeSign}
              placeholder="ex) Asahi Super Dry"
              className="Necessary"
            />
            <TextInput id="from" label="생산지" placeholder="ex) 일본" />
            <TextInput id="brand" label="브랜드" placeholder="ex) Asahi" />
            <TextInput id="kind" label="맥주의 주종" placeholder="ex) 페일라거" />
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
        <Button primary="Mypagebutton" Selected="Selected" label="Request" onClick={handleSignUp} />
      </Wrapper>
    </Layout>
  );
};

export default BeerRequest;

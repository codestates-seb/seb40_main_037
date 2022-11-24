import styled from 'styled-components';
import TitleBox from './TitleBox';
import ContentBox from './ContentBox';
import SubmitButton from './SubmitButton';
import CameraButton from './CameraButton';

const Wrapper = styled.div`
  width: 100%;
`;
const MainBox = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

const MixCreateBox = () => {
  return (
    <Wrapper>
      <MainBox>
        <TitleBox />
        <ContentBox />
        <CameraButton />
        <SubmitButton />
      </MainBox>
    </Wrapper>
  );
};

export default MixCreateBox;

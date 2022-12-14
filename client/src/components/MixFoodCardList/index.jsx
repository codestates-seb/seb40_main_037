import {
  Wrapper,
  CardBox,
  CardIDImage,
  CardIDTitle,
  CardImage,
  CardTitle,
  CardVote,
  CardBottom,
  CardImageBox,
  CardTime,
} from './style';
import { Link } from 'react-router-dom';
import { relTimeFormat } from '../../util/convertor';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { axiosMixList } from '../../util/axiosMix';
import MixPagination from '../MixComponent/Pagination';

function MixFoodCardList() {
  const [MixList, setMixList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [isPending, setIsPending] = useState(true);
  const [currPage, setCurrPage] = useState(0);
  const [isUpdate, setIsUpdate] = useState(true);

  function onPageChange(e) {
    setCurrPage(e.target);
    setIsUpdate(true);
  }
  useEffect(() => {
    if (isUpdate) {
      axiosMixList(currPage).then(res => {
        setMixList(res.data);
        setPageInfo(res);
        setIsPending(false);
        setIsUpdate(false);
      });
    }
  }, [isUpdate]);

  if (isPending) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const onClickPage = target => {
    if (target === 'Prev') {
      setCurrPage(currPage - 1);
    } else if (target === 'Next') {
      setCurrPage(currPage + 1);
    } else {
      setCurrPage(+target);
    }
    setIsUpdate(true);
  };

  return (
    <Wrapper>
      <div>
        <ul>
          {MixList &&
            MixList.map(MixList => {
              return (
                <li className="cardList" key={MixList.id}>
                  <CardBox>
                    <CardImageBox>
                      <CardImage src={MixList.image} alt="임시 사진입니다." />
                    </CardImageBox>
                    <CardBottom>
                      {/* <CardIDImage src={MixList.avatar} alt="임시 사진입니다." /> */}
                      <Link to="/mypage">
                        {/* <CardIDTitle>{MixList.nickname}</CardIDTitle> */}
                      </Link>
                      <CardVote>좋아요 {MixList.likeCount}</CardVote>
                    </CardBottom>
                    <CardBottom>
                      <Link to={`/MixDetail/${MixList.id}`}>
                        <CardTitle>
                          {MixList.title &&
                            MixList.title.replace(/"/g, '').replace(/<[^>]*>?/g, '')}
                        </CardTitle>
                      </Link>
                      <CardTime>
                        {MixList.modifiedAt !== null ? (
                          <h1>{relTimeFormat(MixList.modifiedAt)} 수정됨</h1>
                        ) : (
                          <h1>{relTimeFormat(MixList.createdAt)} 생성됨 </h1>
                        )}
                      </CardTime>
                    </CardBottom>
                  </CardBox>
                </li>
              );
            })}
        </ul>
        <div>
          {pageInfo && (
            <MixPagination
              currentPage={currPage}
              pageInfo={pageInfo}
              setCurrPage={setCurrPage}
              setIsUpdate={setIsUpdate}
              onPageChange={onPageChange}
              onClickPage={onClickPage}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default MixFoodCardList;

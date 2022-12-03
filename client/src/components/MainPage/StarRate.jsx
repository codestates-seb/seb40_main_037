import { StarRateWrap } from './style';

function StarRate(props) {
  const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last'];
  console.log(props.ratesResArr);

  return (
    <StarRateWrap>
      {props.ratesResArr.map((item, idx) => {
        if (item[idx] === 14) {
          <span className="star_icon" key={`${item}_${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 13"
              fill="#966fd6"
            />
          </span>;
        } else if (item[idx] === 0) {
          <span className="star_icon" key={`${item}_${idx}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 13"
              fill="#cacaca"
            />
          </span>;
        } else {
          return (
            <span className="star_icon" key={`${item}_${idx}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 14 13"
                fill="#cacaca"
              >
                <clipPath id={`${item}StarClip`}>
                  <rect width={`${props.ratesResArr[idx]}`} height="20" />
                </clipPath>
                <path
                  id={`${item}Star`}
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                />
                <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill="#966fd6" />
              </svg>
            </span>
          );
        }
      })}
    </StarRateWrap>
  );
}

export default StarRate;

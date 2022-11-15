import React from "react";
import styled from "styled-components";
import dummy from '../../../data/data.json'
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Wrapper = styled.div`
    width: 100%;
    background-color: gold;
    height: 5000px;
`
const Banner = styled.div`
    width:100%;
    height: 300px;
    background-color: pink;
`
const ProductInformation = styled.div`
    width:90%;
    margin: 0 auto;
    height: 100px;
    background-color: red;
`

const FilterButtonBox = styled.div`
    width:80%;
    display: flex;
    margin: 10px auto;
`
const FilterRecommend = styled.button`
    width: 20%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    background-color: skyblue;  
    &:hover {
    background-color: #0069d9;
    }
  &:active {
    background-color: #0062cc;
    border:1px solid #005cbf;
  }
`
const FilterNew = styled.button`
    width: 20%;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    background-color: tomato;
`
const ReviewsBox = styled.div`
    width: 80%;
    margin:20px auto;
    background-color: pink;
ul{
    width:100%;
}
 li {
  width:100%;
  margin: 30px 0;
  border:1px solid blue;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.profil{
    border: 1px solid blue;
    width:100px;
    height: 100px;
    margin-bottom: 10px;
    img {
        width:100%;
    }
}
.rating{
    width:400px;
    border: 1px solid green;
    height:50px;
}
.commentBox {
    width:100%;
    margin: 10px 0;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
}
.imgBox {
    flex-wrap:wrap;
    border: 1px solid blue;
    width:100%;
    height: 100px;
    img{
        width:100px;
    }
}
`

const MyReivewForm = styled.form`
    width:80%;
    margin:20px auto;
    background-color: rebeccapurple;
    height: 400px;
`

function Item(value){
    // const [value , setValue] = useState("")
    return(
        <Wrapper>
            <Banner/>
            <ProductInformation/>
            <FilterButtonBox>
                <FilterRecommend>
                    추천순
                </FilterRecommend>
                <FilterNew>
                   최신순
                </FilterNew>
            </FilterButtonBox>
            <ReviewsBox>
                <ul>
                {dummy.reviews.map((review , i) => {
                    let photos = review.photo.map((item) => {
                        return item.img;
                    })
                    return (
                            <li className="reviewList" key={review.id}> 
                                <div className="profil">
                                    <img src={review.avatar} />
                                    <p className="userName">{review.name}</p>
                                </div>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <div className="imgBox">
                                    <img src={review.url} />
                                </div>
                                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                    {photos.map((item) => (
                                        <ImageListItem key={item.img}>
                                        <img
                                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        </ImageListItem>
                                    ))}
                                    </ImageList>
                                <div className="commentBox">{review.comment}</div> 
                            </li>
                    )
                })}
                </ul>
            </ReviewsBox>
            <MyReivewForm>
                <div><img></img></div>
                <input type="text" />
                <button name="bookmark">Heart</button>
                <button name="submit" type="submit">작성</button>
            </MyReivewForm>
        </Wrapper>
    )
} 

export default Item;
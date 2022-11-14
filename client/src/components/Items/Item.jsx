import React from "react";
import styled from "styled-components";
import dummy from '../../../data/data.json'

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
    background-color: green;
    display: flex;
    margin: 10px auto;
`
const FilterRecommend = styled.div`
    width: 20%;
    height: 100px;
    background-color: skyblue;
`
const FilterNew = styled.div`
    width: 20%;
    height: 100px;
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
    width:100px;
    background-color: red;
    height: 100px;
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

function Item(){
    return(
        <Wrapper>
            <Banner/>
            <ProductInformation/>
            <FilterButtonBox>
                <FilterRecommend>
                    <h1>추천순</h1>
                </FilterRecommend>
                <FilterNew>
                    <h1>최신순</h1>
                </FilterNew>
            </FilterButtonBox>
            <ReviewsBox>
                <ul>
                {dummy.reviews.map((review) => {
                    return (
                            <li className="reviewList" key={review.id}> 
                                <div className="profil">
                                    <p className="userName">{review.name}</p>
                                </div>
                                <div className="rating">rating</div>
                                <div className="imgBox">
                                    <img src={review.url} />
                                </div>
                                <div class="commentBox">{review.comment}</div> 
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
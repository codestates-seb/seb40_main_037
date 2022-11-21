import styled from 'styled-components';
import subBanner from '../../assets/subpage/subBanner1.png';

export const Container = styled.div`
    width: 100%;
`

export const Banner = styled.div`
    width: 100%;
    height: 500px;
    background: url(${subBanner});
    background-size: 100% 100%;
    margin-top: 10px;
`

export const BeerBox = styled.div`
    width: 90%;    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 50px;
    div {
        width: 50%;
        height: 250px;
        div {
            width: 50%;
            text-align: left;
            float: left;
            span {
                font-size: 26px;
            }       
            div {
                width: 100%;
                height: 50px;                
                border: 1px solid black;
                text-align: center;
                background-color: hsl(205, 46%, 92%);
                border: none;
                button {
                    float: left;
                    width: 25%;
                    height: 30px;
                    line-height: 30px;
                    margin: 10px;
                    border-radius: 15px;
                }
            }            
        }        
    }
`

export const BeerTmi = styled.div`
    width: 90%;
    height: 200px;
    background-color: hsl(205, 47%, 42%);
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    div {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    span {
        text-align: center;
        line-height: 90px;
        &.top_text {
            font-size: 80px;
        }
        &.bottom_text {
            font-size: 30px;
        }
    }
`

export const BeerContent = styled.div`
    width: 90%;
    height: 300px;    
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 auto;
    div {
        display: flex;
        flex-direction: column;
        span {
            font-size: 20px;
            &.title {
                font-size: 30px;
                font-weight: 600;
            }
        }
    }
    ul {
        margin: 20px 0;
        width: 100%;
        display: flex;        
        justify-content: center;
        align-item: center;
        flex-direction: row;
        text-align: center;
        li {            
            float: left;
            flex-grow: 1;
            display: flex;
            flex-direction: column;            
            span {
                padding: 5%;
                text-align: left;
            }            
        }
    }
`
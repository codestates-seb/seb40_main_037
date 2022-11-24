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

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

export const BeerBox = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;    
    margin-top: 50px;
    .title {
        width: 90%;
        height: 60px;
        line-height: 60px;
        text-align: left;
        font-size: 30px;
        font-weight: 600;
        margin: 0 auto;
    }
    .title_info {
        width: 90%;
        height: 60px;
        line-height: 60px;
        text-align: left;
        margin: 0 auto;
        color: #c0c0c0
    }
`

export const CardBox = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: row;  
`

export const ProgressBarBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`


export const BeerContent = styled.div`
    width: 100%;
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
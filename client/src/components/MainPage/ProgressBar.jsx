import  {  CircularProgressbarWithChildren  }  from  'react-circular-progressbar' ;
import "react-circular-progressbar/dist/styles.css";
import { ProgressBarBox } from './style';
import dummy from "../../../data/dummy.json";

export default function ProgressBar () {
    return (
        <div>
            <ProgressBarBox style = {{width: 180, height: 100}}>
                <CircularProgressbarWithChildren value={66}>        
                <div style={{ fontSize: 12 }}>
                    <strong>단맛</strong>
                </div>                
                </CircularProgressbarWithChildren>
                <CircularProgressbarWithChildren value={66}>        
                <div style={{ fontSize: 12 }}>
                    <strong>쓴맛</strong>
                </div>                
                </CircularProgressbarWithChildren>
                <CircularProgressbarWithChildren value={66}>        
                <div style={{ fontSize: 12 }}>
                    <strong>LV</strong>
                </div>                
                </CircularProgressbarWithChildren>
            </ProgressBarBox>
        </div>
    );
}
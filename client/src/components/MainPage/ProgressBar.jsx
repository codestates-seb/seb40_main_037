import  {  CircularProgressbarWithChildren  }  from  'react-circular-progressbar' ;
import "react-circular-progressbar/dist/styles.css";
import dummy from "../../../data/dummy.json";

export default function ProgressBar () {
    return (
        <div style = {{width: 60, height: 60}}>
            <CircularProgressbarWithChildren value={66}>        
            <div style={{ fontSize: 12,  }}>
                <strong>단맛</strong>
            </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}
import React, {useState} from "react";
import './Counter.css';
import { Button } from "@mui/material";
import stonks from "../images/stonks.png";
import notstonks from "../images/notstonks.png";

export function Counter()
{

    const [count, setcount] = useState(0);
    const back = React.useRef(null);
    const [img, setimg] = useState( 'url('+require("../images/default.png")+')' );
    
    function increase()
    {
        let new_count = count + 1;
        new_count = new_count < 0 ? 0 : ( new_count > 10 ? 10 : new_count ) ;
        setcount(new_count);
        setimg( 'url('+stonks+')' ) ;
    }
    
    function decrease()
    {
        let new_count = count - 1;
        new_count = new_count < 0 ? 0 : ( new_count > 10 ? 10 : new_count ) ;
        setcount(new_count);
        setimg( 'url('+notstonks+')' ) ;
    }

    return (
        <div className="Counter_Back" ref={back} style={{backgroundImage: img }}>
            <div className="Counter_Controls">
            <Button onClick={decrease} color="error" variant="contained" className="Counter_Button" style={{ borderRadius: "20%", fontSize: "3rem"}}>-</Button>
            <div className="Counter_Label"><p>{count}</p></div>
            <Button onClick={increase} color="success" variant="contained" className="Counter_Button" style={{ borderRadius: "20%", fontSize: "3rem"}}>+</Button>
            </div>
        </div>
    );

}
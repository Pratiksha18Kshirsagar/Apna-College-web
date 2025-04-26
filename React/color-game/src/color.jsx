import { useState } from "react";
import { GenColors } from "./helper";

export default function Color({n = 3}) {
    let [randomNo, setRandomno] = useState([])

    let styles = {
        backgroundColor: GenColors(),
        height: "100px",
        width: "100px",
        border: "1px solid black"
    }

    let generateColor = ()=>{
        setRandomno(GenColors(n))
    }

    

    return (
        <>
            <h3>Color Game!</h3>
            <div style={styles}></div>
            <button onClick={generateColor}>Generate-Color</button>
        </>
    );
}



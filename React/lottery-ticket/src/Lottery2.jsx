import { useState } from "react"

import {genNum ,sum} from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState([0 , 0 , 0]);
  
    let generateTicket = ()=>{
        setTicket(genNum(3));
    }

    return (
        <>
            <h1>Lottery game!</h1>
            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h2>{sum(ticket) == 15 && "Lottery , Congratulations, You win🤘🏻🎉" }</h2>
            <br />
            <br />
            <button onClick={generateTicket} >Get New Ticket</button>
        </>
    )
}
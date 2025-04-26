import { useState } from "react"
import { genNum, sum } from "./helper";
import Ticket from "./ticket";

export default function Lottery({n = 3 , isWinning =15}) {
    let [ticket, setTicket] = useState([0, 0, 0]);

    let generateTicket = () => {
        setTicket(genNum(n));
    }

    return (
        <>
            <h1>Lottery game!</h1>
            <div>
               <Ticket ticket={ticket}/>
            </div>
            <h2>{sum(ticket) == isWinning && "Lottery , Congratulations, You win🤘🏻🎉"}</h2>
            <br />
            <br />
            <button onClick={generateTicket} >Get New Ticket</button>
        </>
    )
}
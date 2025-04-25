import { useState } from "react";

export default function Lottery() {
    let [randNo, setRndno] = useState("?");
    let [isfifteen, setIsfifteen] = useState(false);
    let GenerateNumber = () => {
        setRndno((preVal) => {
            let random = Math.floor(Math.random() * 900) + 100;
            let sum = [...random.toString()].reduce((num, next) => {
                return Number(num) + Number(next);
            })
            if (sum === 15) {
                setIsfifteen(true);
            }else{
                setIsfifteen(false);
            }
            return random
        });

    }



    return (
        <>
            <h1>{!isfifteen ? "Lottery" : "Lottery , Congratulations , You win!!"}</h1>
            <p >Lottery Ticket = {randNo} {isfifteen.toString()}</p>
            <button onClick={GenerateNumber}>Get New Ticket</button>
        </>
    )
}
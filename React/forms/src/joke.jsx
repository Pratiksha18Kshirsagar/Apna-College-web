import { useState ,useEffect } from "react";

export default function Joke() {
    let [joker, setJoker] = useState({});

    let URL = "https://official-joke-api.appspot.com/jokes/random"
    let getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        let joke = jsonResponse;
        console.log(joke);
        setJoker({setup:joke.setup , punchline:joke.punchline});

    }


useEffect(()=>{getNewJoke()},[])

    return (<>
        <h2>Joke!</h2>
        <h3>{joker.setup}</h3>
        <h3>{joker.punchline}</h3>
        <button onClick={getNewJoke}>GetNewJoke</button>
    </>)
}
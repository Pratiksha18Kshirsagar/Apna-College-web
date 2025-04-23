import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [isLiked, setIsLiked] = useState(false);

  function handelClick() {
    setCount(count + 1);
    setIsLiked(!isLiked);

  }

  let styles = { color: "red" }

  return (
    <>
      <h1 >count = {count}</h1>
      {/* <h1>{isLiked.toString()}</h1> */}
      <h1 onClick={handelClick}>{isLiked ? (<i style={styles} className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)}</h1>
      <button onClick={handelClick}>Increase-count</button>
    </>
  )
}

export default App

import './App.css'
import Title from "./Title.jsx"


function Description(){
  return(
      <div>
          <p>I am description!!</p>
      </div>
  )
}


function App() {
  return (
    <div>
      <Title/>
      <Description/>
    </div>
  )
}

export default App;

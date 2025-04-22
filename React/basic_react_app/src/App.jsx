import './App.css'
import Title from "./Title.jsx"
import Product from "./product.jsx"
import Message from "./msgBox.jsx"


function Description(){
  return(
      <div>
          <p>I am description!!</p>
      </div>
  )
}


function App() {
  let option = ["durable" , "fast" , "hi-tech"];
  let option2 = {a:"hii" , b:"bye"};
  return (
    <div>
      {/* <Title />
      <Description/> */}
      <Message userName= "Pratiksha" textColor="cyan"/>
      <Message userName= "Girish" textColor="green"/>
      <Product title="Laptop" price={500000}/>
      <Product title="Mobile" price={600000}/>
      <Product title="headset" price={20000}/>

    </div>
  )
}

export default App;

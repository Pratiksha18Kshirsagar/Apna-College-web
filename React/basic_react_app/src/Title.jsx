import "./title.css"

function Title(){
    let name = "shradha"
    return(
        <div className="title">
            <p>2*2={2*2}</p>
            <h2>I am heading!!</h2>
            <p>{name.toUpperCase()}</p>
        </div>
    )
}

export default Title;
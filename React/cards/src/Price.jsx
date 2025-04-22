export default function Price({idx}){
    let oldPrice = ["1000" , "1600" , "2000" , "3500"];
    let newPrice = ["799" , "1111" , "1500" , "3000"];
    let styles = {
        backgroundColor:"gold",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
        height:"31px"
    }
    let old = {
        textDecorationLine:"line-through",
        marginRight:"10px"
        
    }
    return(
       <div style={styles}>
        <span style={old} >{oldPrice[idx]}</span>
        <span>{newPrice[idx]}</span>
        </div>
    )
}
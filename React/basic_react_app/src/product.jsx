

function Product({title , price  , features }){
    let isDiscount = price > 30000;
    let styles = {backgroundColor  : isDiscount &&  "pink"}
    return(
       <div style={styles}>
        <h1>{title}</h1>
        <h3>Price:{price}</h3>
        {/* <h4>{features.map(feature => <li>{feature}</li>)}</h4> */}
        { isDiscount ? <p>display discount 5%</p>:null}
        {/* {price > 30000 &&  <p>display discount 5%</p>} used when we dont want else to be used  */}
       </div>
    )
}

export default Product;
import Price from "./Price.jsx"

export default function Product({ title, idx }) {
    let description = [["Matte finish", "Longlasting"], ["Waterproof", "Doublethick"], ["Smells good", "Chocolate node"], ["Exfoliate", "Tan removal"]]
    let styles = {
        border: "1px solid black",
        borderRadius: "10px",
        height: "160px",
        width: "200px",
        marginRight: "10px"

    }
    return (
        <div style={styles}>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price idx={idx} />
        </div>
    )
}
import Product from "./Product.jsx"

export default function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        alignItem:"center",
        justifyContent:"center"
    }
    return (
        <div style={styles}>
            <Product title="Lipstiks" idx={0} />
            <Product title="Mascara" idx={1} />
            <Product title="Vanilla Bodymist" idx={2} />
            <Product title="Dove scrub" idx={3} />
        </div>
    )
}
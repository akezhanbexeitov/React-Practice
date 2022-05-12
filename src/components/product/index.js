function Product (props) {
    const {name, price, index, showPrice} = props
    return (
        <>
            {name} <button onClick={() => showPrice(index)}>Show price</button> <br/>
        </>
    )
}

export default Product
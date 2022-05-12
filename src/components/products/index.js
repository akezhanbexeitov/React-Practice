import {useState} from 'react'

function Products(props) {
    const {name, price, quantity, index, deleteProduct} = props
    const [checked, setChecked] = useState(true)
    return (
        <>
            <tr>
                <td style={{border: '1px solid black'}}>{name}</td>
                <td style={{border: '1px solid black'}}>{quantity}</td> 
                <td style={{border: '1px solid black'}}>{price}</td>
                <td style={{border: '1px solid black'}}>{checked ? price * quantity : ''}</td>
                <button onClick={() => deleteProduct(index)}>Delete</button>
                <input type={'checkbox'} defaultChecked={checked} onChange={() => setChecked(!checked)}/>
            </tr>
        </>
    )
}

export default Products
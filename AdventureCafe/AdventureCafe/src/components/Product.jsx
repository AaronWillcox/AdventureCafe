import React from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//<Button as={Link} to={`/menu/${product.id}`} className="d-block w-100 my-2" variant="light">View {product.name}</Button>


function Product({product}) {
    return (
        <Container className="m-2 content-text">
            <div className='product'>
            <h3>{product.name}</h3>
            <h4>£{product.price}</h4>
            </div>
            <img className="w-100" src={product.image} alt={product.name} />
            <Button className="d-block w-100 my-2" variant="primary" onClick={e => addToBasket(product.id)}>Book a Slot</Button>
        </Container>
    )
    function addToBasket(id){
        var products = JSON.parse(window.localStorage.getItem("products"))
        if (!products)
        {
            products = []
        }
        products.push(id)
        window.localStorage.setItem("products", JSON.stringify(products))
   
    (
        console.log("Product booked")
    )
    }

}


export default Product
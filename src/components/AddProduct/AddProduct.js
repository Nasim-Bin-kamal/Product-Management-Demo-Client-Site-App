import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AddProduct = () => {
    const productRef = useRef();
    const priceRef = useRef();

    const handleAddProduct = (e) => {
        e.preventDefault();
        const productName = productRef.current.value;
        const price = priceRef.current.value;

        const newProduct = {
            productName: productName,
            price: price
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data?.insertedId) {
                    alert('product added successfull');
                    e.target.reset();
                }
            });

    }
    return (
        <div>
            <Container>
                <h2 className="text-center text-primary mx-auto my-3">Add a Product</h2>
                <Form className="mx-auto w-25" onSubmit={handleAddProduct}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control ref={productRef} type="text" placeholder="Enter Product" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="number" placeholder="Price" />
                    </Form.Group>
                    <Button variant="success" type="submit">Add</Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;
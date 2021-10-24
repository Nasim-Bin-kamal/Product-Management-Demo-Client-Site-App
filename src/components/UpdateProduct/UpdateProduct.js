import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    const handleNameChange = (e) => {
        const updatedName = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.productName = updatedName;
        setProduct(updatedProduct);
    }
    const handlePriceChange = (e) => {
        const updatedPrice = e.target.value;
        const updatedProduct = { ...product };
        updatedProduct.price = updatedPrice;
        setProduct(updatedProduct);
    }

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    alert('SuccessFully Updated');
                    setProduct({});
                }
            });
    }
    return (
        <div>
            <h2 className="text-center mx-auto my-3">Update The Product</h2>
            <Form className="mx-auto w-25" onSubmit={handleUpdateProduct}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="text" value={product?.productName || ''} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={handlePriceChange} type="number" value={product?.price || ''} />
                </Form.Group>
                <Button variant="success" type="submit">Update</Button>
            </Form>
        </div>
    );
};

export default UpdateProduct;
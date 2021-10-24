import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Products = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleUpdateProduct = id => {
        history.push(`/products/update/${id}`)
    }

    const handleDelelteProduct = (id) => {
        const proceed = window.confirm('Are you sure to delete this product');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.deletedCount > 0) {
                        alert('Delete successful');
                        const remainingProducts = products?.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <div>
            <Container>
                <h2 className="text-center mx-auto my-3">Available Products: {products.length}</h2>
                <div>
                    <Row xs={1} md={3} lg={3}>
                        {
                            products?.map(product => <Col key={product?._id}>
                                <div className="m-3 p-3 border border-3 shadow-sm">
                                    <h5>{product?.productName}</h5>
                                    <p>Price:{product?.price}</p>
                                    <div className="">
                                        <Button onClick={() => handleUpdateProduct(product?._id)} variant="warning" size="sm" className="me-3">Update</Button>
                                        <Button onClick={() => handleDelelteProduct(product?._id)} variant="danger" size="sm" className="me-3">Delete</Button>
                                    </div>
                                </div>
                            </Col>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Products;
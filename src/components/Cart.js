import React, { useState } from 'react'
import { Breadcrumb, Button, Container, Form, FormLabel, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Cart() {
    const cart_items = [{ "id": 1, "product": "Tshirt", "price": 450, "quantity": 0 },
    { "id": 2, "product": "shorts", "price": 250, "quantity": 0 },
    { "id": 3, "product": "pajama", "price": 650, "quantity": 0 }];

    const [items, setItem] = useState(cart_items);
    const [total, setTotal] = useState(0)

    const increment = (id) => {
        const updatedItem = items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        setItem(updatedItem)
    }
    const decrement = (id) => {
        const updatedItem = items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        setItem(updatedItem)
    }
    const totalVal = (price,operation) => {
        (operation === "add") ? setTotal(total+price) : setTotal(total-price)

    }
    return (
        <>

            <Header />
            <div className='cart'>
                <div className='cart_head'>
                    <h2>Cart</h2>
                    <Breadcrumb className='justify-content-center d-flex'>
                        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Cart
                        </Breadcrumb.Item>

                    </Breadcrumb>
                </div>
                <Container>
                    <Table className='mt-5 '>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th colSpan={2}>Product</th>
                                <th>Price	</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td colSpan={2}>{item.product}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <Form className='d-flex align-items-center w-100 justify-content-center'>
                                                <Button className='rounded-0 bg-white text-dark border-0' onClick={() => { increment(item.id); totalVal(item.price,"add") }}>+</Button>
                                                <h4>{item.quantity}</h4>
                                                <Button className='rounded-0 bg-white text-dark border-0' onClick={()=>{decrement(item.id); totalVal(item.price)}}>-</Button>
                                            </Form>
                                        </td>
                                        <td>${item.price * item.quantity}</td>
                                    </tr>
                                ))
                            }


                        </tbody>

                    </Table>
                   
                    <Table>
                        <tr className="">
                            <td>SubTotal</td>
                            <td>{total}
                            </td>
                        </tr>
                        <tr className="">
                            <td>Shipping</td>
                            <td>
                                <Form className='border-bottom py-4'>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel className='me-4'>Flat Rate: $5.00 </FormLabel>

                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel className='me-4'>Free Shipping  </FormLabel>

                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel >Flat Rate: $10.00  </FormLabel>

                                    </div>
                                    <div className='d-flex'>
                                        <Form.Check type="radio" aria-label="radio 1" className='me-3' />
                                        <FormLabel >Local Delivery: $2.00  </FormLabel>

                                    </div>
                                    <Form.Select aria-label="Default select example" className='mb-3'>
                                        <option>Select Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" className='mb-3'>
                                        <option>Select a state</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">

                                        <Form.Control type="text" placeholder="PostCode / ZipCode" />

                                    </Form.Group>
                                    <Link to="" className='red_circle_btn '>
                                        Update Details
                                    </Link>
                                </Form>
                                <div className='d-flex align-items-center mt-3'>
                                    <Link to="" className='red_circle_btn '>
                                        Continue Shopping
                                    </Link>
                                    <Link to="" className='red_circle_btn ms-3'>
                                        Proceed to checkout
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </Table>


                </Container>
            </div>

            <Footer />

        </>

    )
}

export default Cart
import React from 'react'
import './cart-list.css'

const CartList = () => {
    return(
        <div className='cart-list'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item name</td>
                        <td>1</td>
                        <td>$40</td>
                        <td>
                            <button className='btn btn-outline-danger'><i className='fa fa-trash-o'></i></button>
                            <button className='btn btn-outline-success'><i className='fa fa-plus-circle'></i></button>
                            <button className='btn btn-outline-warning'><i className='fa fa-minus-circle'></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='cart-total'>
                Total: $50
            </div>

        </div>
    )
}

export default CartList
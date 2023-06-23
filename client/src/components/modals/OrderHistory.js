import React, {Component, useState} from 'react';

const OrderHistory = (props) => {
    console.log(props.order)
    return (
        <div className={'modal_order'}>
            <h1>Заказ</h1>
            {props.order.map(order =>
                <div>
                    <div className={'d-flex my-3'}>
                        <img style={{height: "80px", width: 'auto', borderRadius: '10px'}} src={process.env.REACT_APP_API_URL + order.IDProduct_Product.Image} alt={'product'}/>
                        <div className={'d-flex flex-column justify-content-center mx-3'}>
                            <h5>{order.IDProduct_Product.Name}</h5>
                            <p>Количество: {order.Quantity}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OrderHistory;
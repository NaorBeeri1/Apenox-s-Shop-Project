import React from 'react'
import Product from './Product';
import OrderedProduct from './OrderedProduct';

function MyOrdersSender(props) {
const {OrderedProducts , onCheckout} = props;
  return (
    <main className='block-col-2'>
        {/* <h2 className='csheader'>Products</h2> */}
        <div className='csitems'>
            {OrderedProducts?.map((orderedproduct) => (
                <OrderedProduct key={orderedproduct.id} orderedproduct={orderedproduct} onCheckout={onCheckout}/>
            ))}
        </div>
    </main>
  )
}

export default MyOrdersSender
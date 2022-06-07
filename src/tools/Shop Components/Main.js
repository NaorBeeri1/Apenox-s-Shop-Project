import React from 'react'
import Product from '../User UI Components/Product';

function Main(props) {
const {products , onAdd} = props;
  return (
    <main className='block-col-2'>
        {/* <h2 className='csheader'>Products</h2> */}
        <div className='csitems'>
            {products?.map((product) => (
                <Product key={product.id} product={product} onAdd = {onAdd}></Product>
            ))}
        </div>
    </main>
  )
}

export default Main
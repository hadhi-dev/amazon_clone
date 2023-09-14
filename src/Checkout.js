import React from 'react'

function Checkout() {
  return (
    <div className='checkout flex'>
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* ITEMS LIST HERE */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout
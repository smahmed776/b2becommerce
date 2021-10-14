import React from 'react'

const SellerProducts = ({ show }) => {
    return (
        <div className={show ? 'd-block' : "d-none"}>
            <h3>Seller Products</h3>
        </div>
    )
}

export default SellerProducts

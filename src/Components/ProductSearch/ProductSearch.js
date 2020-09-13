/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './ProductSearch.css'

const ProductSearch = () => {
    return (
        <div className="row product">
            <div className=' col col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                <img src="https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="product"/>
            </div>
            <div className=" col col-lg-8 col-md-8 col-sm-6 col-xs-12">
            <div className='description'>
            <div className="title">
                    <h3>Product Here</h3>
                    <p className="desktop-only">This is the part for descriptionhis is the part for descriptionhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the paronhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for descriptionhis is the part for description</p>
                    <div>
                        <p>Review</p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                </div>
            <div className="pricing">
                <h3>$99</h3>                
            </div>
            </div>
                
             </div>
        </div>
    );
}

export default ProductSearch

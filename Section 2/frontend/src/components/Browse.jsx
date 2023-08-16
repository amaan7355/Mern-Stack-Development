import React, { useState } from 'react'
import laptopList from './dummydata';

const Browse = () => {
    const [laptopData, setLaptopData] = useState(laptopList);
    const DisplayData = () => {
        return laptopData.map((laptop) => (
            <div className='col-md-6'>
                <div className='card m-4'>
                    <img className='card-img-top w-75 p-4' src={laptop.image} alt="" />
                    <div className='card-body'>
                        <h4>{laptop.brand}</h4>
                        <h3>{laptop.model}</h3>
                        <h2>{laptop.price}</h2>
                    </div>
                </div>
            </div>
        ))
    }
  return (
    <div className='container'>
        <div className='row'>
            {DisplayData()}
        </div>
    </div>
  )
}

export default Browse;
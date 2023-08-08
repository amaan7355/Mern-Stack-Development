import React from 'react';
import mylogo from '../logo.svg';

const Home = () => {
  let name = "Amaan";
  let num1 = 40;
  let num2 = 60;
  const addnums = (a, b) => {
    return a+b;
  }
  return (
    <div className='home-img'>
        <h1>Welcome to Home Page</h1>
        <h1 style={{color:'red', backgroundColor: 'yellow', fontSize: '50px'}}>Using Inline Css</h1>
        {name}
        <h3>Product of {num1} and {num2} is {num1*num2}</h3>
        <h1>{addnums(26375, 827)}</h1>

        <p className='myclass'>ClassName is used instead of class in jsx</p>
        <img src="/logo192.png" alt="" /><br />
        <img className='img1' src={mylogo} alt="" />

    </div>
  );
};

export default Home;
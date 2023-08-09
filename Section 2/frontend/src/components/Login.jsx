import React from 'react'

const Login = () => {
  return (
    <div className='login-body'>
      <div className="mycard1">
        <img className="logo" src="/logo.png" alt="" />
        <h3 className="form-title">Login Here</h3>
        <form action="">
          <label htmlFor="email">Email Address</label>
          <input type="email" className="myinput" />
          <label htmlFor="password">Password</label>
          <input type="password" className="myinput" />
          <button className="mybtn">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login;
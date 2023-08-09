import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div className="form-body">
  <div className="formcontainer">
    {/* <img className='d-block m-auto' src="/logo1.png" alt="" width="30%" /> */}
    <h2 className="main-heading">SignUp Here</h2>
    <label>
      <h4>Full Name</h4>
    </label>
    <input type="text" className="input" placeholder="Your Name" />
    {/* <label for=""><h3>Company Name</h3></label>
  <input type="text" class="input" placeholder="Your Company Name"> */}
    <label htmlFor="">
      <h4>Email</h4>
    </label>
    <input type="email" className="input" placeholder="Your Email" />
    <label htmlFor="">
      <h4>Password</h4>
    </label>
    <input type="password" className="input" placeholder="Your Password" />
    <label htmlFor="">
      <h4>Confirm Password</h4>
    </label>
    <input
      type="password"
      className="input"
      placeholder="Confirm Your Password"
    />
    {/* <label for="">
          <h3>Message</h3>
      </label>
      <textarea name="" class="input" cols="10" rows="4"
          placeholder="Tell us what we can help you with"></textarea> */}
    <br />
    <p>
      <input type="checkbox" /> I'd like to receive more information about
      company. I understand and agree to the
      <mark>Privacy Policy</mark>
    </p>
    <button className="mybtn1">SignUp</button>
  </div>
</div>

    </div>
  )
}

export default SignUp;
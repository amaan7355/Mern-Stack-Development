import { useFormik } from 'formik';
import React from 'react'

const SignUp = () => {

  // initialize the formik
  const signUpform = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : ''
    },
    onSubmit: (values) => {
      console.log(values);
    }

    // send the data to the server
  });
  return (
    <div>
      <div className="form-body">
        <div className="formcontainer">
          <form onSubmit={signUpform.handleSubmit}>
            <h2 className="main-heading">SignUp Here</h2>
            <label>
              <h4>Full Name</h4>
            </label>
            <input type="text" name='name' className="input" placeholder="Your Name" onChange={signUpform.handleChange}  value={signUpform.values.name}/>
            <label htmlFor="">
              <h4>Email</h4>
            </label> 
            <input type="email" name='email' className="input" placeholder="Your Email"
            onChange={signUpform.handleChange}  value={signUpform.values.email} />
            <label htmlFor="">
              <h4>Password</h4>
            </label>
            <input type="password" name='password' className="input" placeholder="Your Password" onChange={signUpform.handleChange}  value={signUpform.values.password} />
            <br />
            <p>
              <input type="checkbox" required /> I'd like to receive more information about
              company. I understand and agree to the
              <mark>Privacy Policy</mark>
            </p>
            <button className="mybtn1" type='submit'>SignUp</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp;
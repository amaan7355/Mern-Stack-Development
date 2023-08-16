import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(5, 'min 5 characters req.').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = () => {
  // initialize the formik
  const signUpform = useFormik({
    initialValues: {
      name : '',
      email : '',
      password : ''
    },
    onSubmit: (values, {setSubmitting}) => {
      setSubmitting(true);
      setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 3000)

  },
    validationSchema: SignupSchema,

    // send the data to the server
  });
  return (
    <div>
      <div className="form-body">
        <div className="formcontainer">
          <form onSubmit={signUpform.handleSubmit}>
            <h2 className="main-heading">SignUp Here</h2>
            <label>
              <h4>Full Name<span style={{color: 'red'}}> <sup>*</sup></span></h4>
            </label>
            <span style={{fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.name && signUpform.errors.name}</span>
            <input type="text" name='name' className="input" placeholder="Your Name" onChange={signUpform.handleChange}  value={signUpform.values.name}/>
            <label htmlFor="">
              <h4>Email <span style={{color: 'red'}}> <sup>*</sup></span></h4>
            </label>
            <span style={{fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.email && signUpform.errors.email}</span> 
            <input type="email" name='email' className="input" placeholder="Your Email"
            onChange={signUpform.handleChange}  value={signUpform.values.email} />
            <label htmlFor="">
              <h4>Password <span style={{color: 'red'}}> <sup>*</sup></span></h4>
            </label>
            <input type="password" name='password' className="input" placeholder="Your Password" onChange={signUpform.handleChange}  value={signUpform.values.password} />
            <br />
            <p>
              <input type="checkbox" required /> I'd like to receive more information about
              company. I understand and agree to the
              <mark>Privacy Policy</mark>
            </p>
            <button disabled={signUpform.isSubmitting} className="mybtn1" type='submit'>
              {
                signUpform.isSubmitting ? (
                  <>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{marginRight: '10px'}}></span>Loading...
                  </>
                ): 'Submit'
              }
             </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp;
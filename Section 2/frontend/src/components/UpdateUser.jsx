import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        const res = await fetch(`http://localhost:5000/user/getbyid/${id}`);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            setUserData(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const submitForm = async (values, {setSubmitting}) => {
        console.log(values);
    

    const res = await fetch(`http://localhost:5000/user/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    console.log(res.status);

    if(res.status === 200){
        toast.success('User Updated Successfully');
    }
    setSubmitting(false);
    }

  return (
    <div>
        <div className='container py-5'>
            <h1 className='text-center'>Update User Form</h1>
            <hr />

            <div className="form-body">
        <div className="formcontainer">
            {
                userData !== null ? (
                    <Formik initialValues={userData} onSubmit={submitForm}>
                        { (signUpform) => (
                            <form onSubmit={signUpform.handleSubmit}>
                            <h2 className="main-heading">SignUp Here</h2>
                            <label>
                              <h4>Full Name<span style={{ color: 'red' }}> <sup>*</sup></span></h4>
                            </label>
                            <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.name && signUpform.errors.name}</span>
                            <input type="text" name='name' className="input" placeholder="Your Name" onChange={signUpform.handleChange} value={signUpform.values.name} />
                            <label htmlFor="">
                              <h4>Email <span style={{ color: 'red' }}> <sup>*</sup></span></h4>
                            </label>
                            <span style={{ fontSize: "1em", color: 'red', marginLeft: 20 }}>{signUpform.touched.email && signUpform.errors.email}</span>
                            <input type="email" name='email' className="input" placeholder="Your Email"
                              onChange={signUpform.handleChange} value={signUpform.values.email} />
                            <label htmlFor="">
                              <h4>Password <span style={{ color: 'red' }}> <sup>*</sup></span></h4>
                            </label>
                            <input type="password" name='password' className="input" placeholder="Your Password" onChange={signUpform.handleChange} value={signUpform.values.password} />
                            {/* <input type="file" className='my-3' onChange={uploadFile} /> */}
                            <br />
                            <button disabled={signUpform.isSubmitting} className="mybtn1" type='submit'>
                              {
                                signUpform.isSubmitting ? (
                                  <>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                                  </>
                                ) : 'Submit'
                              }
                            </button>
                          </form>
                        ) }
                    </Formik>    
                ): <h1>Loading...</h1>
            }
        </div>
      </div>
        </div>
    </div>
  )
}

export default UpdateUser;
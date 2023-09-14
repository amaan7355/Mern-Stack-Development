import { useFormik } from 'formik';
import React from 'react';

const AppProduct = () => {

    const Product = useFormik({
        initialValues: {
            title: '',
            category: '',
            image: '',
            price: '',
            review: '',
            rating: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
                console.log(values);
                setSubmitting(false);
            }, 3000);

            // send the data to the server
            const res = await fetch('http://localhost:5000/product/add', {
                method: 'POST',
                body: JSON.stringify(values),
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            });

        }
    })

    return (
        <div className='mt-5 w-50 m-auto'>
            <div className='card'>
                <h1 className='text-center'>App Products</h1>
                <div className='card-body'>
                    <form onSubmit={Product.handleSubmit}>
                        <h3><label className='mt-3'>Title</label></h3>
                        <input type="text" className='form-control' name='title' onChange={Product.handleChange} value={Product.values.title} />
                        <h3><label className='mt-3'>Category</label></h3>
                        <input type="text" className='form-control' name='category' onChange={Product.handleChange} value={Product.values.category} />
                        <h3><label className='mt-3'>Image</label></h3>
                        <input type="text" className='form-control' name='image' onChange={Product.handleChange} value={Product.values.image} />
                        <h3><label className='mt-3'>Price</label></h3>
                        <input type="text" className='form-control' name='price' onChange={Product.handleChange} value={Product.values.price} />
                        <h3><label className='mt-3'>Review</label></h3>
                        <input type="text" className='form-control' name='review' onChange={Product.handleChange} value={Product.values.review} />
                        <h3><label className='mt-3'>Rating</label></h3>
                        <input type="text" className='form-control' name='rating' onChange={Product.handleChange} value={Product.values.rating} />

                        <button disabled={Product.isSubmitting} className='btn btn-primary mt-5 w-100' type='submit'>
                            {
                                Product.isSubmitting ? (
                                    <>
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '10px' }}></span>Loading...
                                    </>
                                ) : 'Submit'
                            }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppProduct;
import React, { useState } from 'react'

const StateManagement = () => {

    const [likes, setLikes] = useState(1);
    let count = 1;

    const [img, setImg] = useState("")
  return (
    <div>
        <div className='container'>
            <h1 className='text-center'>State Management</h1>
            <hr />

            <h1>Count: {count}</h1>
            <button className='btn btn-primary mt-5 mb-5' onClick={() => {count++; console.log(count)}}>Add Count</button>
            <h1>Likes: {likes}</h1>
            <button className='btn btn-danger mt-5' onClick={() => {setLikes(likes+1)}}>Add Likes</button>
            <button className='btn btn-danger mt-5 mx-5' onClick={() => {setLikes(0)}}>Reset Likes</button>
            <input type="text" className='form-control mt-5 mb-5' onChange={(e) => {setImg(e.target.value)}} />

            {/* <h1>{img}</h1> */}
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default StateManagement;
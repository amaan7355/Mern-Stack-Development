import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const [userData, setUserData] = useState([]);
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        if(res.status === 200){
          const data = await res.json();
          console.log(data);
          setUserData(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [])


  return (
    <div className='container py-5'>
        <h1 className='text-center'>Manage User</h1>

        <table className='table table-secondary mt-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              userData.map( (user) => {
                return <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default ManageUser;
import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />
        <h2>Click Event Handling</h2>
        <button className='btn btn-primary' onClick={() => {alert('button was clicked')} }>Click Event</button>
        <input type="text" className='form-control' onChange={(e) => {console.log(e.target.value) }} />
    </div>
  )
}

export default EventHandling;
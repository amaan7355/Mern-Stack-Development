import React, { useState } from 'react'

const Post = () => {
    const [likes, setLikes] = useState(1000);
    const [comments, setComment] = useState(500);
    const [share, setShare] = useState(100);
    return (
        <div className='container'>
            <h1 className='text-center'>Facebook Post</h1>
            <hr />
            <div className='card shadow' style={{ width: '40rem' }}>
                <div style={{ marginLeft: '20px' }}>
                    <button className="btn" style={{ width: "55%", marginTop: "1rem" }}>
                        <img
                            src="https://img.freepik.com/premium-vector/round-facebook-logo-isolated-white-background_469489-897.jpg?w=2000"
                            alt=""
                            width="13%"
                            style={{ float: "left" }} />
                        <p style={{ fontSize: "1rem", float: "left", marginLeft: "20px", marginBottom: "0px" }}>
                            Amaan Alam
                        </p><br />
                        <p style={{ fontSize: "0.8rem", float: "left", marginLeft: "20px" }}>Monday at 11:00 AM</p>
                    </button>
                    <div>
                        <p>A Background Photo.!
                        </p>
                    </div>
                    <div className=''>
                        <img src="https://i.pinimg.com/474x/96/b4/31/96b431a290f40a4e0beff3224e478469.jpg" alt="" width='90%' />
                    </div>
                    <div>
                        <button className='btn' style={{ width: '100%', border: "0"}}>
                            <div style={{ float: "left", padding: "10px"  }}>
                                <font className='my-3' >{likes} Likes</font><br />
                                <button className='btn btn-primary' onClick={() => { setLikes(likes + 1) }}><i class="fa-regular fa-thumbs-up fa-lg"></i><font className='mx-3'>Like</font></button>
                            </div>
                            <div style={{ float: "left", marginLeft: "20px", padding: "10px" }}>
                                <font className='my-3'>{comments} Comments</font><br />
                                <button className='btn btn-secondary' onClick={() => { setComment(comments + 1) }}><i class="fa-regular fa-comment fa-lg"></i><font className='mx-3'>comment</font></button>
                            </div>
                            <div style={{ float: "left", marginLeft: "20px", padding: "10px" }}>
                                <font className='my-3'>shared by  {share}</font><br />
                                <button className='btn btn-light' onClick={() => { setShare(share + 1) }}><i class="fa-solid fa-share fa-lg"></i><font className='mx-3'>share</font></button>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Post;
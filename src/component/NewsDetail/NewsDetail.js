import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import './NewDetail.css';

const NewsDetail = () => {
    const {newsId} = useParams();
    const [newsDetail, setNewsDetail] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
        .then(res => res.json())
        .then(data => setNewsDetail(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${newsId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <Box boxShadow={6} className="detailInfo">
            <h2>{newsDetail.title}</h2>
            <p>{newsDetail.body}</p>
            <h1>Comments</h1>
            {
                comments.map(comment => 
                    <div className="comments-container" key = {comment.id}> 
                        <div>
                            <img src="https://iili.io/2Hocrb.th.jpg" alt=""/>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <h3>{comment.name}</h3>
                            <h4 style={{marginLeft:'10px',color:'#303f9f'}}>By:</h4>
                            <p style={{color:'#303f9f'}}>{comment.email}</p>
                            </div>
                            <p><small>{comment.body}</small></p>
                        </div>
                    </div>
                    )
            }
        </Box>
    );
};

export default NewsDetail;
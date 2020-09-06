import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import './NewDetail.css';
import Typography from '@material-ui/core/Typography';

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
            <h1>Post and Comments Details</h1>
            <h2><span>Title:</span> {newsDetail.title}</h2>
            <p><span>Details:</span> {newsDetail.body}</p>
            {
                comments.map(comment => 
                    <div className="comments-container" key = {comment.id}> 
                        <div>
                            <img src="https://iili.io/2Hocrb.th.jpg" alt=""/>
                        </div>
                        <div style={{marginLeft:'20px'}}>
                            <h4>{comment.name}</h4>
                            <p>{comment.email}</p>
                            <p><small>{comment.body}</small></p>
                        </div>
                    </div>
                    )
            }
        </Box>
    );
};

export default NewsDetail;
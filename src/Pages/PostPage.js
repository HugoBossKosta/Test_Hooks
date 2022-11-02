import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from "react";

function Post () {

    const { id } = useParams();
   
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data));
    }, [])

    return (
        <div className="">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
        </div>
    )
}

export default Post;
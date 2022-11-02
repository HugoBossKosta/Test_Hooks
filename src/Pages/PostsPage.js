import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Posts () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
    }, [])


    return (
        <div className="">
            {
                posts.map(key => {
                    return (
                        <>
                        <Link key={key.id} to={`/posts/${key.id}`}>
                            {key.title}
                        </Link>
                        <br />
                        
                        </>
                    )
                
                })
            }
     
        </div>
    )
}

export default Posts;
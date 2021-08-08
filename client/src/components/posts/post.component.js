import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


import Post from './post/post.component'
import useStyles from './post.styles'


const Posts = () =>{
    const posts = useSelector((state)=> state.posts)
    const classes = useStyles()
    console.log(posts);
    return (
        <>
            <h1> Posts </h1>
            <Post />
            <Post />
        </>

    )
}

export default Posts
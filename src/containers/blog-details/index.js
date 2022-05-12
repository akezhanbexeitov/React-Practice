import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function BlogDetails() {
    const params = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res => setBlog(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <p>{blog.title}</p>
                <p>{blog.desc}</p>
            </div>
            
        </>
    )
}

export default BlogDetails
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom'

function Blog(props) {
    const {blog, openModal, index, likeBlog} = props
    return(
            <Card title={ <Link to={`/blogs/${blog.id}`}> {blog.title} </Link> } extra={<a href="#">More</a>} style={{ width: 300, margin: '10px' }}>
                <p>{blog.desc}</p>
                <Button onClick={() => openModal(index)}>Edit</Button>
                <Button onClick={() => likeBlog(index)}>{blog.liked ? 'Unlike' : 'Like'}</Button>
            </Card>
    )   
}

export default Blog
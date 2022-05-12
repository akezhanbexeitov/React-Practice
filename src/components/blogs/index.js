import { Button, Input, Modal } from 'antd'
import { useEffect, useState } from 'react'
import Blog from '../blog'
import axios from 'axios'


function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [blog, setBlog] = useState({title: '', desc: ''})
    const [editIndex, setEditIndex] = useState(null)

    const openModal = i => {
        setIsModalVisible(true)
        if (i != null && i >= 0) {
            setBlog(blogs[i])
            setEditIndex(i)
        }
    }

    const likeBlog = i => {
        const t = [...blogs]
        t[i].liked = !t[i].liked
        setBlogs(t)
    }

    const sortBlogs = type => {
        let sorted = ''
        if (type === 'ascending') {
          sorted = [...blogs].sort((a, b) => (a.title > b.title) ? 1 : -1)
        } else if (type === 'descending') {
          sorted = [...blogs].sort((a, b) => (a.title < b.title) ? 1 : -1)
        } else {
            return
        }
        setBlogs(sorted);
      };

    const blogItems = blogs.map((item, i) => 
    <Blog 
        index={i} 
        key={i} 
        blog={item} 
        openModal={openModal}
        likeBlog={likeBlog}
    />)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => setBlogs(res.data.map((item, i) => {
            return {
                ...item, 
                desc: item.body
            }
        }))).catch(err => console.log(err))
    }, [])

    const handleOk = () => {
        if (editIndex != null && editIndex >= 0) {
            blogs.splice(editIndex, 1, blog)
            setBlogs(blogs)
            setEditIndex(null)
        } else {
            axios.post('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res.data))
        }
        clearBlog()
        handleCancel()
    }

    const clearBlog = () => {
        setBlog({title: '', desc: ''})
    }
    
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleChange = e => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const searchName = e => {
        let searchBlogs = blogs.filter((item) => item.title.includes(e.target.value))
        setBlogs(searchBlogs)
      }


    return (
        <>
            <Button onClick={openModal} style={{margin: '30px 40px 0 40px'}} type='primary'>Add blog</Button>

            <select onChange={e => sortBlogs(e.target.value)} style={{padding: '5px 10px'}}>
                <option>Sort</option>
                <option value='ascending'>A-Z</option>
                <option value='descending'>Z-A</option>
            </select> 

            <input onChange={e => searchName(e)} style={{ marginLeft: '40px' }} placeholder='Search for...'/>

            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '40px auto', padding: '20px'}}>
                {blogItems}
            </div> 
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
               <Input value={blog.title} name="title" onChange={handleChange} style={{marginBottom: '20px'}} placeholder="Title"/>
               <Input value={blog.desc} name="desc" onChange={handleChange} placeholder='Description'/>
            </Modal>   
        </>   
 )
}

export default Blogs
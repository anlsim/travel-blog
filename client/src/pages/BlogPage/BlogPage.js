import {useEffect, useState} from 'react';
import axios from "axios";
import Hero from '../../components/Hero/Hero';
import PostList from '../../components/PostList/PostList';
import './BlogPage.scss'

export default function BlogPage() {
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPost = async ()=> {
            const res = await axios.get("api/posts");
            setPosts(res.data);
        }
        fetchPost();
    }, [])
    
    return (
    <>
        <Hero title = {'Updates'}/>
        <div className="blogs">
            <PostList updates = {posts.reverse()}/>
        </div>
    
    </>
    )
}



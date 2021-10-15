import {useEffect, useState} from 'react';
import axios from "axios";
import './Post.scss';
import PostList from "../PostList/PostList"
import NotFoundPage from "../../pages/ErrorsPage/NotFoundPage"
import AddComment from '../AddComment/AddComment';
import CommentsList from '../CommentsList/CommentsList';
import PhotoList from '../PhotosList/PhotosList'


const Post = ({ match }) => {
    const[loading, setloading] = useState(true);
    const[posts, setPosts] = useState([]);
    const[comments, setComments] = useState([]);
    const[photos, setphotos] = useState([]);
    const fetchData = async () =>{
        const postsApi = await axios.get("/api/posts");
        const commentensApi = await axios.get('/api/comments')
        const photosApi = await axios.get('/api/gallery')

        axios.all([postsApi, commentensApi, photosApi]).then(axios.spread((...allData) =>{
            const allPost = allData[0].data;
            const allComments = allData[1].data;
            const allPhotos = allData[2].data;
            setloading(false);
            setPosts(allPost)
            setComments(allComments); 
            setphotos(allPhotos);  
        }))
    }
    useEffect(()=>{
        fetchData()
    }, []);

    if(loading) return <h4>Loading post...</h4>
    window.scrollTo(0, 0);
    const updateId = match.params.updateId;
    const update = posts.find(update => update._id === updateId);

    const filterComments = comments.filter(c =>  c.postId === update._id);
    const filterPhotos = photos.filter(p =>  p.postId === update._id);
    
    if (!update) return <NotFoundPage />
    const otherUpdates = posts.filter(update => update._id !== updateId);
    
    return (
        <>
        
        <div className="postContainer">
            <div className="postContainer__postDiv">
                <div  className="postContainer__postDiv__header">
                    <h1 className="postContainer__header-title">{update.title}</h1>
                    <p className="postContainer__header-date">{new Date(update.createdAt).toDateString()}</p>
                </div>
                <p className="postContainer__postDiv__postDescription" dangerouslySetInnerHTML={ {__html: update.content}}></p>
        
                <PhotoList photos={filterPhotos}/>
              

            
                {
                    update.video !== "" &&  
                <div className="videoDiv">   
                        <iframe 
                            width="560"
                            height="315"
                            src={update.video}
                            title="YouTube video player" 
                            
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        >
                        </iframe>
                </div>
                }
                <div className="postContainer-postDiv-commentForm">
                    <AddComment post_Id={updateId}/>
                </div>
                <div>
                    <CommentsList comments={filterComments}/>
                </div>
            </div>
            
            <div className="col postContainer__updateList">
                <h3>Other Updates:</h3>
                <PostList updates = {otherUpdates.reverse().slice(0,6)} />
                
            </div>
        </div>    
        </>
    );
}

export default Post;
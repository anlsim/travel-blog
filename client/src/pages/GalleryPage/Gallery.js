import {useEffect, useState} from 'react';
import axios from "axios";
import Hero from '../../components/Hero/Hero';
import GalleryGrid from 'react-grid-gallery';
import './Gallery.scss';

export default function Gallery() {
    const[photos, setphotos] = useState([]);
    const[loading, setloading] = useState(true);
    useEffect(()=>{
        const fetchPost = async ()=> {
            const res = await axios.get("/api/gallery");
            setphotos(res.data);
            setloading(false);    
        }
        fetchPost();
    }, [])
    if(loading) return <h4>Loading gallery...</h4>
    return (
        <>
            <Hero title={'Gallery'}/>
            <div className="galleryContainer">
            <GalleryGrid images={photos.reverse()} margin={10} rowHeight={200} enableImageSelection={false}/>
            </div>
        </>

    )
}

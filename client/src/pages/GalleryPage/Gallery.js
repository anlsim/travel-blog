import { useEffect, useState } from 'react'
import axios from 'axios'
import Hero from '../../components/Hero/Hero'
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.scss'

export default function GalleryPage() {
  const [photos, setphotos] = useState([])
  const [loading, setloading] = useState(true)
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get('/api/gallery')
      setphotos(res.data)
      setloading(false)
    }
    fetchPost()
  }, [])

  if (loading) return <h4>Loading gallery...</h4>
  const slides = photos.map(({ src}) => ({
    src: src,
  }))

  return (
    <>
      <Hero title={'Gallery'} />
      <div className='galleryContainer'>
        <Gallery
          images={photos.reverse()}
          margin={10}
          rowHeight={200}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
      />
      </div>
    </>
  )
}

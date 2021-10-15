import React from 'react'
import './PhotosList.scss'

export default function photosList({ photos }) {
    return (
        <>
        { photos.map((p, key) => (
            <>
                <img key={key} className="postContainer__postDiv__postImage" src={p.src} alt={key}></img>
                <p>{p.caption}</p>
            </>
            ))
        }
        </>
    )
}

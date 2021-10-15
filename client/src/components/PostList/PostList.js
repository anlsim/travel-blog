import React from 'react';
import {Link } from 'react-router-dom';
import "./PostList.scss";

export default function PostList({updates}) {
    
    return (
        <>
        {updates &&
        <div className="card-columns"> 
           
            {updates.map((update, key)=>(
                    <Link key={key} to = {`/post/${update._id}`}>
                    <div className="card" >
                        <img src={update.imgUrl} className="card-img-top" alt="..."></img>
                        <div className="card-img-overlay">
                            <div className="bottom">
                                <p className="card-text"><small>{new Date(update.createdAt).toDateString()}</small></p> 
                                <h3 className="card-title">{update.title}</h3>
                            </div>
                        </div>
                    </div> 
                    </Link>  
                ))
            }
        </div>
        }
        </>
   
  
    )
}

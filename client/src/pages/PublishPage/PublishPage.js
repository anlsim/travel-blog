import { useState, useContext } from "react"
import axios from "axios"
import "./PublishPage.scss"
import { Context } from "../../context/Contex"

export default function PublishPage() {
  const [photoData, setPhotoData] = useState({
    src: "",
    thumbnail: "",
    caption: "",
    postId: "",
  })

  const { user } = useContext(Context)
  const [postData, setPostData] = useState({
    userId: user.email,
    title: "",
    city: "",
    state: "",
    imgUrl: "",
    video: "",
    content: "",
  })

  const handlePublish = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("api/posts", postData)
      window.location.replace("/post/" + res.data._id)
    } catch (err) {
      console.log(err)
    }
  }

  const handlePhotos = async (e) => {
    e.preventDefault()
    try {
      await axios.post("api/gallery", photoData)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="publishMain">
      <div className="publishMain-form">
        <span className="formTitle">Publish a Post</span>
        <form className="mainForm" onSubmit={handlePublish}>
          <input
            className="mainForm-input"
            type="text"
            placeholder="Post Title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="City"
            onChange={(e) => setPostData({ ...postData, city: e.target.value })}
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="State"
            onChange={(e) =>
              setPostData({ ...postData, state: e.target.value })
            }
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="Photo Cover"
            onChange={(e) =>
              setPostData({ ...postData, imgUrl: e.target.value })
            }
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="Video"
            onChange={(e) =>
              setPostData({ ...postData, video: e.target.value })
            }
          />
          <textarea
            className="mainForm-input"
            placeholder="Write your text here..."
            type="text"
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
          ></textarea>
          <button className="mainForm-button" type="submit">
            Publish your post!
          </button>
        </form>
      </div>
      <div className="publishMain-form">
        <span className="formTitle">Publish a Photo</span>
        <form className="mainForm" onSubmit={handlePhotos}>
          <input
            className="mainForm-input"
            type="text"
            placeholder="Source of picture"
            onChange={(e) =>
              setPhotoData({ ...photoData, src: e.target.value })
            }
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="Thumbnail"
            onChange={(e) =>
              setPhotoData({ ...photoData, thumbnail: e.target.value })
            }
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="Caption"
            onChange={(e) =>
              setPhotoData({ ...photoData, caption: e.target.value })
            }
          />
          <input
            className="mainForm-input"
            type="text"
            placeholder="Post Id"
            onChange={(e) =>
              setPhotoData({ ...photoData, postId: e.target.value })
            }
          />
          <button className="mainForm-button" type="submit">
            Publish your Picture to gallery!
          </button>
        </form>
      </div>
    </div>
  )
}

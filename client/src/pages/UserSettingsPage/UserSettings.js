import { useContext, useState } from "react"
import "./UserSettings.scss"
import { Context } from "../../context/Contex"
import axios from "axios"

export default function UserSettings({ props }) {
  const { user, dispatch } = useContext(Context)
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    var updatedPassword = document.getElementById("updatedPassword").value
    var confirmPassword = document.getElementById("confirmPassword").value
    if (updatedPassword !== confirmPassword) {
      alert("Passwords do not match.")
      return false
    } else {
      dispatch({ type: "UPDATE_START" })
      const updatedUser = {
        userId: user._id,
        password,
      }
      try {
        const res = await axios.put("api/users/" + user._id, updatedUser)
        setSuccess(true)
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        setTimeout(() => {
          window.location = "/"
        }, 3000)
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" })
      }
    }
  }

  return (
    <>
      <div className="settings">
        <h2>Account Settings</h2>
        <form className="mainForm" onSubmit={handleSubmit}>
          <h3>Hola {user.firstName},</h3>
          <h3>Update Your Password Here</h3>
          <input
            className="mainForm-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            id="updatedPassword"
          />
          <input
            className="mainForm-input"
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
          />
          <button className="mainForm-button" type="submit">
            Update Password
          </button>
          {success && (
            <>
              <br />
              <span className="settings-form-success">
                Your password has been updated!
              </span>
            </>
          )}
        </form>
      </div>
    </>
  )
}

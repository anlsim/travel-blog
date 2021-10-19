import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Contex"
import "./NavBar.scss"
import { MenuItems } from "./MenuItems"
import SideBar from "../SideNav/SideBar"

export default function NavBar() {
  const { user, dispatch } = useContext(Context)
  const [clicked, setClicked] = useState(false)
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" })
  }
  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
      <nav className="navBar">
        <Link className="navBar__logo" to="/">
          Travel Blog
        </Link>
        <div className="navBar__icon" onClick={handleClicked}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <SideBar clicked={clicked} handleClicked={handleClicked}></SideBar>
        <ul className="navBar__menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName} title={item.title}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            )
          })}

          {user && (
            <>
              {user.admin && (
                <li className="navBar__menu__links nav-item">
                  <Link to="/publish">PUBLISH</Link>
                </li>
              )}
              <div className="navBar__settings">
                <li className="navBar__menu__links nav-item" title="SETTINGS">
                  <Link to="/settings">
                    {" "}
                    <i className="far fa-user-circle"></i> Settings
                  </Link>
                </li>
                <li
                  className="navBar__menu__links nav-item"
                  onClick={handleLogOut}
                >
                  <Link to="/">{user && "Log Out"}</Link>
                </li>
              </div>
            </>
          )}
        </ul>
      </nav>
  )
}

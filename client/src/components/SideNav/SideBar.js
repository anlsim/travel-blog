import {useContext}from 'react'
import {MenuItems} from '../NavBar/MenuItems';
import {Link} from 'react-router-dom';
import {Context} from "../../context/Contex";
import "./SideBar.scss";

export default function SideBar({clicked, handleClicked}) {
  const {user, dispatch } = useContext(Context);

  const handleLogOut = () => {
    dispatch({type: "LOGOUT"});
  };

    return (
        <>
        {
        clicked && 
        
        <ul className='sideBar__menu active'> 
          {
            MenuItems.map((item, index) => {
              return(
                <li key={index}>
                  <Link className={item.cName} to={item.url} onClick={handleClicked}>{item.title}</Link>
                </li>
              )  
            })
          }     
         
          { user && 
          <>
            {user.admin &&
            <li>
                <Link className="sideBar__menu__links nav-item" to="/publish" onClick={handleClicked}>PUBLISH</Link>
            </li>
            }
            <hr/>
            <div className="sideBar__settings">
              <li>
                    <Link  to="/settings" onClick={handleClicked}> <i className="far fa-user-circle" ></i>Settings</Link>
              </li>
              <li  onClick={handleLogOut}>
                <Link className="sideBar__menu__links nav-item" to="/" onClick={handleClicked}>{user && "LOGOUT"}</Link>        
              </li>
           
            </div>
          </>
            
          }
          </ul>
        }
        </>
    )
}

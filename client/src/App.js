import { useContext} from 'react';
import {
  Route, Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogPage from './pages/BlogPage/BlogPage';
import Post from './components/Post/Post'
import NavBar from './components/NavBar/NavBar';
import NotFoundPage from './pages/ErrorsPage/NotFoundPage';
import GalleryPage from './pages/GalleryPage/Gallery';
import MapPage from './pages/MapPage/MapPage';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import Publish from './pages/PublishPage/PublishPage';
import UserSettings from './pages/UserSettingsPage/UserSettings';
import ForgotPassword from './pages/LoginPage/ForgotPassword';


import {Context } from "./context/Contex";

function App () {
    const {user} = useContext(Context);
    return (
        <div className="App">
          <NavBar />
          <div>
            <Switch>
                <Route path="/" component={user ? HomePage : Login} exact/>
                <Route path="/about" component={user ? AboutPage : Login} />
                <Route path="/updates" component={user ? BlogPage : Login} />
                <Route path="/gallery" component={user ? GalleryPage : Login} />
                <Route path="/post/:updateId" component={user ? Post : Login} />
                <Route path="/login" component={user ? HomePage : Login} />
                <Route path="/resetPassword" component={user ? HomePage : ForgotPassword} />
                <Route path="/register" component={user ? HomePage : Register} />
                <Route path="/map" component={user ? MapPage : Login} />
                <Route path="/publish" component={user ? Publish : Login} />
                <Route path="/settings" component={user ? UserSettings : Login} />
                <Route component={NotFoundPage} />
            </Switch>
        
        </div>
      </div>
      
    );
  }



export default App;


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AboutUs from "./intro/AboutUs";
import Blogs from "./admin/Blogs";
import Write from "./admin/Write";
import Post1 from "./admin/Post1"
import Post2 from "./admin/Post2";
import Post3 from "./admin/Post3"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Notification from './admin/Notification'
import Profile from "./admin/Profile";
import Setting from "./admin/Setting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element = {<AboutUs/>} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post1" element={<Post1 />} />
          <Route path="post2" element={<Post2 />} />
          <Route path="post3" element={<Post3 />} />
          <Route path="write" element={<Write />} />
          <Route path="notification" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          

        </Route>
        
      </Routes>
    <Footer/>
      
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AddAdmin from './Pages/Dashboard/Admin/AddAdmin/AddAdmin';
import AddBlog from './Pages/Dashboard/Admin/AddBlog/AddBlog';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import BlogDetails from './Pages/Home/Blogs/BlogDetails/BlogDetails';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogDetails/:blogId" element={<BlogDetails></BlogDetails>}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path={`/dashboard/addBlog`} element={<AddBlog/>}>
              </Route>
              <Route path={`/dashboard/addAdmin`} element={<AddAdmin /> }>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

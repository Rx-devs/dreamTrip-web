// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Authentication/Register/Register';
import AddAdmin from './Pages/Dashboard/Admin/AddAdmin/AddAdmin';
import AddBlog from './Pages/Dashboard/Admin/AddBlog/AddBlog';
import ManageBlogs from './Pages/Dashboard/Admin/ManageBlogs/ManageBlogs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import CreateBlog from './Pages/Dashboard/User/CreateBlog/CreateBlog';
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
            <Route path="/blogDetails/:blogId" element={<PrivateRoute> <BlogDetails /> </PrivateRoute>}></Route>
            <Route path="/dashboard" element={<PrivateRoute>  <Dashboard/> </PrivateRoute>}>
              <Route path={`/dashboard/addBlog`} element={<AdminRoute> <AddBlog /></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addAdmin`} element={<AdminRoute> <AddAdmin/> </AdminRoute>}>
              </Route>
              <Route path={`/dashboard/manageBlogs`} element={<AdminRoute><ManageBlogs/></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/createBlog`} element={<PrivateRoute><CreateBlog/></PrivateRoute>}>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;

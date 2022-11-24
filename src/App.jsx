import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AdminRoute from './features/ProtectedRoutes/AdminRoute';
import PrivateRoute from './features/ProtectedRoutes/PrivateRoute';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import BlogDetails from './pages/Blogs/BlogDetails';
import Dashboard from './pages/Dashboard';
import AddAdmin from './pages/Dashboard/Admin/AddAdmin';
import AddBlog from './pages/Dashboard/Admin/AddBlog';
import ManageBlogs from './pages/Dashboard/Admin/ManageBlogs';
import CreateBlog from './pages/Dashboard/User/CreateBlog';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <ParallaxProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blogDetails/:blogId" element={<PrivateRoute> <BlogDetails /> </PrivateRoute>}></Route>
              <Route path="/dashboard" element={<PrivateRoute>  <Dashboard /> </PrivateRoute>}>
                <Route path={`/dashboard/addBlog`} element={<AdminRoute> <AddBlog /></AdminRoute>}>
                </Route>
                <Route path={`/dashboard/addAdmin`} element={<AdminRoute> <AddAdmin /> </AdminRoute>}>
                </Route>
                <Route path={`/dashboard/manageBlogs`} element={<AdminRoute><ManageBlogs /></AdminRoute>}>
                </Route>
                <Route path={`/dashboard/createBlog`} element={<PrivateRoute><CreateBlog /></PrivateRoute>}>
                </Route>
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </ParallaxProvider>
    </div>
  );
};

export default App;

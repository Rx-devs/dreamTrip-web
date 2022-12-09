import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Preloader from './components/Preloader';
import Home from './pages/Home';
// const Home = lazy(() => import('./pages/Home'));
const AuthProvider = lazy(() => import('./context/AuthProvider'));
const PrivateRoute = lazy(() => import('./features/ProtectedRoutes/PrivateRoute'));
const AdminRoute = lazy(() => import('./features/ProtectedRoutes/AdminRoute'));
const Login = lazy(() => import('./pages/Authentication/Login'));
const Register = lazy(() => import('./pages/Authentication/Register'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blogs = lazy(() => import('./pages/Blogs'));
const About = lazy(() => import('./pages/About'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AddAdmin = lazy(() => import('./pages/Dashboard/Admin/AddAdmin'));
const CreateBlog = lazy(() => import('./pages/Dashboard/User/CreateBlog'));
const ManageBlogs = lazy(() => import('./pages/Dashboard/Admin/ManageBlogs'));
const AddBlog = lazy(() => import('./pages/Dashboard/Admin/AddBlog'));

function App() {
  return (
    <>
      <ParallaxProvider>
        <AuthProvider>
          <Router>
            <Suspense fallback={<Preloader/>}>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blogDetails/:blogId" element={<BlogDetails />}></Route>
              {/* <Route path="/blogDetails/:blogId" element={<PrivateRoute> <BlogDetails /> </PrivateRoute>}></Route> */}
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
          </Suspense>
          </Router>
        </AuthProvider>
      </ParallaxProvider>
    </>
  );
};

export default App;

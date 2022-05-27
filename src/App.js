import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import UpdateProfile from './pages/Dashboard/UpdateProfile';
import AllReviews from './pages/Home/AllReviews/AllReviews';
import Home from './pages/Home/Home';
import Items from './pages/Home/Items/Items';
import Purchase from './pages/Home/Purchase/Purchase';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp/SignUp';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Footer from './pages/shared/Footer';
import NotFound from './pages/shared/NotFound';
import TopNav from './pages/shared/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/allreviews' element={<AllReviews></AllReviews>}></Route>
        <Route path='/developer' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/items' element={
          <RequireAuth>
            <Items></Items>
          </RequireAuth>
        }></Route>
        <Route path='/profile' element={
          <RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>
        }></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='updateprofile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
        </Route>



        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;

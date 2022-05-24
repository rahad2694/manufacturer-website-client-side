import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
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



        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Toaster />
      <Footer></Footer>
    </div>
  );
}

export default App;

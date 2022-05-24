import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blogs/Blog';
import Home from './pages/Home';
import NotFound from './pages/shared/NotFound';
import TopNav from './pages/shared/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>



        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;

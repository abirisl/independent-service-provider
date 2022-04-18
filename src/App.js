import './App.css';
import Header from './page/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home/Home';
import About from './page/About/About';
import Login from './page/Login/Login';
import Regiter from './page/Register/Regiter';
import NotFound from './page/No found/NotFound';
import Chackout from './page/ChackOut/Chackout';
import Services from './page/Services/Services/Services';
import RequireAuth from './page/RequireAuth/RequireAuth';
import Blogs from './page/Blogs/Blogs';
import Footer from './page/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Regiter></Regiter>}></Route>
        <Route path='service/:serviceId' element={<Chackout></Chackout>}></Route>
        <Route path='/chackout' element={
          <RequireAuth>
          <Chackout></Chackout>
        </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;

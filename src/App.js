import './App.css';
import { useSelector } from 'react-redux';
import {selectUser} from "./features/userSlice";
import Navbar from '../src/components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Pacotes from './pages/Pacotes';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Login from './components/Login';
import Logout from './components/Logout';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  const user  = useSelector(selectUser);
 
  return(
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route  path='/' exact element={<Home />} />
      <Route  path='/home' element={<Home />} />
      <Route  path='/login' element={user?<Logout /> :<Login />} />
        {/* {user?<Logout /> :<Login />} */}
        <Route  path='/pacotes' element={<Pacotes />} />
        <Route  path='/sobre' element={<Sobre />} />
        <Route  path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
      </Router> 
    </div>
  );
}

export default App;

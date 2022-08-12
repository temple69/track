import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Tracking from './Components/Pages/Tracking';

function App() {
  return (
    <>
      <Navigation/>
      <main>
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/tracking" element={<Tracking/>}/>
      </Routes>  
  
      </main>
      <footer>
        <Footer/>
        
      </footer>
      
      
    </>
  );
}

export default App;

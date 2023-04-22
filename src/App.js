import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <AboutUs />
        
    </div>
  );
}

export default App;

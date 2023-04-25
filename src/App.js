import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <AboutUs />
        <Login />
        <Footer />
    </div>
  );
}

export default App;

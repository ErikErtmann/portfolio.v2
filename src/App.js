import './App.css';
import Particle from './components/global/Particle';
import NavigationBar from './components/global/NavigationBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';



function App() {
  return (
    <div>
      
        <NavigationBar/>
        <Particle/>
      
      <div className='padding'>
        
        <a className='block' id="home"><HomePage/></a>
        <a className='block' id="about"><About/></a>
        <a className='block' id="resume"><Resume/></a>
        <a className='block' id="contact"><Contact/></a>
      </div>
      
    </div>
  );
}

export default App;

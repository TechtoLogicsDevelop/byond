import './App.css';
import Footer from './Footer/Footer';
import Mainpage from './Main/Mainpage';
import Nav from './Nav/Nav';
import Slider from './Slider/slider'
import {motion} from 'framer-motion'

function App() {

  return (
    <motion.div className="app"
    >
      <Nav />
     <Slider /> 
      <Mainpage />
      <Footer />
      
    </motion.div>
  );
}

export default App;




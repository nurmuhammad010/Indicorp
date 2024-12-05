import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from "./Components/Card/Card";
import Explore from './Components/Explore/Explore';
import Icon from './Components/3IconType/Icon';
import Meet from './Components/Meet/Meet';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Explore/>
      <Icon/>
      <Meet/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

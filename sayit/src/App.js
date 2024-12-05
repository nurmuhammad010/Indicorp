
import './App.css';
import Card from './copanentes/card/Card';
import Navbar from './copanentes/navbar/Navbar';
import Preactica from './copanentes/Preactica/Preactica';
import Providing from './copanentes/providing/Providing';
import Bus_icon from './copanentes/bus_icon/Bus_icon';
import Touch from './copanentes/Get_in_touch/Touch';
import Footer from './copanentes/Footer/Footer';

function App() {
  return (
    <div className="App">
 <Navbar />
 <Card />
 <Preactica />
 <Providing />
 <Bus_icon /> 
 <Touch />
 <Footer />   
 </div>
  );
}

export default App;

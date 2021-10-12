import './mystyles.css';
import Pannel from './Pannel'

function App() {
  return (
    <div className="App grid-container">
     <Pannel name="ventiliatorius" device="vent"/>
     <Pannel name="lempa" device="lamp"/>
     <Pannel name="pumpa" device="pump"/>
    </div>
  );
}

export default App;

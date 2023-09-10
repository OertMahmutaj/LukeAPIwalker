import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';
import Character from './components/Character';
import Planet from './components/Planet';
import Starship from './components/Starship';
import Vehicle from './components/Vehicle';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Dropdown />
      </div>
      <Routes>
        <Route path="/people/:id" element={<Character />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path='starships/:id' element={<Starship />} />
        <Route path='vehicles/:id' element={<Vehicle />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

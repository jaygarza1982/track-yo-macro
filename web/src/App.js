import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import NavContainer from './components/NavButtons/NavContainer';
import Consumed from './components/Consumed/Consumed';

function App() {
  return (
    <Router>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/consumed' element={<Consumed />} />
        </Routes>
      </div>
      <NavContainer />
    </Router>
  );
}

export default App;

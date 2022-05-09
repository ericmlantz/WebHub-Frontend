import './style/App.css';
import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Interests from './pages/Interests'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/interests" element={<Interests />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

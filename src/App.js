import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Todos from './pages/Todos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/todos">Todos</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        <h1>Zillionaire Tech – Mission Control</h1>

        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

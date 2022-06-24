import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.css';

function App() {


  return (
    <div className='container'>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

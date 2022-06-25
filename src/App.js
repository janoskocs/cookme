import Nav from './components/Nav';
import Home from './components/Home';
import Create from './components/Create';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles/main.css';

function App() {


  return (
    <div className='container'>

      <Router>
        <Nav />{/* Nav needs to be inside of router so links will work. Nav will be rendered on each page.*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

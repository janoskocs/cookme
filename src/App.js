import Nav from './components/Nav';
import Home from './components/Home';
import Create from './components/Create';
import About from './components/About';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
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
          <Route path="/blogs/:id" element={<BlogDetails />} /> {/*Router params*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:Id" element={<>Hello /about</>} />
        </Routes>
    </Router>
  )
}

export default App

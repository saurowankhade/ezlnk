import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/:Id" element={<>Hello /about</>} />
        </Routes>
    </Router>
  )
}

export default App

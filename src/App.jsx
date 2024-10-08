import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/contents/Portfolio";
import Contact from "./components/pages/contents/Contact";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<h1>qwerty</h1>}/>
      </Routes>
    </Router>
  )
}

export default App

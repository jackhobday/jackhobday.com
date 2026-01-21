import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Landing from './components/Landing'
import Footy from './components/Footy'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/footy" element={<Footy />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App


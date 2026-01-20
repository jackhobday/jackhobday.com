import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Landing from './components/Landing'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Landing />
      </div>
    </ThemeProvider>
  )
}

export default App


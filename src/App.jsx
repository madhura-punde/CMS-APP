import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ComplaintForm from './components/ComplaintForm/ComplaintForm'
import ComplainantDetails from './components/ComplainantDetails/ComplainantDetails'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-content">     
          <Routes>
            <Route path="/" element={<ComplaintForm />} />
            <Route path="/complainant-details" element={<ComplainantDetails />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

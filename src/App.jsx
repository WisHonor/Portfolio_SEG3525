import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import PhysioNova from './physionova/PhysioNova'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
      <Route path="/physionova" element={<PhysioNova />} />
    </Routes>
  )
}

export default App

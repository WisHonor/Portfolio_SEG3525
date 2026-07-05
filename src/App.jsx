import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import PhysioNova from './physionova/PhysioNova'
import MemoVague from './memovague/MemoVague'
import NordStyle from './nordstyle/NordStyle'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
      <Route path="/physionova" element={<PhysioNova />} />
      <Route path="/memovague" element={<MemoVague />} />
      <Route path="/nordstyle/*" element={<NordStyle />} />
    </Routes>
  )
}

export default App

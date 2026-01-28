import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Savoirfaire from './pages/Savoirfaire'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/savoir-faire" element={<Savoirfaire />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
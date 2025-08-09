import { Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Audio from './page/programas/audio'
import Meditaciones from './page/programas/meditaciones'
import Eventos from './page/programas/eventos'
import Foro from './page/foro'
import Contacto from './page/contacto'
import LoginRegister from './page/loginRegister'
import FilosofiaPage from './page/filosofiapage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acceso" element={<LoginRegister />} />
      <Route path="/page/programas/audio" element={<Audio />} />
      <Route path="/page/programas/meditaciones" element={<Meditaciones />} />
      <Route path="/page/programas/eventos" element={<Eventos />} />
      <Route path="/page/foro" element={<Foro />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/page/loginRegister" element={<LoginRegister />} />
      <Route path="/filosofia" element={<FilosofiaPage />} />
      <Route path="/programas/audio" element={<Audio />} />
      <Route path="/programas/meditaciones" element={<Meditaciones />} />
      <Route path="/programas/eventos" element={<Eventos />} />
      
      

    </Routes>
  )
}

export default App

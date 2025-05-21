import { Routes, Route } from 'react-router-dom'
import ClickUpLogin from './pages/ClickUpLogin'
import Signup from './pages/Signup'
import OAuth from './pages/oauth'
import Mian from './pages/Mian'
import PrivateRoute from './pages/ProtectedRoute'


function App() {
  return (
    <Routes>
      <Route path="/login" element={<ClickUpLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/oauth-success" element={<OAuth />} />
      <Route path="/" element={<PrivateRoute>
              <Mian />
            </PrivateRoute>} />
    </Routes>
  )
}

export default App

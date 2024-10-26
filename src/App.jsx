import { useState } from 'react'
import LoginForm from './components/login'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='app'>
<Routes>
<Route path="/login" element={<LoginForm
        user={user} assignUser = {assignUser} />} />
        
</Routes>
</div>
  )
}
export default App

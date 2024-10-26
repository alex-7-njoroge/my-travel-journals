import { useState } from 'react'
import LoginForm from './components/login'
import RegistrationForm from './components/RegistrationForm'
import { Link ,Route,Routes} from 'react-router-dom'

function App() {
  const [user,setUser]=useState({})
  function assignUser(newUser){
    setUser(newUser)
    console.log(user)
  }
  

  return (
<div className='app'>
<Routes>
<Route path="/register" element={<RegistrationForm />} />
<Route path="/login" element={<LoginForm
        user={user} assignUser = {assignUser} />} />
        
</Routes>

</div>
  )
}
export default App

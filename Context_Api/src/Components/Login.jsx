import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
     <h2>Login</h2>
     <input type='text'
     className='bg-slate-200 text-black mr-2'
     value={username}
     onChange={(e) => setUserName(e.target.value)}
     placeholder='username'/>
     <input type='password' 
     className='bg-slate-200 text-black mr-2'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     placeholder='password'/>
     <button className='bg-white text-black p-2' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
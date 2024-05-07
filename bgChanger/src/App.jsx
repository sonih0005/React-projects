
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
  <>
   <div className=' w-[100vw] h-[100vh]' style={{backgroundColor: color}}>
    <div className='bg-black text-white flex p-3 justify-evenly'>
      <button 
      onClick={()=> setColor("red")}
      className=' bg-red-600 px-6 py-4 rounded '>red</button>
      <button onClick={()=> setColor("green")} className=' bg-green-500 px-6 py-4 rounded '>green</button>
      <button onClick={() => setColor("blue")} className=' bg-blue-400 px-6 py-4 rounded '>Blue</button>
      <button onClick={()=> setColor("pink")} className=' bg-pink-500 px-6 py-4 rounded '>Pink</button>
    </div>
   </div>
  </>
  )
}

export default App

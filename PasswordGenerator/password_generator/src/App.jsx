import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef  = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed){
      str += "0123456789";
    }
    if(charactersAllowed){
      str += "!@#$%^&*";
    }

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass); 

  }, [length, numbersAllowed, charactersAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(
    ()=> {
      passwordGenerator()
    }
    ,[length, numbersAllowed, charactersAllowed, passwordGenerator])
  return (
  <>
 <div>
 <input type="text" placeholder='password' readOnly className=' bg-white py-4 px-12 rounded-l'
 value={password}
 ref={passwordRef}
 />
   <button className='text-white bg-blue-500 py-4 px-8 rounded-r hover:bg-blue-800'
   onClick={copyPasswordToClipboard}
   >Copy</button>
 </div>

 <div className='flex items-center justify-center gap-2 mt-4'>
  <input type="range" 
  min={6}
  max={50}
  value={length}
  onChange={(e) => setLength(e.target.value)}
  />
  <label className='text-white'>Length:({length})</label>
  <input type="checkbox" 
  defaultChecked = {numbersAllowed}
  onChange={()=> {
    setNumbersAllowed(prev => !prev)
  }}
  />
  <label className='text-white'>Numbers</label>
  <input type="checkbox" 
  defaultChecked={charactersAllowed}
  onChange={ ()=> {
    setCharactersAllowed(prev => !prev)
  }}
  />
  <label className='text-white'>Characters</label>
 </div>

 {/* <div>
  <button className='bg-white text-black' onClick={passwordGenerator}>generate</button>
 </div> */}
  </>
 
  )
}

export default App

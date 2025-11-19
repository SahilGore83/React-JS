import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength]= useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setcharAllowed]= useState(false);
  const [Password, setPassword]= useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length +1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  } , [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 hover:bg-gray-600'

          >copy</button>
        </div>
        <div className='flex text -sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prevNum)=>!prevNum)
            }} 
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setcharAllowed((prevChar)=>!prevChar)
            }} 
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

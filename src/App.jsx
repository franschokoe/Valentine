import { useEffect } from 'react'
import { Decision } from './componets/decisionpage'
import NamePopup from './componets/namepopup'


function App() {

  // useEffect(()=>{
    
  //   yourname = window.prompt("Enter Your name")
  // },[])
  
  return (
    <><NamePopup/>
      <Decision/>
    </>
  )
}

export default App

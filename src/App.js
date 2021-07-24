import React from 'react'
import HomeScreen from './Components/HomeScreen'

const App = () => {

const quizStart = () =>{
  alert("this button is clicked")

}


  return (
    <>
  <HomeScreen
  quiz={quizStart}
   />
 
    </>
  )
}

export default App

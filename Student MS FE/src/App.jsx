import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Footer from './component/footer'
import ListStudent from './component/listStudentComponent'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import StudentComponent from './component/StudentComponent'
import SchoolGirl from '/school-girl.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
     
     <BrowserRouter>
     <Header/>

     <div className='row'>
      <div className='col-3'>
     <img className='homeimg' src={SchoolGirl} alt="Student" />
     </div>
     <div className='col-9'>

     
        <Routes>
            <Route path='/' element =  { <ListStudent/> } ></Route>
            <Route path='/Student' element = { <ListStudent/>}></Route>
            <Route path='/add-student' element = { <StudentComponent/>}></Route>  
        </Routes>
        </div>
     </div>
     <Footer/>     
     </BrowserRouter>
     </div>
    </>
  )
}

export default App

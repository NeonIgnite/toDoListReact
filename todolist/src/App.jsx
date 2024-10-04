import { useState } from 'react';
import ToDoList from './components/ToDoList';


import './App.css'

function App() {
  
  return (
    <>
      
      <div className="container col-12 d-flex flex-column py-5 justify-content-center align-items-center">

            <div className="wrapper col-8 text-center border rounded p-1">
                <h1 className='text-light bg-dark'>TO DO LIST</h1>
                <ToDoList/>
            </div>
      </div>
      
    </>
  )
}

export default App

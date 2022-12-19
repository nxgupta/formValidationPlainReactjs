import React from 'react'
import { useState } from 'react'
import FormInput from './components/FormInput'
import { inputData } from './components/inputData'
import './App.css'
const App = () => {
    let initialValues={
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmpassword:""
    }

    const [user,setUser]=useState(initialValues)
    const [elements,addElements]=useState([])

    const onChange=(e)=>setUser({...user, [e.target.name]:e.target.value})

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(elements.length===inputData.length){
            console.log(user)
        }
        else{
            alert('Please fill all the fields')
        }

    }
    const concatElements=(element)=>{
        addElements(elements.concat(element))
    }

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputData.map(data=>(<FormInput key={data.id} {...data} onChange={onChange} user={user} concatElements={concatElements}/>))}
                <button>Submit</button>
            </form> 
        </div>
    )
}

export default App

import React from 'react'
import { useState } from 'react'
import './formInput.css'
const FormInput = ({placeholder,label,type,name,onChange,user,concatElements}) => {

    const [Error, setError] = useState({
        error: false,
        message: null
    })

    const handleBlur = (e) => {
        let value = e.target.value.trim();
        if (value == "") {
            setError({ error: true, message: `${e.target.placeholder} is required!` })
            return;
        }
        let usernameReg = /^[A-Za-z0-9]{3,16}$/
        let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let passwordReg=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

        switch (e.target.name) {
            case 'username': if (!usernameReg.test(value)) {
                setError({ error: true, message: "Username can contain letters and numbers only & must be between 3-16 characters" })
            }
            else{
            concatElements(e.target.name)
            }
                break;
            case 'email': if (!emailReg.test(value)) {
                    setError({ error: true, message: "Please provide a valid email address" })
            }
            else{
            concatElements(e.target.name)   
            }
                break;
            case 'password': if(value.length<8){
                setError({ error: true, message: "Password must be 8 characters long"})
            }
            else if (!passwordReg.test(value)) {
                setError({ error: true, message: "Password must contain a letter and a number"})
            }
            else{
            concatElements(e.target.name)    
            }
                break;
            case 'confirmpassword': if (value!==user.password) {
                    setError({ error: true, message: "Password doesn't match" })
            }
            else{
            concatElements(e.target.name)    
            }
                break;

            default:
                concatElements(e.target.name)
                break;
        }
    }
    return (
        <div className='formInput'>
            <label>{label}</label>
            <input placeholder={placeholder} name={name} type={type} onChange={onChange} onFocus={e => setError({ ...Error, error: false })} onBlur={handleBlur} />
            {Error.error ? <span>{Error.message}</span> : null}
        </div>
    )
}

export default FormInput

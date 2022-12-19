export default function validation(data){
    let valid=true;
    let reg=/^[A-Za-z\s]+$/
    let {name,email,doctor,location,session_time}=data
    console.log(reg.test(name))
    if(name===""){
        setError('name',"Full name can not be empty")
    }
    else if(!reg.test(name)){
        setError('name',"Name can only contain [a-z,A-Z]")
    }
    else{
        setSuccess('name')
    }
    return valid
}

function setError(id,message){
    let parentElement=document.getElementById(id).parentElement
    let displayError=parentElement.querySelector('.error')
    displayError.innerText=message
    parentElement.classList.add('invalid')
    parentElement.classList.remove('success') 
}
function setSuccess(id){
    let parentElement=document.getElementById(id).parentElement
    let displayError=parentElement.querySelector('.error')
    displayError.innerText=""
    parentElement.classList.remove('invalid')
    parentElement.classList.add('success') 
}
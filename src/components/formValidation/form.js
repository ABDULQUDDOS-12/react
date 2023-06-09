import React, { useState } from 'react'
import "./form.css"
const Form = () => {
const [email,setEmail] = useState()
const [password,setPassword] = useState('');
const [repeatPassword,setRepeatPassword]= useState('');
const [passwordMatch,setPasswordMatch] = useState(true);
const [passwordError,setPasswordError]=useState('');
const [isEmailTaken, setIsEmailTaken] = useState(false);
const [allEmails, setAllEmails] = useState([]);
const handlePasswordChange = (event)=>{
  const newPassword = event.target.value;
  setPassword(event.target.value)
  setPasswordError(validatePassword(newPassword))
}
const handleRepeatPasswordChange = (event)=>{
  setRepeatPassword(event.target.value)
}
const handleFormSubmit =(event)=>{
  event.preventDefault();
  const storedEmails = localStorage.getItem("emails");
  const parsedEmails = storedEmails ? JSON.parse(storedEmails) : [];
  setAllEmails(parsedEmails);

  const isNewEmailTaken = allEmails.some((storedEmail) => storedEmail === email);
  if (isNewEmailTaken) {
    setIsEmailTaken(true);
  } else {
    localStorage.setItem("emails", JSON.stringify([...allEmails, email]));
    setIsEmailTaken(false);
    // Perform account creation logic here
    // ...
  }
  if(password===repeatPassword){
    setPasswordMatch(true);
  }
  else{
    setPasswordMatch(false);
  }
}
const validatePassword = (password)=>{
  //define password validation rules
  const minPasswordLength = 8;
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const digitRegex = /\d/;

  //perform validation
  if(password.length<minPasswordLength){
    return `password must be atleast ${minPasswordLength} characters long`
  }
  if(!upperCaseRegex.test(password)){
    return `password must contain atleast one upper case letter`
  }
  if(!lowerCaseRegex.test(password)){
    return `password must contain atleast one lower case letter`
  }
  if(!digitRegex.test(password)){
    return `password must contain atleast one digit`
  }
  return ''
}
const handleEmailChange=(e)=>{
  setEmail(e.target.value)
  setIsEmailTaken(false) //Reset email validation
}
return (
    <>
     <form onSubmit={handleFormSubmit}>
     <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account</p>
      <hr />
      <br />
      <label htmlFor="email" className='email'><b>Email</b></label>
      <input type="text" placeholder='Enter Email' name='email' id='email' required value={email} onChange={handleEmailChange}/>
      <br />
      {isEmailTaken && <div style={{color:"red"}}>Email is already taken</div>}
       <br />
      <label htmlFor="password" className='password'><b>Password</b></label>
      <input type="password" name="password" id="password" placeholder='password' required value={password} onChange={handlePasswordChange}/>
      <br /> 
      {passwordError && (<p style={{color:'red'}}>{passwordError}</p>)}
      <br />
      <label for="psw-repeat" className='password-repeat' ><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required value={repeatPassword} onChange={handleRepeatPasswordChange}></input>
    <br /> 
    {!passwordMatch && (<p style={{color:'red'}}>Passwords do not match</p>)}
    <br/>
    <hr />
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
     </div>
     <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
     </form>
   
    </>
  )
}

export default Form
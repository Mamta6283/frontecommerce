import React, { useState } from 'react';
import './CSS/LoginSignup.css'
function LoginSignup(props) {
     
    const[state,setState]=useState("Login")
    const [formData ,setFormData]=useState({
        username:"",
        email:"",
        password:""
    })
    const changeHandler=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

    // const login=async()=>{
    //      console.log("login function executed",formData)
    //      let responseData;
    //      await fetch('http://localhost:4000/login',{
    //         method:"POST",
    //         headers:{
    //             Acceppt:'application/form-data',
    //             'Content-type':'application/json'
    //         },
    //         body:JSON.stringify(formData)
    //      }).then((res)=>res.json()).then((data)=>responseData==data)
    
    //      if(responseData.success){
    //         localStorage.setItem('auth-token',responseData.token)
    //         window.location.replace("/")
    //      }
    //      else{

    //         alert(responseData.errors);
    //      }
    // }

    // const signup=async()=>{
    //  console.log("signup function executed",formData)
    //  let responseData;
    //  await fetch('http://localhost:4000/signup',{
    //     method:"POST",
    //     headers:{
    //         Acceppt:'application/form-data',
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(formData)
    //  }).then((res)=>res.json()).then((data)=>responseData==data)

    //  if(responseData.success){
    //     localStorage.setItem('auth-token',responseData.token)
    //     window.location.replace("/")
    //  }
    //  else{
    //     alert(responseData.errors);
    //  }
    // }

    const login = async () => {
        console.log("Login function executed", formData);
        let responseData;

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
              
            responseData = await response.json();
            console.log("Login response:", responseData); // Log the response for debugging

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/"); // Redirect to home page
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    
    const signup = async () => {
        console.log("Signup function executed", formData);
        let responseData;

        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
   
            responseData = await response.json();
            console.log("Signup response:", responseData); // Log the response for debugging

            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/"); // Redirect to home page
            } else {
                alert(responseData.errors);
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className='loginsignup'>
            <div className="loginsignupcontainer">
                <h1>{state}</h1>
                <div className="loginsignupfields">
                   {state === "Signup"? <input type="text" name='username' placeholder='your name' value={formData.username}  onChange={changeHandler}/>:<></>} 
                    <input type="email" name='email' placeholder='your email id' value={formData.email} onChange={changeHandler} />
                    <input type="password" name='password' placeholder='password' value={formData.password} onChange={changeHandler} />
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

                {state === "Signup"?  <p className="loginsignup-login">Already Have an account?<span onClick={()=>setState("Login")}>Login here</span></p>:
                 <p className="loginsignup-login">Create an account?<span onClick={()=>setState("Signup")}>click here</span></p>}
                 
                  <div className="loginsignup-agree">
                        <input type="checkbox" id='' name='' />
                        <p>By continue, i agree to the terms of use & privacy policy </p>
                    </div>
               
            </div>
        </div>
    );
}

export default LoginSignup;
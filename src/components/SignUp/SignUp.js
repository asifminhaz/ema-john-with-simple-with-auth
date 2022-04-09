import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
          const [confirmPassword, setConfirmPassword] = useState('')
          const [error, setError] = useState('')

          const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

          const handleEmailBlur = event => {
                    setEmail(event.target.value);
          }

          const handlePasswordBlur = event => {
                    setPassword(event.target.value)
          }
          const handleConfirmPassword = event => {
                    setConfirmPassword(event.target.value)
          } 
          const handleCreateUser = event => {
                    event.preventDefault();
                    if (password !== confirmPassword){
                              setError('your password did not match')
                              return;
                    }
                    if(password.length <6){
                              setError('password must be 6 characters or longer')
                              return;
                    }
                    createUserWithEmailAndPassword(email, password)
                    .then(result => {
                              const user = result.user;
                              console.log(user)
                    })
          }
         
          return(
                    <div>
                     
                           <div className='form-container'>
                       <div>
                    <h2 className='form-title'>Sign Up</h2>
               <form onSubmit={handleCreateUser}>
               <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type='email' name ='email' required></input>

                 </div>

                    <div className="input-group">
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePasswordBlur} type='password' name ='password' required></input>
                    </div>
                    <div className="input-group">
                    <label htmlFor='confirm-password' required>Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type='password' name ='password'></input>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Login" />
                  </form>
                  <p>already have an account <Link className='form-link' to ="/login" >Login</Link></p>
                  </div>        
               </div>
                    </div>
          );
};

export default SignUp;
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
          const [user] = useAuthState(auth)
          const [name, setName] = useState('')
          const [address, setAddress] = useState('')
          const [email, setEmail] = useState('')
          const [phone, setPhone] = useState('')
          const [error, setError] = useState('')
          // const navigate = useNavigate()
          const handleNameBlur = event => {
                    setName(event.target.value)
          }
          

          const handleAddressBlur = event => {
                    setAddress(event.target.value)
          }
          const handlePhoneBlur = event => {
                    setPhone(event.target.value)
          } 
          const handleCreateUser = event => {
                    event.preventDefault();
                   
                    const shipping = {name, email, address, phone}
                    console.log(shipping)
          }
          return (
                    <div>
                     
                    <div className='form-container'>
                <div>
             <h2 className='form-title'>Shipping information</h2>
        <form onSubmit={handleCreateUser}>
        <div className="input-group">
             <label htmlFor='email'>Your name</label>
             <input onBlur={handleNameBlur} type='text' name ='name' required></input>
          </div>
          <div className="input-group">
             <label htmlFor='email'>Your email</label>
             <input value={user?.email} readOnly type='email' name ='email' required></input>
             </div>

             <div className="input-group">
             <label htmlFor='address'>address</label>
             <input onBlur={handleAddressBlur} type='text' name ='address' required></input>
             </div>
             <div className="input-group">
             <label htmlFor='phone' required>Phone number</label>
             <input onBlur={handlePhoneBlur} type='text' name ='phone number'></input>
             </div>
             <p style={{color:'red'}}>{error}</p>
           
             <input className='form-submit' type="submit" value=" Add Shipping" />
           </form>
           
           </div>        
        </div>
             </div>
          );
};

export default Shipment;
import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const UserForm = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        
        userName : ''
    });
    const { userName } = formData;

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/api/user/`, formData);
            console.log('User updated:', response.data); 
            setFormData({
               userName:''
            });
            navigate('/home');
            
        } catch (error) {
            console.error('Error updating invoice:', error);
        }
    };
  return (
    <div className='fcontainer'>
    <form className="form" onSubmit={handleSubmit}>
        <div className="form__title">Invoice</div>
        <div className="form__item">
            <label className="form__label">Invoice Holder  </label>
            <input type="text" value={userName} onChange={handleInput} className="form__input" name="userName" />
        </div>
        
        <div className="form__item">
            <button className="form__btn" type="submit">Add</button>
        </div>
    </form>
</div>
  )
}

export default UserForm;
import React, {  useState } from 'react'
import './addui.css'
import axios from 'axios'
import {  useLocation, useNavigate,useParams } from 'react-router-dom';

const AddUi = () => {
    const location=useLocation();
    const getUserId=location.state.userId;

    
    
    const navigate=useNavigate();
    const [post,setPost]=useState({
        vendor: '',
        amount: '',
        product: '',
        date: '',
    });
    const handleInput = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
      e.preventDefault();
      //api
        const api=`http://localhost:8080/api/user/${getUserId}/`;
       axios.post(api,post)
       .then(resp => console.log(resp))
       .catch(err => console.log(err));

      navigate('/home');
    }


  return (
    <div className='fcontainer'>
    <form class="form" onSubmit={handleSubmit}>
  <div class="form__title">Invoice</div>
  
  <div class="form__item">
    <label  class="form__label">Vendor </label>
    <input type="text" onChange={handleInput} class="form__input" name="vendor"  placeholder="Enter Vendor name"/>
    
  </div>

  <div class="form__item">
    <label  class="form__label">Product </label>
    <input type="text" onChange={handleInput} class="form__input" name="product"  placeholder="Enter product"/>
    
  </div>
  <div class="form__item">
    <label  class="form__label">Amount </label>
    <input type="number" onChange={handleInput} class="form__input" name="amount"  placeholder="Enter Amount"/>
    
  </div>
  
  <div class="form__item">
    <label  class="form__label">Date</label>
    <input type="date" onChange={handleInput} class="form__input form__input--small" name="date"  placeholder="Date"/>
   
  </div>
  <div class="form__item">
    
    
  </div>
  <div class="form__item">
    <button class="form__btn" type="submit">Add</button>
  </div>
</form>
</div>
  )
}

export default AddUi
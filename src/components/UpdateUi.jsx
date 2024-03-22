import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './updateui.css';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUi = () => {
    const { invoiceId } = useParams();
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        vendor: '',
        product: '',
        amount: '',
        date: ''
    });
    const { vendor, product, amount, date } = formData;

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8080/api/user/invoice/${invoiceId}`, formData);
            console.log('Invoice updated:', response.data); 
            setFormData({
                vendor: '',
                product: '',
                amount: '',
                date: ''
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
                    <label className="form__label">Vendor </label>
                    <input type="text" value={vendor} onChange={handleInput} className="form__input" name="vendor" />
                </div>
                <div className="form__item">
                    <label className="form__label">Product </label>
                    <input type="text" value={product} onChange={handleInput} className="form__input" name="product" />
                </div>
                <div className="form__item">
                    <label className="form__label">Amount </label>
                    <input type="number" value={amount} onChange={handleInput} className="form__input" name="amount" />
                </div>
                <div className="form__item">
                    <label className="form__label">Date</label>
                    <input type="date" value={date} onChange={handleInput} className="form__input form__input--small" name="date" />
                </div>
                <div className="form__item">
                    <button className="form__btn" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUi;

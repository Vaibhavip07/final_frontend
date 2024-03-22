import React, { useEffect, useState } from 'react';
import './invoiceui.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AddUi from './AddUi';

const InvoiceUi = () => {
    const location = useLocation();
    const api1 = location.state.api;
    const userIdVar = location.state.userId;

    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [invIds, setInvIds] = useState([]); 

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api1);
                const jsonData = await response.json();
                setData(jsonData);
                
                const ids = jsonData.map(user => user.id);
                setInvIds(ids);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        loadUsers();
       
        return () => {
            setData([]);
        };
    }, [api1]); 

    const loadUsers = async () => {
        try {
            const result = await axios.get(api1);
            setUsers(result.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    function handleAddButton() {
        navigate('/addInvoice', { state: { userId: userIdVar } });
    }

    const handleClearButton = async (invoiceId) => {
        try {
            const result = await axios.delete(`http://localhost:8080/api/invoice/${invoiceId}`);
            loadUsers();
            navigate('/home');
        } catch (error) {
            console.error('Error clearing invoice:', error);
        }
    };

    const handleUpdateButton = async (invoiceId) => {
        navigate(`/updateInvoice/${invoiceId}`);
    };

    return (
        <div className="main-container">
            <div className='tcontainer'>
                <table>
                    <thead>
                        <tr>
                            <th>Vendor</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => {
                            return (
                                <tr key={index}>
                                    
                                    <td>{user.vendor}</td>
                                    <td>{user.product}</td>
                                    <td>{user.amount}</td>
                                    <td>{user.date}</td>
                                    <td>Pending</td>
                                    <td>
                                        <button className='addbtn' onClick={() => handleClearButton(user.id)}>Clear</button>
                                        <button className='updatebtn' onClick={() => handleUpdateButton(user.id)}>Update</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='addcl'>
                    <addbtn>
                        <button onClick={() => handleAddButton()}>ADD+</button>
                    </addbtn>
                </div>
            </div>
        </div>
    );
};

export default InvoiceUi;

import React from 'react'
import './userview.css'
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export const UserView = () => {

    const [data, setData] = useState([]);
    
    const api="http://localhost:8080/api/user/";
    
    const navigate=useNavigate();
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(api);
                //console.log(response);
                 setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    
        return () => {
            setData([]);
        };
    }, [api]);

    

    function handleAddButton() {

        navigate('/addUser');
    }
    function handleCheckButton(userId){
        //console.log(userId)
        const api1=`http://localhost:8080/api/user/${userId}/invoice/`;
        const api2=`http://localhost:8080/api/user/${userId}/`;
        console.log(api1)

        navigate('/invoice', { state: { api: api1,userId: userId } });
    }

    
  
    
    

    return (
        <div className="main-container">
            <div className='tcontainer'>
                <table>
                    <thead>
                        <tr>
                            
                            <th>Owner</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>{user.userName}</td>
                                        
                                        <td><button className='addbtn' onClick={() => handleCheckButton(user.userId)}>Check</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className='addcl'>
                    <addbtn>
                    <button  onClick={()=>handleAddButton()}>ADD+</button>
                    </addbtn>
                </div>
            </div>
        </div>
    )
};
    export default UserView;

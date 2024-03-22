import React from 'react'
import './homeui.css';
import { NavLink } from 'react-router-dom';

const HomeUi = () => {
  return (
    <navig>
    <div className='hcontainer'>
      <div className='hcontent border'>
          <h1>Welcome to Invoice System</h1>
          <p>Welcome to our invoice system! With our platform, you can effortlessly manage your invoices, track payments, and stay organized with your financial transactions. Whether you're a freelancer, small business owner, or large enterprise, our intuitive interface and powerful features streamline your invoicing process. Take control of your finances and focus on what matters most - growing your business.</p>
                    
              <NavLink to='/userView'>Go to Invoice</NavLink>
          

     
      </div>
        

    </div>
    </navig>
  )
}

export default HomeUi
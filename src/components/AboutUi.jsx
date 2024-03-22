import React from 'react'
import Logo from './images/about.jpg';
import './aboutui.css'

const AboutUi = () => {
  return (
    <div className='about-container'>
    <div className="heading">
      <h1>ABOUT US</h1>
      <p>Our mission is simple: to provide cricket enthusiasts like you with comprehensive information, analysis, and coverage of the sport you love.</p>
    </div>
    <div className='container'>
      <section className='about'>
        <div className='about-img'>
          <img src={Logo}></img>
        </div>
        <div className='about-content'>
          <h2>Invoice Details</h2>
          <p>Welcome to our Invoice Management System! At InvoicePortal, we provide you with a comprehensive platform to efficiently handle your invoices, manage payments, and keep track of your financial transactions. With our user-friendly interface and powerful features, you can streamline your invoicing process and stay organized with ease. Whether you're a freelancer, small business owner, or enterprise, InvoicePortal is your go-to solution for simplifying your billing and accounting tasks.</p>

        </div>
      </section>
    </div>

    </div>
  )
}

export default AboutUi
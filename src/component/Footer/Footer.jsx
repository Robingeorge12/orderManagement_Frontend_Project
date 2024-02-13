import React from 'react'
import "./Footer.css"
import { TbBrandTelegram } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { MdOutlineConnectedTv } from 'react-icons/md';


function Footer() {
  return (
    <div className='footer-container'>

      <div>
        <h3>Contact Us!</h3>
        <div className='footer-box'>
          <TbBrandTelegram />
          <p>512 Warren Ave Portland, Maine 04103</p>
        </div>
        <div className='footer-box'>
          <BsTelephone />
          <p>207-797-5700</p>
        </div>
        <div className='footer-box'>
          <AiOutlineMail />
          <p>info@fitnessfactorymaine.com</p>
        </div>
      </div>
      <div>
        <h3>Connect with us!</h3>
        <div className='footer-box'>
          <RiFacebookCircleLine />
          <p>Facebook</p>
        </div>

        <div className='footer-box'>
          <FaWhatsapp />
          <p>WhatsApp</p>
        </div>

        <div className='footer-box'>
          <AiOutlineInstagram />
          <p>LinkedIn</p>
        </div>
      </div>
      <div>
        <h3>Others</h3>
        <div className='footer-box'>
          <MdOutlineConnectedTv />
          <p>Online</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
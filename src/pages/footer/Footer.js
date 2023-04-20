import React from 'react'
import Style from './Footer.module.css'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <div className={Style.bkimg}>
        <div className={Style.main_footer}>
          <div className={Style.leftside}>
            <h1>GYM</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, culpa.</p>
            <div className={Style.mediaIcon}>
        <span><BsFacebook/></span>
        <span><BsInstagram/></span>
        <span><BsTwitter/></span>
        </div>
          </div>
          <div className={Style.Table}>
            <table width='100%' >
              <tr>
                <th>ACCOUNT</th>
                <th>CUSTOMER SERVICE</th>
                <th>ABOUT FITNESS</th>
              </tr>
              <tr>
                <td>Wishlist</td>
                <td>Delivery</td>
                <td>Carrers</td>
              </tr>
              <tr>
                <td>Checkout</td>
                <td>Contact Us</td>
                <td>Gender pay report</td>
              </tr>
              <tr>
                <td>My Account</td>
                <td>FAQS</td>
                <td>Privacy Policy</td>
              </tr>
              <tr>
                <td></td>
                <td>Size guide</td>
                <td>Secure Shopping</td>
              </tr>
              <tr>
                <td></td>
                <td>Gift Certificate</td>
                <td>Term & conditions</td>
              </tr>
              
            </table>
          </div>


        </div>
        <div className={Style.copy}>
          <p>@2023 is all rightes copy reserved</p>
        </div>
      </div>

    </>
  )
}
import React from 'react'
import Style from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <hr />
    <div className={Style.bkimg}>
    <div className={Style.main_footer}>
      <div className={Style.leftside}>
        <h1>GYM</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, culpa.</p>
        <h2>logos</h2>
      </div>
      <div className={Style.table}>
        <table width='100%'>
            <tr>
                <td>Health living</td>
                <td>Services</td>
                <td>Programs</td>
            </tr>
            <tr>
                <td>Health living</td>
                <td>Health living</td>
                <td>Health living</td>
            </tr>
            <tr>
                <td>Health living</td>
                <td>Health living</td>
                <td>Health living</td>
            </tr>
            <tr>
                <td>Health living</td>
                <td>Health living</td>
                <td>Health living</td>
            </tr>
            <tr>
                <td>Health living</td>
                <td>Health living</td>
                <td>Health living</td>
            </tr>
        </table>
      </div>
      
      
    </div>
    <hr />
    <div className={Style.copy}>
         <p>@2023 is all rightes copy reserved</p>
         </div>
    </div>
   
    </>
  )
}

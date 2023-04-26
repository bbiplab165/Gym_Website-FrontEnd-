import React from 'react';
import Style from './Pricing.module.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom'

export default function Pricing() {
    const navigate = useNavigate()
    const isLogin = localStorage.getItem("logged")
    const userData = JSON.parse(localStorage.getItem("users")) || []

    function handleSubsription() {


        const userDetails = userData.find(user => user.subscriptionData.isSubscribed === false || user.subscriptionData.subscriptionPlan === '')
        // console.log(userDetails.subscriptionData.subscriptionPlan);
        if (userDetails) {
            const confirmation = window.confirm('Do You want to Subscribe our Weekend Pass')
            if (confirmation) {
                userDetails.subscriptionData.isSubscribed = true;
                userDetails.subscriptionData.subscriptionPlan = 'Weekend Pass'
                localStorage.setItem('users', JSON.stringify(userData))
                alert('Congratulation! You have subscribed our Weekend pass ')
            }

        } else {

            alert('You have already Subscribed')
        }



    }
    function handleSubsriptionM() {
        const userDetails = userData.find(user => user.subscriptionData.subscriptionPlan === 'Weekend Pass' || user.subscriptionData.subscriptionPlan === '')

        if (userDetails) {
            const confirmation = window.confirm('Do You want to Subscribe our Monthly Pass')
            if (confirmation) {
                userDetails.subscriptionData.isSubscribed = true;
                userDetails.subscriptionData.subscriptionPlan = 'Monthly Pass'
                localStorage.setItem('users', JSON.stringify(userData))
                alert('Congratulation! You have subscribed our Monthly pass ')
            }
        } else {
            alert('You have already Subscribed')
        }
    }
    function handleSubsriptionY() {
        const userDetails = userData.find(user => user.subscriptionData.subscriptionPlan === 'Weekend Pass' || user.subscriptionData.subscriptionPlan === 'Monthly Pass' || user.subscriptionData.subscriptionPlan === '')

        if (userDetails) {
            const confirmation = window.confirm('Do You want to Subscribe our Yearly Pass')
            if (confirmation) {
                userDetails.subscriptionData.isSubscribed = true;
                userDetails.subscriptionData.subscriptionPlan = 'Yearly Pass'
                localStorage.setItem('users', JSON.stringify(userData))
                alert('Congratulation! You have subscribed our Yearly pass ')
            }
        } else {
            alert('You have already Subscribed')
        }
    }
    return (
        <>
            <Navbar />
            <div className={Style.main_div}>
                <div className={Style.content}>
                    <h1> <span>Special Offers</span> Get It Now For Your Health </h1>
                    <p>Time and health are two precious assets that we don't recognize and appreciate until they have been depleted</p>
                </div>
                <div className={Style.p_table}>
                    <div className={Style.div_1}>
                        <h1>Weekend Pass</h1>
                        <h2>INR 200</h2>
                        <span>Unlimited Yoga Classes</span> <br />
                        <span>Aerobics</span> <br />
                        <span>Strength Training</span> <br />
                        {isLogin ? <button onClick={handleSubsription}>SELECT PLAN</button> : <button onClick={() => navigate('/login')}>SELECT PLAN</button>}
                    </div>
                    <div className={Style.div_2}>
                        <h1>Monthly Pass</h1>
                        <h2>INR 700</h2>
                        <span>Unlimited Yoga Classes</span>  <br />
                        <span>Aerobics, Dance</span>  <br />
                        <span>Strength & CrossFit Training</span>  <br />
                        {isLogin ? <button onClick={handleSubsriptionM}>SELECT PLAN</button> : <button onClick={() => navigate('/login')}>SELECT PLAN</button>}
                    </div>
                    <div className={Style.div_3}>
                        <h1>Yearly Pass</h1>
                        <h2>INR 7500</h2>
                        <span>Unlimited Yoga Classes</span>  <br />
                        <span>Aerobics, Dance, Jujutsu</span>  <br />
                        <span>Strength Training & CrossFit Training</span>  <br />
                        {isLogin ? <button onClick={handleSubsriptionY}>SELECT PLAN</button> : <button onClick={() => navigate('/login')}>SELECT PLAN</button>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

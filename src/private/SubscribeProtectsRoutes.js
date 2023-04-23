// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function SubscribeProtectsRoutes(props) {
//     const {Component} = props
//     const navigate = useNavigate()
    
//     useEffect(() => {
//         const userData = JSON.parse(localStorage.getItem('users'))
//         const isUserSubscribed = userData?.subscriptionData?.isSubscribed
//         // const isUserSubscribed = userData.find(user => user.subscriptionData.isSubscribed === true)
//         // const isUserSubscribed = userData.find(user => user.subscriptionData.subscriptionPlan === 'Weekend Pass')
//         // console.log(isUserSubscribed);
//         if(!isUserSubscribed){
//             navigate('/pricing')
//         }
//     })
   
//   return (
//         <div>
//             <Component/>
//         </div>
       

//   )
// }

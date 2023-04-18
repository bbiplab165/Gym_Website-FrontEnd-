import React from 'react';
import Style from './Program.module.css'

export default function Training() {
  return (
    <div>
      <h1 className={Style.h1}>Training Sections</h1>
      <div className={Style.training}>
        <TrainingSection/>
     </div>
    </div>
  )
}

function TrainingSection(){
  const photos = [
      {
          url: 'https://media.istockphoto.com/id/655781960/photo/determined-male-working-out-in-gym-lifting-weights.jpg?s=612x612&w=0&k=20&c=k9C0fgbVHYxiQLe8hckSx9OqAEaGVUfiVXYq8JGxhoE=',
          name: 'lio'
      },
      {
          url: "https://media.istockphoto.com/id/474068730/photo/gym-is-a-way-of-life.jpg?s=612x612&w=0&k=20&c=hO-ZKhxU3PkcxPMQ-GDzz5xj8dWRywMa2rpbYDZct0Y=",
          name: "aqui"
      },
      {
          url: "https://media.istockphoto.com/id/513434122/photo/cute-young-couple-flirting-at-a-gym.jpg?s=612x612&w=0&k=20&c=wj4BtYLDJ5ZaaS0wUGCdEYNyH7eE8cKIgT5Ypj4CIq4=",
          name: "sirure"
      },
      {
          url: "https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=",
          name: "badtie"
      }
  ]
  return(
      <div className={Style.map}>
         {
          photos.map((item) => (
              <div className={Style.profileDiv}>
               <img className={Style.Training_img} src={item.url} alt={item.name} />
               <h3>{item.name}</h3>
              </div>
          ))
         }

         </div>
  )
}

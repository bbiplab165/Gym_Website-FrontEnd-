import React from 'react'
import Style from './Program.module.css'

export default function Program() {
    const titles = [
        {
          title: 'Crossfit',
          url: 'https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=1024x1024&w=is&k=20&c=dRCBw_smBuyXus7iwgKUS3V02KqJpqildutyFVjZbaY=',
          
        },
        {
          title: 'Workout',
          url: 'https://media.istockphoto.com/id/1347092895/photo/gym.jpg?s=1024x1024&w=is&k=20&c=42Ej0R_nc5jsGmyanTAf54rtEV-NR-ZCJhSqFqiQEJ8=',
          
        },
        {
          title: 'Fitness',
          url: 'https://media.istockphoto.com/id/1322158059/photo/dumbbell-water-bottle-towel-on-the-bench-in-the-gym.jpg?s=1024x1024&w=is&k=20&c=yPhAdbBk1T3IXdKbS9DjLlHYBgH8S0G1TKQHg-1jjHA='
        },
        {
          title: 'Boxing',
          url: 'https://media.istockphoto.com/id/1405572693/photo/personal-training-studio-with-barbell-dumbbells-exercise-bike-and-garden-view-from-the-window.jpg?s=1024x1024&w=is&k=20&c=8lzYFc4MqrYRBJJ9iV3k5NbFW87B7SX4N56EoVjQmLE='
        },
        {
          title: 'yoga',
          url: 'https://media.istockphoto.com/id/1430631522/photo/gym-without-people-with-large-group-of-exercise-machines.jpg?s=1024x1024&w=is&k=20&c=oGt8HyuDwMb1dg3cgQEEjL1q8dkc05NuVka3kiBVugU='
        },
        {
          title: 'Exercise',
          url: 'https://media.istockphoto.com/id/1375037561/photo/home-gym-with-barbell-dumbbells-exercise-bike-and-other-sports-equipments.jpg?s=1024x1024&w=is&k=20&c=VdkL31vsIcBcX9gqDNxV_eaYd0u_K3akTV0-5Fx5blc='
        },
    ]
  return (
    <>
      <h1 className={Style.h1}>Training Programs</h1>
    <div className={Style.main_div}>
      
      <div className={Style.profiles}>
      {
        titles.map((data,index)=> (
        <div className={Style.imgdiv} key={index}>
        
        <PhotosData data={data}/>
        </div>
        )
        )
      }
      </div>
    </div>
    <hr />
    
    {/* <div className={Style.training}>
     <TrainingSection/>
     </div> */}
    </>
  )
}

function PhotosData({data}){
    return(
        <div className={Style.profileDiv}>
            <img className={Style.img} src={data.url} alt={data.title} />
            <h2 className={Style.centered}>{data.title}</h2>
        </div>
    )
}



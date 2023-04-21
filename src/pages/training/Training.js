import React, { useState } from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';
import Navbar from "../navbar/Navbar"
import Style from "./Training.module.css"
import Footer from '../footer/Footer';
const Training = () => {
  const photos = [
    {
      url: 'https://img2.wallspic.com/previews/1/0/0/1/31001/31001-bodybuilder-arm-strength_training-male-fitness_centre-x750.jpg',
      name: 'Strngth Training'
    },
    
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
  const [index, setIndex] = useState(0);
  const length = photos.length ;
  console.log(length)

  const handlePrevious = () => {
    setIndex(index>0 ? index-1 : length-1 )
  };

  const handleNext = () => {
    // const newIndex = index + 1;
    // setIndex(newIndex >= length ? 0 : newIndex);
    setIndex(index<length-1 ? index+1 : 0)
    
  };

  return (
    <>
    
    <div className={Style.container}>
    <Navbar />
      <div className={Style.carousel}>
        <button onClick={handlePrevious}><FaLessThan /></button>
        <div className={Style.imgContainer}>
          <img src={photos[index].url} alt={photos[index].name} />
          <p>{photos[index].name}</p>
        </div>
        <button onClick={handleNext}><FaGreaterThan /></button>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Training;
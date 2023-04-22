
import React from 'react'
import Style from './AboutUs.module.css'
import Button from '../../components/Button'
import ReactPlayer from 'react-player'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';



export default function AboutUs() {
    return (
        <>
        <div className={Style.container}>
            <Navbar />
            <div className={Style.content}>
                <div className={Style.video_div}>
                    
                    <div className={Style.video}>
                        <ReactPlayer controls="true" url='https://www.youtube.com/watch?v=-a4vyrtxr_U' width="40vw" height="40vh" />
                    </div>
                    <div className={Style.video_content} >
                        <h1>Fitness Motivation</h1>
                        <p> Building a gym website becomes a piece of cake once you work with Bronx. This neat template has everything to present your gym of fitness facility online in the best possible light.

                            Why complicate and do things from scratch if you don’t have to? Bronx also doesn’t require coding and design knowledge; it even sorts you out with hosting and domain.

                            This all-in-one pack is for everyone, so take action and you can have a website live VERY quickly.
                        </p>
                        <Button name='Learn More' /> 
                    </div>
                </div>

                <div className={Style.about_div}>
                    <div className={Style.video_content}>
                        <h1>Why Choose US</h1>
                        <p>Do you offer fitness classes for your gym business? Perhaps you should consider building your online visibility to showcase how you train and inspire people. Windy City CrossFit is a cool example of a simple yet elegant gym website design. The header displays a simple menu like getting started, member sign in and an off-canvas menu. Of course, the stunning logo projects a professional image as it sticks to the header at the center.

                            Moreover, the magnificent random display of imagery in a masonry type makes a striking effect and adds a touch of creativity to the website. What’s more? It also looks interesting to the visitors as it uses the awesome parallax effect.

                        </p>
                        <Button name='Learn More' />
                    </div>
                    <div className={Style.video}>
                        <ReactPlayer url="https://www.youtube.com/embed/X_9VoqR5ojM" width="40vw" height="40vh"  />
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}
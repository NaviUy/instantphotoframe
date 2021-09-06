import React from 'react'
import './styles.css'
import Image from '../../frames/polaroid/polaroid-front.png'

export const Polaroid = ({ imgurl, size, photoScale = 1, photoScaleX=1, photoScaleY=1, position=0, positionTop=0, positionLeft=0 }) => {

    if(photoScaleX != 1 || photoScaleY != 1){
        photoScale = `${photoScaleX}, ${photoScaleY}`
    }

    if(positionLeft != 0 || positionTop != 0){
        position = `${positionLeft}px ${positionTop}px`
    }

    let frameSize;
    switch(parseInt(size)){
        case 10:
            frameSize = {
                maxHeight: "700px",
                maxWidth: "500px"
            }
            break;
        case 9:
            frameSize = {
                maxHeight: "650px",
                maxWidth: "450px"
            }
            break;
        case 8:
            frameSize = {
                maxHeight: "600px",
                maxWidth: "400px"
            }
            break;
        case 7:
            frameSize = {
                maxHeight: "550px",
                maxWidth: "350px"
            }
            break;
        case 6:
            frameSize = {
                maxHeight: "500px",
                maxWidth: "300px"
            }
            break;
        case 5:
            frameSize = {
                maxHeight: "450px",
                maxWidth: "250px"
            }
            break;
        case 4:
            frameSize = {
                maxHeight: "400px",
                maxWidth: "200px"
            }
            break;
        case 3:
            frameSize = {
                maxHeight: "350px",
                maxWidth: "150px"
            }
            break;
        case 2:
            frameSize = {
                maxHeight: "300px",
                maxWidth: "100px"
            }
            break;
        case 1:
            frameSize = {
                maxHeight: "250px",
                maxWidth: "50px"
            }
            break;
        default:
            frameSize = {
                maxHeight: "700px",
                maxWidth: "500px"
            }
    }

    console.log(frameSize)

    return (
    <>
        <div className="instant-container" style={{maxHeight: `${frameSize.maxHeight}`, maxWidth: `${frameSize.maxWidth}`}}>
            <img className="instant-frame" src={Image}></img>
            <img className="instant-image" src={imgurl} style={{transform: `scale(${photoScale})`, objectPosition: `${position}`}}></img>
        </div>
    </>
    )
}

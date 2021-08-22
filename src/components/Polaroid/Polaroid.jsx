import polaroidFront from '../../frames/polaroid/polaroid-front.png'
import testImage from '../../../local-test-images/demo.gif'
import './styles.css'

export const Polaroid = ({ imgurl, size=10, photoScale = 1, photoScaleX=1, photoScaleY=1, position=0, positionTop=0, positionLeft=0 }) => {

    if(parseInt(size) < 1 || parseInt(size) >= 10){
        size = 1
    } else {
        size = "." + size
    }

    if(photoScaleX != 1 || photoScaleY != 1){
        photoScale = `${photoScaleX}, ${photoScaleY}`
    }

    if(positionLeft != 0 || positionTop != 0){
        position = `${positionLeft}px ${positionTop}px`
    }

    return (
    <>
        <div className="container" style={{transform: `scale(${size})`}}>
            <img className="frame" src={ polaroidFront } style={{maxHeight: "1000px", maxWidth: "800px"}}></img>
            <div className="image">
                <img className="innerImage" src={ imgurl } style={{transform: `scale(${photoScale})`, objectPosition: `${position}`}}></img>
            </div>
        </div>
    </>
    )
}

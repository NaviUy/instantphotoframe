import polaroidFront from '../../frames/polaroid/polaroid-front.png'
import testImage from '../../../local-test-images/demo.gif'
import './styles.css'

export const Polaroid = ({ imgurl }) => {

    return (
    <>
        <img className="frame" src={ polaroidFront } style={{maxHeight: "1000px", maxWidth: "800px"}}></img>
        <img className="image" src={ testImage }></img>
    </>
    )
}

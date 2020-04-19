import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageURL} alt="" width="500px" height="auto"/>
                <div className="absolute bounding-box" style={{ top: box.top, right: box.right, left: box.left, bottom: box.bottom  }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;
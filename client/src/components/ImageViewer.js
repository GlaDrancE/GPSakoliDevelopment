import React from 'react';
import close from '../images/icons/close.svg'
import next from '../images/icons/next.png'
import prev from '../images/icons/close.svg'

const ImageViewer = ({ images, onClose, currentIndex, onNext, onPrev }) => {
    return (
        <div className="image-viewer">
            <button onClick={onClose}><img src={close} alt="" /></button>
            <div div className="image-container" >
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div >
            <div className="navigation">
                <button onClick={onPrev}><img src={next} alt="" /></button>
                <button onClick={onNext}><img src={next} alt="" /></button>
            </div>
        </div >
    );
};

export default ImageViewer;

import myImage from './images/LandScape.jpg';
import myImage2 from './images/backyard.jpg';
import myIcon from './images/bush1.png';
import myIcon2 from './images/lawn-mower.png';
import myIcon3 from './images/grass1.png';
import myIcon4 from './images/house.png';
import myIcon5 from './images/flower.png';
import myIcon6 from './images/sod.png';
import myIcon7 from './images/mulch.png';
import myIcon8 from './images/lighting.png';
import ModalS from './modal.jsx';
import React, { useState } from 'react';

function Card() {
    const [isLawnMaintenanceModalOpen, setLawnMaintenanceModalOpen] = useState(false);
    const [isLawnCareModalOpen, setLawnCareModalOpen] = useState(false);

    const toggleLawnMaintenanceModal = () => {
        setLawnMaintenanceModalOpen(!isLawnMaintenanceModalOpen);
    };

    const toggleLawnCareModal = () => {
        setLawnCareModalOpen(!isLawnCareModalOpen);
    };

    return (
        <>
        
            <div className="cards">
            <div className='topCard'>
            <div id="aboutSection">
                <h2>What we do:</h2>
                <ul style={{ listStyleType: 'none' }}>
                        <div id="cardList">
                            <li><img src={myIcon} alt="Monarca bush icon" 
                            className='icon' />Bush Trimming</li>
                            <li><img src={myIcon2} alt="Monarca mower icon" 
                            className='icon' />One Time Mows</li>
                            <li><img src={myIcon3} alt="Monarca grass icon" 
                            className='icon' />Overgrown Properties</li>
                            <li><img src={myIcon4} alt="Monarca grass icon" 
                            className='icon' />Real Estate Showings</li>
                        </div>
                    </ul>
                    <ul style={{ listStyleType: 'none' }}>
                        <div id="cardList">
                            <li><img src={myIcon5} alt="Monarca flowerbed icon" 
                            className='icon' />Flower Beds</li>
                            <li><img src={myIcon6} alt="Monarca resod icon" 
                            className='icon' />Resodding</li>
                            <li><img src={myIcon7} alt="Monarca mulch icon" 
                            className='icon' />Mulch</li>
                            <li><img src={myIcon8} alt="Monarca landscape icon" 
                            className='icon' />Landscape Lighting</li>
                        </div>
                    </ul>
                <h3>Top Lawn Care Services in Tampa – MonarcaOutdoors</h3>
                <p>
                 Looking for reliable, professional lawn care services in Tampa?
                 At MonarcaOutdoors, we specialize in keeping your yard in perfect shape,
                 offering a range of services designed to meet your landscaping needs.
                </p>
                <h2>Why choose MonarcaOutdoor?</h2>
                <p>
                We are a trusted lawn care service in Tampa,
                providing quality maintenance and care for residential and commercial properties.
                Our experienced team understands Tampa’s climate,
                ensuring that your lawn stays healthy and beautiful all year round.
                 </p>
            </div>
        </div>
                <div id='card1'>
                    <img src={myImage2} alt="Lawn Maintenance" id="image2"/>
                    <h2>Lawn Maintenance</h2>
                    
                    <div className="container-mt-5">
                        <button id='button1' onClick={toggleLawnMaintenanceModal}>
                            Get Quote
                        </button>
                        <ModalS isOpen={isLawnMaintenanceModalOpen} onClose={toggleLawnMaintenanceModal} />
                    </div>
                </div>
                
                <div id='card2'>
                    <img src={myImage} alt="Monarca Lawn Care" id="image1" />
                    <h2>Lawn Care</h2>
                    
                    <div className="container-mt-5">
                        <button id ='button2' onClick={toggleLawnCareModal}>
                            Get Quote
                        </button>
                        <ModalS isOpen={isLawnCareModalOpen} onClose={toggleLawnCareModal} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
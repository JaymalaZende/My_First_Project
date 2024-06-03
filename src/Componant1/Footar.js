import React from 'react';
import './Footar.css';


const Footar=()=> {
  return (
    <div className='Footar'>
        <div className='sb_footar section_padding'>
            <div className='sb_footar-links'>
                <div className='sb_footar-links-div'>
                    <h4>Get in Touch</h4>
                    <a href='/location'>
                        <p>location</p>
                       
                    </a>
                    <a href='/email'>
                        <p>Email</p>
                    </a>
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                </div>
            <div className='sb_footar-links-div'>
            <h4>quick links</h4>
                    <a href='/home'>
                        <p>Home</p>
                    </a>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                    <a href='/services'>
                        <p>Services</p>
                    </a>
            
            </div>
           <div>
            </div>
    
    <hr></hr>
    
<div className='sb_footar-below'>
    <div className='sb_footar-copyright'>
        <p>
            @{new Date().getFullYear} Tipic. All right reserves.
        </p>
    </div>
    <div className='sb_footar-below-links'>
        <a href='terms'><div><p>terms & Conditions</p></div></a>
        <a href='privacy'><div><p>Privacy</p></div></a>
        <a href='secuarity'><div><p>Secuarity</p></div></a>
        <a href='cookies Declarations'><div><p>Cookies Declaration</p></div></a>

    </div>
</div>

            </div>
        </div>
    </div>
  )
}

export default Footar
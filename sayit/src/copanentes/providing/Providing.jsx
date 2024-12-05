import React from 'react'
import './Providing.css'
import Prooviding from '../img/Providing.png'
import Providing2 from '../img/Providing1.png'
import Providing1 from '../img/Providing2.png'
function Providing() {
  return (
    <div className='Providing' id='practive'>
      <div className="Providing_type">
        <h3>We are providing best</h3>
        <h3> business service.</h3>
        <span>Problems trying to resolve the conflict between the two major realms  of Classical physics: Newtonian mechanics </span>
      </div>
      <div className="Providing_content">
        <div className="Providing_card1">
            <img src={Prooviding} alt="" />
        </div>
        <div className="Providing_card2">
         <div className="Most">
            <h3>Most trusted in our field</h3>
            <span>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</span>
            </div> 
            <div className="quck">
                <div className="left">
                    <img src={Providing1} alt="" />
                </div>
                <div className="type">
                <h5>the quick fox jumps over the lazy dog</h5>
                <span>Things on a very small scale ...</span>
                </div>
                </div>   
                <div className="fox">
                    <div className="left">
                        <img src={Providing2} alt="" />
                    </div>
                    <div className="type">
                    <h5>the quick fox jumps over the lazy dog</h5>
                    <span>Things on a very small scale ...</span>
                    </div>
                    </div> 
             </div>
      </div>
    </div>
  )
}

export default Providing

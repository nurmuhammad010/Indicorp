import React from 'react';
import './Preactica.css';
import Preactica1 from '../img/Preactica.png'
import Preactica2 from '../img/Preactica1.png'
import Preactica3 from '../img/Preactica2.png'
import Preactica4 from '../img/Preactica3.png'
function Preactica() {
  return (
    <div className='Preactica' id='product'>
      <div className="Preactica_type">
        <h3>Practice Advice</h3>
        <span>Problems trying to resolve the conflict between </span>
        <samp>the two major realms of Classical physics: Newtonian mechanics</samp>
       
      </div>
      <div className="Preactica_card">
        <div className="card_1">
          <h4>A single source of truth</h4>
          <samp>Newton thought that light was made up of particles, but then it was discovered </samp>
          <img src={Preactica1} alt="" />
        </div>
        <div className="card_2">
          <h4>Fastest way to organize</h4>
          <span>“Quantum mechanics” is the description of the behaviour of matter</span>
          <div className="img"><img src={Preactica2} alt="" /></div>
        </div>
        <div className="card_3">
          <h4>Fastest way to take action</h4>
          <span>They describe a universe consisting of bodies moving</span>
          <div className="img_1"><img src={Preactica3} alt="" /></div>
        </div>
        <div className="card_4">
          <h4>Work better together</h4>
          <span>They finally obtained a consistent description of the behaviour </span>
          <div className="img_2"><img src={Preactica4} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Preactica

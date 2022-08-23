import React from 'react'
import './index.css';
import Tag from '../Tag';
import logo  from  '../images/work.PNG'



const Card = (props) => {
  return (
    <div className='card-main'>
      <div className='card-image'> 
          <Tag title={props.tag}
          /> 
          <img className='card-img' src= {logo} alt="logo" />      
      </div>
      <div className='card-info'>
        <h1>{props.title}</h1>
        <p className='card-note'>manage your human resoure in 
          <br /> one place with ease and do much more...</p>
          <p className='low'>for as low as </p>
         <p ><span className='card-price'>{props.price}</span> per employer</p> 
      </div>
    </div>
  )
}

export default Card
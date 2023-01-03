import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

export const Card = (props) => {
  return (
      <div className="grid grid-cols-5 gap-10 text-start mb-10">
          <img src={props.img} className='col-span-1 w-full h-72 object-cover rounded-xl'/>
          <section className='col-span-4 m-auto'>
              <HiLocationMarker className="text-red font-bold text-2xl inline pb-1.5" />
              <h2 className=" font-light tracking-widest text-lg inline">&nbsp;{props.country}&nbsp;&nbsp;&nbsp;</h2>
              <a href={props.link} className=" font-light text-gray-400 tracking-widest text-lg inline underline underline-offset-4">View on Google Maps</a>
              <h1 className="font-bold text-5xl pt-2">{props.location}</h1>
              <p className='pt-5 font-bold'>{props.startDate} - {props.endDate}</p>
              <p className='pt-2 font-light pr-20'>{props.description}</p>
          </section>
          <hr className='col-span-5'/>
    </div>
  )
}

export default Card;
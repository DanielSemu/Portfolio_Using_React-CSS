import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'
import ServiceList from './ServiceList'
const data=[
  {
    id:1,
    image:Image1,
    title:"UI/UX design",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque obcaecati provident ullam nesciunt. Animi, debitis porro eos fugiat esse, nihil rerum, deserunt dolor autem mollitia ipsum in est quidem!"

  },
  {
    id:2,
    image:Image2,
    title:"Web Development",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque obcaecati provident ullam nesciunt. Animi, debitis porro eos fugiat esse, nihil rerum, deserunt dolor autem mollitia ipsum in est quidem!"

  },
  {
    id:3,
    image:Image3,
    title:"photography",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque obcaecati provident ullam nesciunt. Animi, debitis porro eos fugiat esse, nihil rerum, deserunt dolor autem mollitia ipsum in est quidem!"

  }
]
const Services = () => {
  return (
    <section className="services container section" id='services'>
      <h1 className="section_title">Services</h1>
      <div className="services_container grid">
        {
          data.map((item,i)=>{
            return( <ServiceList key={i} id={item.id} title={item.title} description={item.description} image={item.image}/>)
          })
        
    }
      </div>
    </section>
  )
}

export default Services

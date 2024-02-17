import React, { useState } from 'react'
import './portfolio.css'
import Menu from './Menu'
const Portfolio = () => {
  const [items ,setItems]= useState(Menu)
  const Everything =()=>{
    setItems(Menu)
  }
  const Art =()=>{
    const art=Menu.filter(item => item.category=="Art")
    setItems(art)
  }
  const Desing =()=>{
    const design=Menu.filter(item => item.category=="Design")
    setItems(design)
  }
  const Branding =()=>{
    const branding=Menu.filter(item => item.category=="Branding")
   setItems(branding)
  }
  const Creative =()=>{
    const creative=Menu.filter(item => item.category=="Creative")
    setItems(creative)
  }
  return (
    <section className="work container section" id='portfolio'>
      <h1 className="section_title">Recent Works</h1>
      <div className="work_filters">
        <span onClick={()=>Everything()} className="work_item">Everything</span>
        <span onClick={()=>Creative()} className="work_item">Creative</span>
        <span onClick={()=>Art()} className="work_item">Art</span>
        <span onClick={()=>Desing()} className="work_item">Design</span>
        <span onClick={()=>Branding()} className="work_item">Branding</span>
      </div>
      <div className="work_container grid">
        {items.map((elem)=>{
          const { id , image, title, category} =elem
          return(
            <div className="work_card" key={id}>
              <div className="work_thumbnaill">
                <img src={image} className='work_image' alt="" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href="#" className="work_button">
                <i className="icon-link work_button_icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio

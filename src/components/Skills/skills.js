import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>  I am skilled and passionate web designer with experience is creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. i am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img className='skillBarImg' src={UIDesign} alt='UIDesign'/>
                <div className='skillBarText'>
                    <h2>UI/UX Dedign</h2>
                    <p>Lorem is a demo text, you can write your content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={WebDesign} alt='WebDesign'/>
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Lorem is a demo text, you can write your content here.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img className='skillBarImg' src={AppDesign} alt='AppDesign'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Lorem is a demo text, you can write your content here.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
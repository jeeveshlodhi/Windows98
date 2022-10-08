import React from 'react'
import './headsection.css'
import close from '../../assets/close-icon.png'
import maximize from '../../assets/minimize.gif'
import zoom from '../../assets/zoom.gif'
import minimize from '../../assets/maximize.gif'  


const HeadSection = ({width, title, icon}) => {

  const handleDown = (e) => {
    e.target.classList.remove("start-shadow")
    e.target.classList.add('start-shadow-inverse')
  }
  const handleUp = (e) => {
    e.target.classList.add("start-shadow")
    e.target.classList.remove('start-shadow-inverse')
  }

  return (
    <div className='titlebar' style={{width: width }}>
      <div>
        <img src={icon} alt="" />
        {title}
      </div>
      <div className='titlebar-icon'>
        <img src={maximize} alt="" className='start-shadow' onMouseDown={handleDown} onMouseUp={handleUp} />
        <img src={zoom} alt="" className='start-shadow'  onMouseDown={handleDown} onMouseUp={handleUp}  />
        <img src={close} alt="" className='start-shadow'  onMouseDown={handleDown} onMouseUp={handleUp} />
      </div>
    </div>
  )
}

export default HeadSection
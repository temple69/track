import React, { useEffect, useState } from 'react'
import classes from './navigation.module.css'
import { NavLink } from 'react-router-dom'
import hamburger from '../../assets/images/icons/bars-solid.svg'

const Navigation = () => {
  const [toggle,setToggle]=useState(true)
  const toggleHandler=()=>{
    setToggle(!toggle)
  }
  useEffect(()=>{
    window.addEventListener('resize',(e)=>{
      if (e.target.innerWidth < 800) {
        setToggle(false)
      }
    })
     },[])
  
  return (
    <header className={classes.flex}>
        <article>
        <h1>MILLOXE GROUP SHIPPING</h1>
        <span>Money processing, long-distance transport of valuables, vaulting and other value-added solutions</span>
        </article>
        <button type='buttton'>Track A Consignment</button>
        <nav>{toggle&&(
            <ul>
            <li><NavLink  className={classes.active}   to="home">Welcome</NavLink></li>
            <li><NavLink  className={classes.active}   to="tracking">Tracking</NavLink></li>
                
                <li><a href="#">Our Company</a></li>
                <li><a href="#">Home Security</a></li>
                <li><a href="#">Customer Portal & Contacts</a></li>
            </ul>)}
        </nav>
        <button onClick={toggleHandler}><img src={hamburger} alt="hamburger" /></button>
    </header>
  )
}

export default Navigation
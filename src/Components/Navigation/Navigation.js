import React, { useState } from 'react'
import classes from './navigation.module.css'
import { NavLink } from 'react-router-dom'
import hamburger from '../../assets/images/icons/bars-solid.svg'

const Navigation = () => {
  
  return (
    <header className={classes.flex}>
        <article>
        <h1>MILLOXE GROUP SHIPPING</h1>
        <span>Money processing, long-distance transport of valuables, vaulting and other value-added solutions</span>
        </article>
        <button type='buttton'>Track A Consignment</button>
        <nav>
            <ul>
            <li><NavLink  className={classes.active}   to="home">Welcome</NavLink></li>
            <li><NavLink  className={classes.active}   to="tracking">Tracking</NavLink></li>
                
                <li><a href="#">Our Company</a></li>
                <li><a href="#">Home Security</a></li>
                <li><a href="#">Customer Portal & Contacts</a></li>
            </ul>
        </nav>
        <button><img src={hamburger} alt="hamburger" /></button>
    </header>
  )
}

export default Navigation
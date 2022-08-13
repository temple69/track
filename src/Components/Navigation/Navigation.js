import React, { useEffect, useState,useLayoutEffect} from 'react'
import classes from './navigation.module.css'
import { NavLink } from 'react-router-dom'
import hamburger from '../../assets/images/icons/bars-solid.svg'

const Navigation = () => {
  const [toggle,setToggle]=useState(classes.navshow)
  useLayoutEffect(()=>{
    let togglebutton = document.querySelector('#toggle')
    let select = document.querySelector('.navhide')
    console.log(select)
    togglebutton.addEventListener('click',()=>{
      if (document.querySelector('#nav').classList.contains('navhide')) {
        setToggle(classes.navhide)
       }
       else{
        document.querySelector('#nav').classList.add('navhide')
        document.querySelector('#nav').classList.remove('navShow')
        setToggle(classes.navshow)
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
        <nav className={toggle} id='nav'>
            <ul>
            <li><NavLink  className={classes.active}   to="home">Welcome</NavLink></li>
            <li><NavLink  className={classes.active}   to="tracking">Tracking</NavLink></li>
                
                <li><a href="#">Our Company</a></li>
                <li><a href="#">Home Security</a></li>
                <li><a href="#">Customer Portal & Contacts</a></li>
            </ul>
        </nav>
        <button><img src={hamburger} alt="hamburger" id='toggle' /></button>
    </header>
  )
}

export default Navigation
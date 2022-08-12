import React from 'react'
import classes from './tracking.module.css'

const Tracking = () => {
  return (
    <section className={classes.track}>
        <h2> Track Your Goods</h2>
        <form>
            <label htmlFor="track">Enter your Consignment</label>
            <input type="text" id='track'  placeholder='Enter Tracking Number'/>
            <button>Track My Goods</button>

        
        </form>

    </section>
  )
}

export default Tracking
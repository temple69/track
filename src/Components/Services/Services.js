import React from 'react'
import classes from './services.module.css'
import oil from '../../assets/images/oil.jpg'
import freight from '../../assets/images/freight.png'
import logistics from '../../assets/images/logistics.jpg'
import visa from '../../assets/images/visa.jpg'
import crypto from '../../assets/images/crypto.jpg'
import logistic from '../../assets/images/logistic.jpg'
import transport from '../../assets/images/transport.jpg'

const Services = () => {
  return (
    <section className={classes.grid}>
        <h1 className='general'>OUR SERVICES</h1>
        <div>
            <figure>
                <img src={visa} alt="oil" />
            <figcaption>
                <h4>Money Processing</h4>
            </figcaption>
            </figure>
            <figure>
                <img src={transport} alt="transport" lazy="loading" />
            <figcaption>
                <h4>Transporting Valuables</h4>
            </figcaption>

            </figure>
            <figure>
                <img src={logistics} alt="oil" />
            <figcaption>
                <h4>Vaulting</h4>
            </figcaption>

            </figure>
            <figure>
                <img src={crypto} alt="oil" />
            <figcaption>
                <h4>Value Added Solutions</h4>
            </figcaption>

            </figure>
           
        </div>
        <section className={classes.oil}>
            <div>
                <img src={oil} alt="oil" />
            </div>
            <div>
                <h2>OIL & GAS/MARINE LOGISTICS SERVICES</h2>
                <p>We serve as a one-stop solution from the transportation of drill pipes to land-based yards through rig mobilization…</p>
                <p><a href="#">Read More</a></p>
            </div>

        </section>
        <section className={classes.oil}>
        <div>
                <h2>GLOBAL FREIGHT FORWARDING SERVICES</h2>
                <p>To best support your ever-changing logistics needs, we are continuously evolving our transportation services.</p>
                <p><a href="#">Read More</a></p>
            </div>
            <div>
                <img src={freight} alt="oil" />
            </div>
           

        </section>
        <section className={classes.oil}>
            <div>
                <img src={logistic} alt="oil" />
            </div>
            <div>
                <h2>LOGISTICS</h2>
                <p>Milloxe Shipping enjoys partnerships with the majority of the world’s biggest ocean carriers…</p>
                <p><a href="#">Read More</a></p>
            </div>

        </section>
    </section>
  )
}

export default Services
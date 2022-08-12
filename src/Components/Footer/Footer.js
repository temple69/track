import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <section>
            <div>
                <img src="" alt="" />
                <article>
                    <h3>Call Us</h3>
                    <p>Uk:+447761762992</p>
                    <p>Us:+1376665069</p>
                    <p>Turkey: +905364810889</p>
                </article>
            </div>
            <div>
                <img src="" alt="" />
                <article>
                    <h3>Send us a Mail</h3>
                    <p><a href="mailto:inf@omilloxegroupshipping">info@omilloxegroupshipping</a></p>
                    
                </article>
</div>
            <div>
                <img src="" alt="" />
                <article>
                    <h3>Our Location</h3>
                    <p>United Kingdom Address Low Shore</p>
                    <p>Macduff AB44 1RE, United Kingdom /</p>
                    <p>Pay-o-matic, 115 W 23rd St, New York,</p>
                    <p>NY 10011, United States / Ergenekon</p>
                    <p>Cad No: 100 1, Setat Ticaret Merkezi</p>
                    <p>Ferikoy Istanbul</p>
                    
                </article>
                
            </div>
            <div>
                <img src="" alt="" />
                <article>
                    <h3>Working Hours</h3>
                    <p>Days:Mon-Sun</p>
                    <p>Time:<time>8.00</time> - <time>19:00</time></p>

                    
                </article>
                
            </div>
        </section>
        <p className={classes.copy}>Copyright &copy;, Milloxe Incoporated.All Rights Reserved</p>
    </footer>
  )
}

export default Footer
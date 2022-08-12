import classes from './overview.module.css'
const Overview = () => {
  return (
    <section className={classes.overview}>
        <h1 className='general'>OVERVIEW & STRATEGY</h1>
        <p>Macduff is the world’s largest cash management company. Our strong market position is supported by a new leadership with a proven track record of success, a strategic long-term strategy to drive growth and the financial strength to continue to capture market share. Our culture of continuous improvement is supported by a global team dedicated to providing exceptional customer support. Our customers include financial institutions, retailers, government agencies (including central banks and mints), jewelers and other commercial operations around the world.</p>
        <div>
        <article>
            <p>Customers in countries </p>
            <h4>100</h4>
        </article>
        <article>
            <p>Vehicles</p>
            <h4>13,500</h4>
        </article>
    
        <article>
            <p>Facility Operations</p>
            <h4>1200</h4>
        </article>
        <article>
            <p>Countries we operate in</p>
            <h4>410</h4>
        </article>
        <article>
            <p>Global workforce of Employers</p>
            <h4>62,400</h4>
        </article>
        </div>
        

    </section>
  )
}

export default Overview
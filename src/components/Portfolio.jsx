import React from 'react'
import ProImage from '../assets/project-image.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
     
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ProImage} alt="Project" />
          </div>
          <h3>this is portfolio title</h3>
          <a href="https://github.com" className='btn'>GitHub</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ProImage} alt="Project" />
          </div>
          <h3>this is portfolio title</h3>
          <a href="https://github.com" className='btn'>GitHub</a>
        </article>
      
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ProImage} alt="Project" />
          </div>
          <h3>this is portfolio title</h3>
          <a href="https://github.com" className='btn'>GitHub</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ProImage} alt="Project" />
          </div>
          <h3>this is portfolio title</h3>
          <a href="https://github.com" className='btn'>GitHub</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ProImage} alt="Project" />
          </div>
          <h3>this is portfolio title</h3>
          <a href="https://github.com" className='btn'>GitHub</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ProImage} alt="Project" />
          </div>
          <h3>this is portfolio title</h3>
          <a href="https://github.com" className='btn'>GitHub</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
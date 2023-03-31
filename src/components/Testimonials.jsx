import React from 'react'
import img1 from '../assets/testimonial1.jpeg'
import img2 from '../assets/testimonial2.jpg'
import img3 from '../assets/testimonial3.jpeg'
import img4 from '../assets/testimonial4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation,Pagination,Scrollbar,A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const people =[
  {
     avatar:{img1},
      name:'Tina Snow',
      rewiev:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat id quos quae iste error alias porro, hic voluptates eos quo natus amet blanditiis? Voluptatem laudantium sed fugit consequuntur minus?'
  },
  {
    avatar:{img2},
      name:'john wick',
      rewiev:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat id quos quae iste error alias porro, hic voluptates eos quo natus amet blanditiis? Voluptatem laudantium sed fugit consequuntur minus?'
  },
  {
    avatar:{img3},
      name:'antonio hernandez',
      rewiev:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat id quos quae iste error alias porro, hic voluptates eos quo natus amet blanditiis? Voluptatem laudantium sed fugit consequuntur minus?'
  },
  {
    avatar:{img4},
      name:'kamil simpson',
      rewiev:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat id quos quae iste error alias porro, hic voluptates eos quo natus amet blanditiis? Voluptatem laudantium sed fugit consequuntur minus?'
  },

]


  



const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Rewiev From Clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
         modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          {people.map((person,index)=>{
              const{avatar,name,rewiev}=person;

              return(
                <SwiperSlide key={index} className='testimonial'>
                    <div className="client__avatar">
                      <img src={avatar} alt="img" />
                    </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__rewiev'>
                      {rewiev}
                    </small>
                </SwiperSlide>
              )
          })}
        </Swiper>

    </section>
  )
}

export default Testimonials
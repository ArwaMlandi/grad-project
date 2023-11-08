import React from 'react'
import './PrevProjects.css'
import { BiChevronLeft } from 'react-icons/bi'
import { news } from '../../Const/news'
import Slider from 'react-slick'
function PrevProjects() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            fade: true,
          }
        } 
        
      ]
  };
  return (
    <div>
       <div className='news-up'>
        <div className='prev-up-1'>
        <span className='news-up-1-icon'><BiChevronLeft/> </span>
        المزيد
         
        
        </div>
        <div className='prev-up-2'>
        المشاريع السابقة والأنشطة

        </div>
      </div>
     <div className='prev-container'>
     <Slider {...settings} className="prev-slide">
     {news.map((item, index) => (
          <div key={index} className="prev-box-container">
          <div  className='prev-box'>
              
              <div className="prev-image">
                  <img src={item.image} alt="" />
              </div>
             
              <p>{item.Title}
              <button className="prev-button-slid"><span><BiChevronLeft/> اقرأ المزيد</span></button>
              </p>
              
          </div>
          </div>
      ))}
    </Slider>
     </div>
        
    </div>
  )
}

export default PrevProjects
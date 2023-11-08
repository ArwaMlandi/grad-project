import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import './News.css';
import rightImage from '../../assets/images/Rectangle 36.svg';
import {news} from '../../Const/news';
import {motion} from 'framer-motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function News() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          breakpoint: 768,
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
    <div className='news'>
      <div className='news-up'>
        <div className='news-up-1'>
        <span className='news-up-1-icon'><BiChevronLeft/> </span>
        المزيد
         
        
        </div>
        <div className='news-up-2'>
         الأخبار

        </div>
      </div>
      <div className='news-down'>
      <div></div>
      <div className='news-down-images'>
      <div className="best-grid">
      {news.map((item, index) => (
          <div className="best-item-text">
            <div className='news-images'>
            <img src={item.image} className='news-image'/>
            <p className="best-item-text-p">{item.Title}</p>
            <button className="news-button-item"><span><BiChevronLeft/> اقرأ المزيد</span></button>
            </div>
           
          </div>
       
      ))}
    </div>
          </div>
        <div className='news-down-oneImage'>
        <div className='cardNews'>
      <img
       src={rightImage} alt="Card Image" className='cardImageNews' />
      <div className='cardContent'>
        <p className='cardTitlee'>صدور نتائج الثانوية المهنية في حمص -بانياس-الرميلان الدورة الثانية لعام 2023</p>
        <button className="news-button"><span><BiChevronLeft/> اقرأ المزيد</span></button>
      </div>
    </div>
         

        </div>
   
      </div>
      </div>
      <div className='slider-news'>
      <div className='news-up'>
        <div className='news-up-1-slid'>
        <span className='news-up-1-icon-slid'><BiChevronLeft/> </span>
        المزيد
         
        
        </div>
        <div className='news-up-2-slid'>
         الأخبار

        </div>
      </div>
      <div className="container-news">
      <Slider {...settings} className='slid-news'>
      {news.map((item, index) => (
          <div key={index} className="slid-box-container">
          <div  className='slid-box'>
              
              <div className="slide-image">
                  <img src={item.image} alt="" />
              </div>
             
              <p>{item.Title}</p>
              <button className="news-button-slid"><span><BiChevronLeft/> اقرأ المزيد</span></button>
          </div>
          </div>
      ))}
      </Slider>
    </div>
    </div>
    </div>
  )
}

export default News
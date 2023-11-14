import React, { useEffect, useState } from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import './News.css';
import rightImage from '../../assets/images/Rectangle 36.svg';
import {news} from '../../Const/news';
import {motion} from 'framer-motion'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
function News() {
  const [data, setData] = useState([]);
  const [data1, setdata1] = useState([]);
  useEffect(()=>{
    getProduct();
  },[]);

  async function getProduct() {
    var res = await axios.get("https://mustafa-fares.nouh-agency.com/api/ar/news");
    console.log(res.data.data[1]);
    setdata1(res.data.data[1])
    setData(res.data.data);

  }
  const new4= data.slice(1,5);
 
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
      {new4.map((item, index) => (
          <div className="best-item-text">
            <div className='news-images'>
            <img src={item.img} className='news-image'/>
            <p className="best-item-text-p">{item.title}</p>
            <button className="news-button-item"><span><BiChevronLeft/> اقرأ المزيد</span></button>
            </div>
           
          </div>
       
      ))}
    </div>
          </div>
        <div className='news-down-oneImage'>
        <div className='cardNews'>
      <img
       src={data1.img} alt="Card Image" className='cardImageNews' />
      <div className='cardContent'>
        <p className='cardTitlee'> {data1.title}</p>
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
      {new4.map((item, index) => (
          <div key={index} className="slid-box-container">
          <div  className='slid-box'>
              
              <div className="slide-image">
                  <img src={item.img} alt="" />
              </div>
             
              <p>{item.title}</p>
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
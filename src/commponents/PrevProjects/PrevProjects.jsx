import React, { useEffect, useState } from 'react'
import './PrevProjects.css'
import { BiChevronLeft } from 'react-icons/bi'
import { news } from '../../Const/news'
import Slider from 'react-slick'
import axios from 'axios'
function PrevProjects() {
  const [data, setData] = useState([]);
  
    useEffect(()=>{
      getProduct();
    },[]);
  
    async function getProduct() {
      var res = await axios.get("https://mustafa-fares.nouh-agency.com/api/ar/project");
      console.log(res.data.data);
      setData(res.data.data);
    }
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
     {data.map((item, index) => (
          <div key={index} className="prev-box-container">
          <div  className='prev-box'>
              
              <div className="prev-image">
                  <img src={item.img} alt="" />
              </div>
             
              <p>{item.title}
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
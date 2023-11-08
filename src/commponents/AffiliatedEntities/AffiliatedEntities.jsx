import React from 'react'
import Slider from 'react-slick'
import { affiliatedEntitie } from '../../Const/affiliatedEntitie'
import './AffiliatedEntities.css'
function AffiliatedEntities() {
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
  const CardToShow = affiliatedEntitie.slice(0, 3);
  return (
    <div className='affilied'>
      <div  className='affi-title'>
        <h3>الجهات التابعة</h3>
      </div>
      <div className='affi-container'>
   
     {CardToShow.map((item, index) => (
          <div key={index} className="affi-box-container">
          <div  className='affi-box'>
              
              <div className="affi-image">
                  <img src={item.image} alt="" />
              </div>
             
              <p>{item.Title}
             
              </p>
              
          </div>
          </div>
      ))}
    
     </div>
     <div className='affi-container-small'>
   
   {affiliatedEntitie.map((item, index) => (
        <div key={index} className="affi-box-container">
        <div  className='affi-box'>
            
            <div className="affi-image">
                <img src={item.image} alt="" />
            </div>
           
            <p>{item.Title}
           
            </p>
            
        </div>
        </div>
    ))}
  
   </div>
    </div>
  )
}

export default AffiliatedEntities
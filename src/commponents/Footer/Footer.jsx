import React from 'react'
import './Footer.css';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineInbox,AiFillPhone} from 'react-icons/ai'
import {IoMdLogIn} from 'react-icons/io'
import {HiUsers} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
function Footer() {
  return (
    <footer className="footer_wraper">
    
    <div className="footer_container">
       
        <div className="block">
            <div className="detailes">
                <span>العنوان</span>
                <span className="line">
                    سوريا - دمشق - مشروع دمر
                </span>
               
            </div>
        </div>


        <div className="block">
            <div className="detailes">
                <span>اتصل بنا</span>
                <div className='account'>
                <span className="line-icon">
                  
                    <span>+963-11-3137930 </span>
                    <AiFillPhone className="icon" />
                </span>
                <span className="line-icon">
                    
                    <span>info@mopmr.gov</span>
                    <MdEmail className="icon" />
                </span>
                </div>
            </div>
        </div>

        

        <div className="block">
            <div className="detailes">
                <span>الرئيسية</span>
                <span className="line">
                عن الوزارة
                </span>
                <span className="line">
                    الأخبار
                </span>
                <span className="line">
                    الخدمات الالكترونية
                </span>
            </div>
        </div>

        <div className="block">
            <div className="detailes">
                <span>روابط سريعة</span>
                <span className="line">
                   أنظمة وتشريعات
                </span>
                <span className="line">
                  رئاسة مجلس الوزراء
                </span>
                <span className="line">
                    بوابة الحكومة الالكترونية السورية
                </span>
                <span className="line">
                   وزارة التنمية الادارية
                </span>
            </div>
        </div>
      
    </div>
    <div className="foot-end">
        <p>
           © 2018 MOMPMR All Rights Reserved Designed By SPC.dev
          
        </p>
      </div>
</footer>
  )
}

export default Footer
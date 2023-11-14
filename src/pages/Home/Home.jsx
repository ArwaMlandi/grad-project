import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../commponents/NavBar/NavBar'
import News from '../../commponents/News/News'
import Services from '../../commponents/Serviece/Services'
import CardMinister from '../../assets/images/minister.svg'
import PrevProjects from '../../commponents/PrevProjects/PrevProjects'
import AffiliatedEntities from '../../commponents/AffiliatedEntities/AffiliatedEntities'
import './Home.css'
import Footer from '../../commponents/Footer/Footer'
import axios from 'axios'
function Home() {
  const [dataWord, setDataWord] = useState([]);
  
  useEffect(()=>{
    getProductWord();
  },[]);

  async function getProductWord() {
    var res = await axios.get("https://mustafa-fares.nouh-agency.com/api/ar/welcome");
    console.log(res.data.data[0]);
    setDataWord(res.data.data[0]);
  }


  const form=useRef()
  return (
    <div className='home'>
        <NavBar/>
        <div className='YK-about-ministry'>
        <div className="YK-title">
          <h2>عن الوزاره </h2>
        </div>
        <div className='YK-description'>
          <p>أحدثت وزارة النفط والثروة المعدنية بموجب المرسوم التشريعي رقم 139 تاريخ 26-10-1966 المعدل بالمرسوم التشريعي رقم 121 تاريخ 19/5/1970 باسم " وزارة النفط والكهرباء وتنفيذ المشارع الصناعية " أولاً ، ثم "وزارة النفط والكهرباء والثروة المعدنية " ثانياً، ثم عدلت تسميتها إلى " وزارة النفط والثروة المعدنية " بموجب المرسوم التشريعي رقم 94 تاريخ23-9-1974.</p>
        </div>
      </div>
      <Services />
      <News/>
      <div className="speech">
        <div className="YK-ministers-speech-container">

          <div className="YK-ministers-speech-text">
            <h2> {dataWord.title}</h2>
            <p className='p1'> {dataWord.content}</p>
            <div className="YK-ministers-speech-desc">
              <p className='YK-ministers-speech-desc-t1'>{dataWord.industry}</p>
              <p className='YK-ministers-speech-desc-t2'> {dataWord.person} </p>
            </div>
          </div>
          <div className="YK-ministers-speech-card">
            <img src={dataWord.img} alt="CardMinister" />
          </div>


        </div>
      </div>
      <PrevProjects/>
      <AffiliatedEntities/>

      <div className="join">
            <div className="join-l-r">
            <div className="left-joi9n">
              
                <div className='join-title'>
              <h3> النشرة الإخبارية</h3>
                </div>
                </div>

            <div className="right-join">
              <p>:أرسل بريدك الالكتروني للحصول على رسائل بأحدث الاخبار</p>
                <form ref={form} className="email" /*onSubmit={sendEmail}*/>
                <button className="btn-join"> إرسال </button>
                <input className="email" type="email" name="user_email" placeholder="بريدك الالكتروني" />
                   
                    
                </form>
                
            </div>
            </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
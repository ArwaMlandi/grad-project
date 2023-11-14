import React, { useEffect, useState } from 'react'
import './Services.css'
import icon from "../../assets/images/icon.svg";
import { service } from '../../Const/Service'
import { getDataService } from '../Apis/Api'
import axios from 'axios';
function Services() {
 
    const [data, setData] = useState([]);
  
    useEffect(()=>{
      getProduct();
    },[]);
  
    async function getProduct() {
      var res = await axios.get("https://mustafa-fares.nouh-agency.com/api/ar/service");
     
      setData(res.data.data);
    }
  return (
    <>
      <div className="YK-Service">
        <div className="YK-Service-Title">
          <h2>الخدمات</h2>
        </div>
        <div className="container-testa">

          {service.map((ser, id) => (
            <div key={id} className="testi-box-container">
              <div className='testi-box-container-icon'>
                  <img src={icon} alt="row" />
              </div>
              <div className='testi-box-container-Title'>
                <p> {ser.name}</p>
              </div>
            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Services
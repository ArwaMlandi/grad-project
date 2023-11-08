import React from 'react'
import './Services.css'
import { service } from '../../Const/Service'

function Services() {
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
                  <img src={ser.image} alt="row" />
              </div>
              <div className='testi-box-container-Title'>
                <p> {ser.Title}</p>
              </div>
            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Services
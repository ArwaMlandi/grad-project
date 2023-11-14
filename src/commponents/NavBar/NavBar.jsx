import React, { useRef, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {  BiChevronDown,BiSearch,BiChevronLeft } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import {MdOutlineClose} from 'react-icons/md'
function NavBar() {
  const form=useRef()
  const [menueopen, setmenueopen] = useState(false);
  const [dropeopen, setdropopen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
   <div className="nav-all">
    <nav className="navbar">
      
      <div className="top-menue" onClick={() => setmenueopen((prev) => !prev)}>
        <BsList />
      </div>
     
      <ul className="menue" style={{ top: menueopen && "0" }}>
        <div className="nav-allButton">
        <form ref={form} className="nav-buttonSearch">
        <p className="search-iconBack"><BiSearch className="search-icon"/></p>
                <input className="search-word" type="search" placeholder="...ابحث" />
                   
                    
                </form>
     {/* <button className="nav-buttonSearch"><input placeholder="...ابحث" className="search-word"></input><p className="search-iconBack"><BiSearch className="search-icon"/></p></button>*/}
      <button className="nav-button">English</button>
      </div>
      
      <li
        className={`nav-item dropdown ${
          activeItem === "dropdown" ? "active" : ""
        }`}
      >
        <a
          href="#!"
          className="nav-link"
          onClick={() => handleClick("dropdown")}
        >
          الأخبار<BiChevronDown className="nav-link-icon" />
        </a>
       
        <ul className="dropdown-menu" >
          <li className="dropdown-item">
            <Link to="/option1">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option2">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option3">الاخبار</Link>
          </li>
        </ul>
      </li>
          
        <li
        className={`nav-item dropdown ${
          activeItem === "dropdown" ? "active" : ""
        }`}
      >
        <a
          href="#!"
          className="nav-link"
          onClick={() => handleClick("dropdown")}
        >
          الخدمات<BiChevronDown  className="nav-link-icon" />
        </a>
        
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <Link to="/option1">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option2">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option3">الاخبار</Link>
          </li>
        </ul>
      </li>
    
        <li
        className={`nav-item dropdown ${
          activeItem === "dropdown" ? "active" : ""
        }`}
      >
        <a
          href="#!"
          className="nav-link"
          onClick={() => handleClick("dropdown")}
        >
          عن الوزارة <BiChevronDown  className="nav-link-icon"/>
        </a>
        
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <Link to="/option1">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option2">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option3">الاخبار</Link>
          </li>
        </ul>
      </li>
    
        <li
        className={`nav-item dropdown ${
          activeItem === "dropdown" ? "active" : ""
        }`}
      >
        <a
          href="#!"
          className="nav-link"
          onClick={() => handleClick("dropdown")}
        >
          الرئيسية <BiChevronDown  className="nav-link-icon"/>
        </a>
       
        <ul className="dropdown-menu">
          <li className="dropdown-item">
            <Link to="/option1">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option2">الاخبار</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/option3">الاخبار</Link>
          </li>
        </ul>
      </li>
      <div className="close-icon" onClick={() => setmenueopen((prev) => !prev)}>
              <MdOutlineClose
                size={40}
               
                className="close-icon"
              />
              </div>
      </ul>

      <p className="nav-logo">  الجهورية العربية السورية<br/> وزارة النفط والثروة المعدنية</p>

     
      
    </nav>

    <h2 className="nav-title">عالم جديد من احدث الاليات في مجال النفط</h2>
    <p className="nav-p"> 
    بفضل جهود كوادرنا المبدعة والحثيثة من العمال
     والمهندسين لتحقيق عمل وانتاج أفضل لمسقبل واعد
     </p>
     <button className="nav-more"><span><BiChevronLeft/> اقرأ المزيد</span></button>
    </div>
    
  );
}

export default NavBar;

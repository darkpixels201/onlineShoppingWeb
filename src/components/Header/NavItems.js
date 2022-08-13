import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";

// import banner from '../../assets/img/common/nav_banner.png'

// THATS A DROPDOWN
function NavItems(props) {


  return (
<>
<li className="has-dropdown">
        <span className="main-menu-link">{props.item.name}
        <span>
          {props.item.childern ? (<FiChevronDown />) : ( <div className='sub-menu' style={{display: 'none'}}></div>)}
        </span>
         </span>

         
        <ul className="sub-menu">
          {props.item.childern ?
            <>
              {props.item.childern.map((data, index) => (
            
            <li key={index}>
                <a to={data.href}>{data.name}</a>
            </li> 
            ))} 
        </>
            :
             <li id="new-main-menu" className='sub-menu:hover d-none noHover' style={{display: "none"}}  >
             </li> 
            
             }
        
        </ul>
    </li>
</>
  )
  
}

export default NavItems
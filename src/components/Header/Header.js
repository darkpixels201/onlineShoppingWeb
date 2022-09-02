import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { MenuData } from './MenuData'
// import { NewData } from '../../Products/NewData'
import NavItems from './NavItems'
import PDA from '../../assets/img/pda-logo.png' 
import svgsearch from '../../assets/img/search.svg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdAddShoppingCart } from "react-icons/md";
import Accordion from 'react-bootstrap/Accordion';
import { FiAlignJustify, FiHeart} from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/userAction';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />




function Header() {

  const dispatch = useDispatch();

  const [menushow, setMenuShow] = useState(false);

  const menuhandleClose = () => setMenuShow(false);
  const menuhandleShow = () => setMenuShow(true);

  const [cartshow, setCartShow] = useState(false);

  const carthandleClose = () => setCartShow(false);
  const carthandleShow = () => setCartShow(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, getname } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };


  return (
    <header className="header-section d-xl-block">
<div >
<div className="header-bottom  section-fluid sticky-header sticky-color--golden">
<div className="row">
    <div className="col-12 d-flex align-items-center justify-content-evenly">
        <div >
            <div className="logo" style={{height: 100, width: 100}}>
                <Link to="/#"><img style={{height: 150, width: 150, marginTop: -20}} src={PDA} alt="logo"  /></Link>
            </div>
        </div>
        <div className="main-menu menu-color--black menu-hover-color--golden d-none d-xl-block mt-3">
            <nav>
                {/* THATS A SIMPLE NAVBARR */}
                <ul>
                    {MenuData.map((item, index) => (
                        <NavItems item={item} key={index} />
                        // <NewData
                    ))}
                </ul>
            </nav>
        </div>

        <div className='right-nav-side '>    
                    <li className="dropdown">
            <span  className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <Link to="/#"><img src={PDA} alt="logo" width="32" height="32" className="rounded-circle me-10"  /></Link>
            </span>

            {userInfo ?
             (<ul className="dropdown-menu dropdown-menu-light text-small shadow">
            <Link to="/fashion" style={{textDecoration: 'none'}}> <li><span className="dropdown-item" >Dashboard</span></li></Link>
            <Link to="/fashion" style={{textDecoration: 'none'}}> <li><span className="dropdown-item" >Profile</span></li></Link>
               <Link to="/fashion" style={{textDecoration: 'none'}}> <li><span className="dropdown-item" >Settings</span></li></Link>
                <li className="dropdown-divider"> </li>
                <a href='/#' style={{textDecoration: 'none'}} onClick={logoutHandler} > <li><span className="dropdown-item" >Sign out</span></li></a>
                 </ul>) : ( <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                 <Link to="/login" style={{textDecoration: 'none'}}> <li><span className="dropdown-item" >Login</span></li></Link>
                 <Link to="/signup" style={{textDecoration: 'none'}}> <li><span className="dropdown-item" >Signup</span></li></Link>
                 <Link to="/signup" style={{textDecoration: 'none'}}> <li><span className="dropdown-item" >Become a Seller</span></li></Link>
                </ul>
                 )}
                
            </li>

            <li onClick={carthandleShow} style={{cursor: 'pointer', lineHeight: 2 }} className='icon-cart'>
            <i style={{position: "relative"}}><MdAddShoppingCart size="1.75em" /></i> 
            <span style={{ position:"absolute" }} className='icon-style cart-icon-style'>{3}</span>
            </li>
            <Offcanvas show={cartshow} onHide={carthandleClose} placement={'start'}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>PDA</Offcanvas.Title>
                </Offcanvas.Header>
                   {userInfo ? ( <Offcanvas.Body> {getname} </Offcanvas.Body> ) : ( <Offcanvas.Body> {"No Name"} </Offcanvas.Body> )}
            </Offcanvas>


            <li className='icon-heart'>
            <i style={{position: "relative", lineHeight: 2}} >< FiHeart size="1.75em" /></i>
            <span style={{ position:"absolute" }} className='icon-style wish-icon-style'>{3}</span>
            </li>

            <li >
                <span   className="search_width icon-search" style={{lineHeight: 2}} 
                // onClick={""}
                 >
                    <img src={svgsearch} alt="img" />
                </span>
            </li>

            <li>
            <i onClick={menuhandleShow} style={{cursor: 'pointer', lineHeight: 2}}><FiAlignJustify size="1.75em" /></i>
            </li>

            <Offcanvas show={menushow} onHide={menuhandleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Accordion >
                    <Accordion.Item eventKey="0" className='border-0' >
                        <Accordion.Header >Home</Accordion.Header>
                        <Accordion.Body className='main-body'>
                      {/* <Link></Link>   */}
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Furniture</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Fashion</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Sports</button> </Link>
                        
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className='border-0'>
                        <Accordion.Header>Shop</Accordion.Header>
                        <Accordion.Body className='main-body'>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Shop layout</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">other pages</button> </Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='border-0'>
                        <Accordion.Header>Building</Accordion.Header>
                        <Accordion.Body className='main-body'>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Circket</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Football</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Tennis</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Hockey</button> </Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='border-0'>
                        <Accordion.Header>Contact</Accordion.Header>
                        <Accordion.Body className='main-body'>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Shop</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Shop</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Shokjdnvkjsdvnp</button> </Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='border-0'>
                        <Accordion.Header>Blog</Accordion.Header>
                        <Accordion.Body className='main-body'>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Cricket Football</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Tennis</button> </Link>
                        <Link to="/fashion" className='text-decoration' > <button className="btn rounded collapsed mb-1 d-flex  main-btn ">Hockey</button> </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Offcanvas>
            
        </div>
                                     {/* <ul className="header-action-link action-color--black action-hover-color--golden">
                                        <li>

                                            {favorites.length
                                                ? <a href="#offcanvas-wishlish" onClick={""}><i className='my-wish-list'><MdAddShoppingCart size="1.5em" /></i> <span className="item-count">{5}</span></a>
                                                : <a href="#offcanvas-wishlish" ><i className="fa fa-heart"></i><span className="item-count">{favorites.length}</span></a>
                                            }
                                        </li>
                                        <li>
                                            {carts.length
                                                ? <a href="#!" className="offcanvas-toggle" onClick={""}><i className='my-shopping-cart'><MdAddShoppingCart size="1.5em" /></i><span className="item-count">{8}</span></a>
                                                : <a href="#!" className="offcanvas-toggle"><i ></i><span className="material-symbols-outlined">{carts.length}</span></a>
                                                // <span class="material-symbols-outlined">shopping_cart</span>
                                            }
                                        </li>
                                        <li>
                                            <a href="#search" className="search_width" onClick={""} >
                                                <img src={svgsearch} alt="img" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#offcanvas-about" className="offacnvas offside-about offcanvas-toggle" onClick={""}>
                                                <i className="fa fa-bars"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </header>
  )
}

export default Header
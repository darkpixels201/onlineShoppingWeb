import { 
    CSidebarNav,
    CSidebar,
    CSidebarBrand,
    CNavTitle,
    CNavItem,
    CNavGroup,
    CBadge,
    CSidebarToggler,
    CNavLink,
 } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer } from '@coreui/icons'


import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebarnav() {
  return (
    <div>
        
<CSidebar>
  <CSidebarBrand>Sidebar Brand</CSidebarBrand>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
      {/* <Link to='/dashboards'> */}
    <CNavItem >
    {/* to="/dashboard" component={NavLink} */}
      <CNavLink to="/furniture" component={NavLink}>
      <CIcon customClassName="nav-icon" icon={cilSpeedometer}  />

      Nav item
      
      </CNavLink>
    </CNavItem>
      {/* </Link> */}
    <CNavItem href="#">
      <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
      With badge
      <CBadge color="primary ms-auto">NEW</CBadge>
    </CNavItem>
    <CNavGroup toggler="Nav dropdown">
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown item
      </CNavItem>
    </CNavGroup>
  </CSidebarNav>
  <CSidebarToggler />
</CSidebar>
    </div>
  )
}

export default Sidebarnav
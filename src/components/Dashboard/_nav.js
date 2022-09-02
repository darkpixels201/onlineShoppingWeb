import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
import { RiProductHuntLine } from "react-icons/ri";
import { TbReport, TbStack2, TbDiscount } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Report',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Users',
  //   to: '/users',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  {
    component: CNavGroup,
    name: 'Report',
    to: '/report',
    icon: <TbReport size={25} style={{marginRight: '20px'}} />,
    items: [
      {
        component: CNavItem,
        name: 'Sale Report',
        to: '/report/SaleReport',
      },
      {
        component: CNavItem,
        name: 'Purchase Report',
        to: '/report/PurchaseReport',
      },
      {
        component: CNavItem,
        name: 'Profit Report',
        to: '/report/ProfitReport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Product',
    to: '/buttons',
    icon: <RiProductHuntLine size={25} style={{marginRight: '20px'}} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Product',
        to: '/product/AddProduct',
      },
      {
        component: CNavItem,
        name: 'Manage Product',
        to: '/product/ManageProduct',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <AiOutlineUser size={25} style={{marginRight: '20px'}} />,
    items: [
      {
        component: CNavItem,
        name: 'Employees',
        to: '/users/EmployeeUser',
      },
      {
        component: CNavItem,
        name: 'Customer',
        to: '/users/CustomerUser',
      },
     
    ],
  },
  {
    component: CNavGroup,
    name: 'Category',
    icon: <BiCategory size={25} style={{marginRight: '20px'}} />,
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/category/CategoriesList',
      },
      {
        component: CNavItem,
        name: 'Add Category',
        to: '/category/AddCategory',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Order Manager',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pending',
        to: '/order/PendingOrder',
      },
      {
        component: CNavItem,
        name: 'On Way',
        to: '/order/OnWayOrder',
      },
      {
        component: CNavItem,
        name: 'Delivered',
        to: '/order/DeliverdOrder',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Discount',
    icon: <TbDiscount size={25} style={{marginRight: '20px'}}/>,
    items: [
      {
        component: CNavItem,
        name: 'Discounts',
        to: '/discount/DiscountList',
      },
      {
        component: CNavItem,
        name: 'Add Discount',
        to: '/discount/AddDiscount',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Stock',
    to: '/Stock',
    icon: <TbStack2 size={25} style={{marginRight: '20px'}}/>,
},
]

export default _nav

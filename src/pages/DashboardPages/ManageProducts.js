import React from "react";

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import '../../assets/css/style.css'
import {
  cilPeople,
} from "@coreui/icons";

import avatar1 from "../../assets/images/avatars/1.jpg";
import avatar2 from "../../assets/images/avatars/2.jpg";
import avatar3 from "../../assets/images/avatars/3.jpg";
import avatar4 from "../../assets/images/avatars/4.jpg";
import avatar5 from "../../assets/images/avatars/5.jpg";
import avatar6 from "../../assets/images/avatars/6.jpg";

import { BsTrash, BsPlusLg } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { Button } from "react-bootstrap";

function ManageProducts() {


    // Sample how to write Icons in Array
    // payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
    // activity: {Icon: <TiEdit />},

  const tableExample = [
    {
      id: 1,
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "USA" },
      
      payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
      activity: {Icon: <TiEdit />},
    },
    {
      id: 2,
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "Brazil", flag: cifBr },
      
      payment: { name: "Visa", Icon:<BsTrash color="red"/> },
      activity: "5 minutes ago",
    },
    {
      id: 3,
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed",  stock: 5, purchasePrice: 100,
      salePrice: 200, status: "InActive", new: true, registered: "Jan 1, 2021" },
      // stock: { name: "India", flag: cifIn },
      
      payment: { name: "Stripe", Icon:<BsTrash color="red"/> },
      activity: "1 hour ago",
    },
    {
      id: 4,
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo",  stock: 5, purchasePrice: 100,
      salePrice: 200, status: "Active", new: true, registered: "Jan 1, 2021" },
      // stock: { name: "France", flag: cifFr },
      
      payment: { name: "PayPal", Icon:<BsTrash color="red"/> },
      activity: "Last month",
    },
    {
      id: 5,
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "Spain", flag: cifEs },
      
      payment: { name: "Google Wallet", Icon:<BsTrash color="red"/>},
      activity: "Last week",
    },
    {
      id: 6,
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },
      
      payment: { name: "Amex", Icon:<BsTrash color="red" /> },
      activity: "Last week",
    },
    {
      id: 1,
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "USA" },
      
      payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
      activity: {Icon: <TiEdit />},
    },
    {
      id: 2,
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "Brazil", flag: cifBr },
      
      payment: { name: "Visa", Icon:<BsTrash color="red"/> },
      activity: "5 minutes ago",
    },
    {
      id: 3,
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed",  stock: 5, purchasePrice: 100,
      salePrice: 200, status: "InActive", new: true, registered: "Jan 1, 2021" },
      // stock: { name: "India", flag: cifIn },
      
      payment: { name: "Stripe", Icon:<BsTrash color="red"/> },
      activity: "1 hour ago",
    },
    {
      id: 4,
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo",  stock: 5, purchasePrice: 100,
      salePrice: 200, status: "Active", new: true, registered: "Jan 1, 2021" },
      // stock: { name: "France", flag: cifFr },
      
      payment: { name: "PayPal", Icon:<BsTrash color="red"/> },
      activity: "Last month",
    },
    {
      id: 5,
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },
      // stock: { name: "Spain", flag: cifEs },
      
      payment: { name: "Google Wallet", Icon:<BsTrash color="red"/>},
      activity: "Last week",
    },
    {
      id: 6,
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",
        stock: 5,
        purchasePrice: 100,
        salePrice: 200,
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      // email: { name: "Poland", flag: cifPl },
      
      payment: { name: "Amex", Icon:<BsTrash color="red" /> },
      activity: "Last week",
    },
  ];

  return (
    <>
   {/* <button type="submit" className="btn rounded" style={{backgroundColor: '#999', color: '#333', display: 'flex', justifyContent: 'flex-end'}}>Add Product</button> */}
   <div className="d-flex flex-row-reverse " style={{height:'100px'}} >
    <button className="text-light bg-secondary w-25 h-50 float-left rounded" > <BsPlusLg style={{marginRight: 15}} />Add Products</button>
   </div>
   {/* <Button variant="secondary" className="d-flex flex-row-reverse">Primary</Button> */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Products List</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow className="stick-top" >
                    <CTableHeaderCell>#</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Image</CTableHeaderCell>
                    <CTableHeaderCell>Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">stock</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Sale Price</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Purchase Price</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Delete 
                    </CTableHeaderCell>
                    <CTableHeaderCell>Edit</CTableHeaderCell>
                    <CTableHeaderCell>View</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.id}</div>
                        </CTableDataCell>
                      <CTableDataCell className="text-center">
                        
                        <img
                          className="rounded"
                          style={{height: 80, width: 80}}
                          size="xl"
                          src={item.avatar.src}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.user.stock}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <div>{item.user.purchasePrice}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <div>{item.user.salePrice}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                       
                        <div style={{color:item.user.status == "InActive" ? 'red': 'green'}}>{item.user.status}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center" >
                      <BsTrash className="cursor-pointer"  color="red"/>
                      </CTableDataCell>
                      <CTableDataCell>
                        <TiEdit className="cursor-pointer" size={'20'} style={{marginLeft: 7}} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <FaEye className="cursor-pointer" size={'20'} style={{marginLeft: 10}} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );

}

export default ManageProducts;

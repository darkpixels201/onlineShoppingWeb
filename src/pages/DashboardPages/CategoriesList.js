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
import '../../assets/css/style.css'

import avatar1 from "../../assets/images/avatars/1.jpg";
import avatar2 from "../../assets/images/avatars/2.jpg";
import avatar3 from "../../assets/images/avatars/3.jpg";
import avatar4 from "../../assets/images/avatars/4.jpg";
import avatar5 from "../../assets/images/avatars/5.jpg";
import avatar6 from "../../assets/images/avatars/6.jpg";

import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

function CategoriesList() {

    // Sample how to write Icons in Array
    // payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
    // activity: {Icon: <TiEdit />},

  const tableExample = [
    {
      avatar: { src: avatar1, status: "success" },
      user: {
        name: "Yiorgos Avraamu",
        status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },
      
      payment: { name: "Mastercard", Icon:<BsTrash color="red"/> },
      activity: {Icon: <TiEdit />},
    },
    {
      avatar: { src: avatar2, status: "danger" },
      user: {
        name: "Avram Tarasios Avram Tarasios",
        status: "Active",
        new: false,
        registered: "Jan 1, 2021",
      },
      
      payment: { name: "Visa", Icon:<BsTrash color="red"/> },
      activity: "5 minutes ago",
    },
    {
      avatar: { src: avatar3, status: "warning" },
      user: { name: "Quintin Ed",  status: "InActive", new: true, registered: "Jan 1, 2021" },
      // email: { name: "India", flag: cifIn },
      
      payment: { name: "Stripe", Icon:<BsTrash color="red"/> },
      activity: "1 hour ago",
    },
    {
      avatar: { src: avatar4, status: "secondary" },
      user: { name: "Enéas Kwadwo",   status: "Active", new: true, registered: "Jan 1, 2021" },
      // email: { name: "France", flag: cifFr },
      
      payment: { name: "PayPal", Icon:<BsTrash color="red"/> },
      activity: "Last month",
    },
    {
      avatar: { src: avatar5, status: "success" },
      user: {
        name: "Agapetus Tadeáš",        
        status: "InActive",
        new: true,
        registered: "Jan 1, 2021",
      },      
      payment: { name: "Google Wallet", Icon:<BsTrash color="red"/>},
      activity: "Last week",
    },
    {
      avatar: { src: avatar6, status: "danger" },
      user: {
        name: "Friderik Dávid",       
         status: "Active",
        new: true,
        registered: "Jan 1, 2021",
      },      
      payment: { name: "Amex", Icon:<BsTrash color="red" /> },
      activity: "Last week",
    },
  ];

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Categories List</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      {"#"}
                    </CTableHeaderCell>
                    <CTableHeaderCell>Category</CTableHeaderCell>
                    
                    <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">
                      Delete 
                    </CTableHeaderCell>
                    <CTableHeaderCell>Edit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar
                          size="md"
                          src={item.avatar.src}
                          status={item.avatar.status}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? "New" : "Recurring"}</span> |
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      
                      <CTableDataCell className="text-center">
                       
                        <div style={{color:item.user.status === "InActive" ? 'red': 'green'}}>{item.user.status}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center" >
                      <BsTrash className="cursor-pointer"  color="red"/>
                      </CTableDataCell>
                      <CTableDataCell>
                        
                        <TiEdit className="cursor-pointer" size={'20'} />
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

export default CategoriesList;

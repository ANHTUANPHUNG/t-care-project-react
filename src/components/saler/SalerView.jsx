import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { LegalNotice } from '../carehub/LegalNotice';
import LogoProject from '../logoProject/LogoProject';
import { ContainerViewUser } from '../viewUser/containerViewUser/ContainerViewUser';
import { ContainerViewSale } from './ContainerViewerSale';

export default function SalerView() {
  const [customers, setCustomers] = useState([]);
	const [checkCustomer,setCheckCustomer] = useState(true)

  useEffect(() => {
		loadCustomers();
	}, [checkCustomer]);

  const {id} = useParams()
	let navigate = useNavigate()
	const loadCustomers = async () => {
		const customers = await axios.get(
			`http://localhost:8080/api/carts/sale/${id}`,
		);
        console.log(
            customers.data
        );
			setCustomers(customers.data);

    }

   


    const handleDeleteCustomer = (id) => {
      axios
        .delete(`http://localhost:8080/api/carts/deleteCustomerBySale/${id}`)
        .then((response) => {
          console.log(response);
          toast.success("Xóa khách hàng thành công", { autoClose: 1000 });
          loadCustomers();
        })
        .catch((error) => {
          console.error(error);
          toast.error("Xóa thất bại");
        });
    }
  return (
    <>
 <ContainerViewSale/>
    <div>
      
    <div className="container">
     <header>
         <nav className="navbar bg-body-tertiary">
             <div className="container-fluid">
                 <a className="navbar-brand">Danh sách khách hàng</a>
                 <div className="d-flex" style={{gap: "10px"}}>
                     
                     <button type="button" className="btn btn-outline-light" >
                         
                         <Link
                             style={{textDecoration: "none", color:"#0d6efd"}}
                              to={`/add-customer/${id}`}
                             >
                                 
                                 <i className="far fa-plus-square"></i>
                         Thêm khách hàng mới
                        </Link>
                     </button>
                 </div>
             </div>
         </nav>
     </header>

     <div className="content">
         <table id="tbCustomer" className="table table-hover">
             <thead>
                 <tr>
                  
                     <th>Họ Tên</th>
                     <th>Địa chỉ</th>
                     <th>Số điện thoại</th>
                     <th>Ngày thuê</th>
                     <th>Quan hệ</th>
                     <th>Gói</th>
                     <th>Ghi chú người thuê</th>
                     <th>Ghi chú người nhà</th>
                     <th>Ghi chú của sale</th>
                     <th></th>
                     <th colSpan="2" style={{textAlign: "center"}}>...</th>

                 </tr>
             </thead>
             <tbody>
  {customers &&
    customers.map((customer) => (  
      <tr key={customer.id}>
        <td style={{maxWidth: "100px"}}> {customer.lastName ? customer.lastName : ''} {customer.firstName ? customer.firstName : ''} ({customer.gender === 'MALE'
            ? 'Nam'
            : customer.gender === 'FEMALE'
            ? 'Nữ'
            : 'Khác'})</td>
        <td style={{maxWidth:'170px'}}>
          {customer.locationPlace ? customer.locationPlace : ''}
        </td>
        <td>{customer.phone}</td>
        <td style={{maxWidth: "150px", minWidth: "120px"}}>{customer.timeStart !== null ? customer.timeStart : ''} <br />{customer.timeEnd !== null ? customer.timeEnd : ''}</td>
        <td>
          {customer.memberOfFamily !== null ?
            (customer.memberOfFamily === 'MYPARENT' ? 'Cha/Mẹ' :
            (customer.memberOfFamily === 'MYSPOUSE' ? 'Vợ/Chồng' :
            (customer.memberOfFamily === 'MYSELF' ? 'Bản thân' :
            (customer.memberOfFamily === 'MYGRANDPARENTS' ? 'Ông/Bà' :
            'Khác')))) : ''}
        </td>
        <td style={{maxWidth: "150px"}}>{customer.serviceGeneral} </td>
        <td style={{maxWidth: "150px"}}>{customer.noteForEmployee}</td> 
        <td style={{maxWidth: "150px"}}>{customer.noteForPatient}</td> 
        <td style={{maxWidth: "150px"}}>{customer.saleNote}</td> 
        
        <td className="mx-2">
          <Link className="btn btn-warning"
          to={`/edit-customer/${id}/${customer.id}`}
          >
            
            <FaEdit />
          </Link>
        </td>
        <td className="mx-2">
          <button className="btn btn-danger"
          onClick={() => handleDeleteCustomer(customer.id)}
          >
            
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    ))}
</tbody>
         </table> 
     </div>
     
 </div>

 </div>
 </>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { LegalNotice } from '../carehub/LegalNotice';
import LogoProject from '../logoProject/LogoProject';
import { ContainerViewUser } from '../viewUser/containerViewUser/ContainerViewUser';

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
			"http://localhost:8080/api/carts/sale/"+id,
		);
        console.log(
            customers.data
        );
			setCustomers(customers.data);

    }

    const handleDelete = async (id) => {
        console.log(id);
		try {
            await axios.delete(`http://localhost:3000/customers/${id}`);
			loadCustomers();
			toast.success("Xoá khách hàng thành công",{autoClose: 1000});
		} catch (error) {
			
		}
	};
  return (
    <>
 <ContainerViewUser/>
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
                             to={`/add-customer`}
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
                     <th>Mã khách hàng</th>
                     <th>Tên</th>
                     <th>Họ</th>
                     <th>Giới tính</th>
                     <th>Ngày bắt đầu thuê</th>
                     <th>Ngày hết hạn</th>
                     <th colSpan="3" style={{textAlign: "center"}}>Action</th>

                 </tr>
             </thead>
             <tbody>
                 {customers && customers
                  .map((customer) => (
                     <tr key={customer.id}>
                 <td>{customer.id}</td>
                 <td>{customer.firstName}</td>
                 <td>{customer.lastName}</td>
                 <td>{customer.gender === 'MALE' ? 'Nam' : customer.gender === 'FEMALE' ? 'Nữ' : 'Khác'}</td>
                 <td>{customer.timeStart}</td>
                 <td>{customer.timeEnd}</td>
                 <td className="mx-2">
                  <Link
                    to={`/student-profile/${customer.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-student/${customer.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(customer.id)}
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

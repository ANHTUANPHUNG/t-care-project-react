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

   
    const handleAddCustomer = () => {
      axios
        .post(`http://localhost:8080/api/carts/cartSale/${id}`)
        .then((response) => {
          console.log(response);
          const customerId = response.data
          toast.success("Thêm khách hàng mới thành công", { autoClose: 1000 });
         navigate("/user/address/"+customerId)
        })
        .catch((error) => {
          console.error(error);
          toast.error("Thêm khách hàng mới thất bại");
        });
    };

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
                            onClick={handleAddCustomer}
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
                     <th>Số điện thoại</th>
                     <th>Ngày bắt đầu thuê</th>
                     <th>Ngày hết hạn</th>
                     <th colSpan="3" style={{textAlign: "center"}}>Action</th>

                 </tr>
             </thead>
             <tbody>
  {customers &&
    customers.map((customer) => (
      <tr key={customer.id}>
        <td>{customer.id}</td>
        <td>{customer.firstName ? customer.firstName : ''}</td>
        <td>{customer.lastName ? customer.lastName : ''}</td>
        <td>
          {customer.gender === 'MALE'
            ? 'Nam'
            : customer.gender === 'FEMALE'
            ? 'Nữ'
            : 'Khác'}
        </td>
        <td>{customer.phone}</td>
        <td>{customer.timeStart !== null ? customer.timeStart : ''}</td>
        <td>{customer.timeEnd !== null ? customer.timeEnd : ''}</td>
        <td className="mx-2">
          <Link
            className="btn btn-info"
          >
            <FaEye />
          </Link>
        </td>
        <td className="mx-2">
          <Link className="btn btn-warning">
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

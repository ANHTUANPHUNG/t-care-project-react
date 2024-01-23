import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaAddressCard, FaEdit, FaExchangeAlt, FaTrashAlt } from "react-icons/fa";
import { ContainerViewSale } from './ContainerViewerSale';
import Search from './search';
import Swal from 'sweetalert2';

export default function SaleContract() {
  const [contracts, setContracts] = useState([]);
  const [search, setSearch] = useState(""); 

  useEffect(() => {
		loadContracts();
	}, []);

  const {id} = useParams()
	let navigate = useNavigate()
	const loadContracts = async () => {
		const contracts = await axios.get(
			`http://localhost:8080/api/contracts`,
		);
        console.log(
            contracts.data.content
        );
        setContracts(contracts.data.content);

    }

   
    // const handleOnClick = (id) => {
    //   console.log(id);
    //   axios
    //   .get(`http://localhost:8080/api/carts/${id}`)
    //   .then((response) => {
    //     console.log(response.data);
    //     Swal.fire({
    //       title: 'Yêu cầu khách chuyển: ' + response.data.totalAmount,
    //       showCancelButton: true,
    //       confirmButtonText: 'OK',
    //       cancelButtonText: 'Tạo hợp đồng',
    //     }).then((result) => {
    //       if (result.isConfirmed) {
            
    //       } else if (result.dismiss === Swal.DismissReason.cancel) {
    //        axios.post(`http://localhost:8080/api/contracts/createContract/${id}`).then(e => loadcontracts())
    //        toast.success("Tạo hợp đồng thành công")
           
    //       }
    //     });
    
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
    // }

    // const handleDeletecontract = (id) => {
    //   axios
    //     .delete(`http://localhost:8080/api/carts/deletecontractBySale/${id}`)
    //     .then((response) => {
    //       console.log(response);
    //       toast.success("Xóa khách hàng thành công", { autoClose: 1000 });
    //       loadcontracts();
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       toast.error("Xóa thất bại");
    //     });
    // }
  return (
    <>
 <ContainerViewSale/>
    <div>
      
    <div className="container">
     <header>
     <div className="d-flex justify-content-end">
      <Search search={search} setSearch={setSearch} />
    </div>
         <nav className="navbar bg-body-tertiary">
             <div className="container-fluid">
                 <a className="navbar-brand">Danh sách hợp đồng</a>
                 <div className="d-flex" style={{gap: "10px"}}>
                     
                     <button type="button" className="btn btn-outline-light" >
                     </button>
                 </div>
             </div>
         </nav>
     </header>

     <div className="content">
         <table id="tbcontract" className="table table-hover">
             <thead>
                 <tr>
                  
                     <th>Họ Tên</th>
                     <th>Địa chỉ</th>
                     <th>Số điện thoại</th>
                     <th>Ngày thuê</th>
                     <th>Gói</th>
                     <th>Ngày tạo hợp đồng</th>
                     <th>Tổng giá tiền</th>

                     <th></th>
                     <th colSpan="2" style={{textAlign: "center"}}>...</th>

                 </tr>
             </thead>
             <tbody>
  {contracts &&
    contracts
    .filter(
      (contract) =>
      contract.customerName.toLowerCase().includes(search.toLowerCase()) ||
      contract.customerPhone.toLowerCase().includes(search.toLowerCase())
    )
    .map((contract) => (  
      <tr key={contract.id}>
        <td>{contract.customerName}</td>    
        <td style={{maxWidth: "300px"}}>{contract.location.name}</td>
        <td>{contract.customerPhone}</td>
        <td style={{maxWidth: "150px", minWidth: "120px"}}>{contract.timeStart !== null ? contract.timeStart : ''} <br />{contract.timeEnd !== null ? contract.timeEnd : ''}</td>
        <td style={{maxWidth: "150px"}}>{contract.nameService} </td>
        <td style={{maxWidth: "150px"}}>{contract.createAt}</td> 
        <td style={{maxWidth: "150px"}}>{contract.totalAmount + " "}VND</td> 
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

import React from "react";
import "./AssistantSignIn.css";
import { FormSignIn } from "../../formSignIn/FormSignIn";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import EmployeeServiceAPI from "../../../../service/employeeServiceAPI";

const formSignIn = (
    <div className="" style={{ display: "flex", margin: "5% 12% 0 12%" }}>
        <div style={{ width: "60%", padding: "5%", backgroundColor: "white" }}>
            <FormSignIn
                url={"/assistant/address"}
                termAgreed={
                    "Bạn cần phải đủ 18 tuổi trở lên để sử dụng T-Care.com. Khi chọn vào ô này, bạn đã chấp thuận với điều khoản và dịch vụ của công ty chúng tôi."
                }
                marginContent={"0 0"}
                marginContainer={"0 0"}
                marginHeader={"Gia nhập T-Care ngay bây giờ!"}
                color={"#213f5f"}
                checkRole={"ROLE_EMPLOYEE"}
                api={EmployeeServiceAPI.signInEmployee}
            />
        </div>
        <div style={{ margin: "200px 30px", width: "40%" }}>
            <img
                style={{ width: "100px", marginBottom: "20px" }}
                src="https://res.cloudinary.com/dw4xpd646/image/upload/v1706197105/product/13be173b-c303-4d66-89bb-b0b7e5cf75b4.jpg?fbclid=IwAR0C-jKWMI7ygkuLFz5hc7b5MX1Q_PxsFtU_o7Q949OhHE-_rukeafjtPsc"
                alt=""
            />
            <p style={{ fontSize: "30px" }}>Tìm kiếm công việc hỗ trợ ngay bây giờ</p>
            <p>Chỉ tốn vài phút để đăng kí thông tin!</p>
        </div>
    </div>
);

export function AssistantSignIn() {
    return (
        <>
            <NavBarFindJob children={formSignIn} />
        </>
    );
}

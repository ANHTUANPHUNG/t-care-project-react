import React, { useState } from "react";
import "./Bio.css";
import { NavBarFindJob } from "../navBarFindJob/NavBarFindJob";
import { SideBarFindJob } from "../sideBarFindJob/SideBarFindJob";
import { Button, TextField } from "@mui/material";
import HighlightIcon from "@mui/icons-material/Highlight";
import { NavLink } from "react-router-dom";
import { ButtonForMe } from "../../../ButtonForMe";
import ModalUnstyled from "../../../ModalToMe";
import { Grid } from '@mui/material/Grid';
export function Bio() {
  const [bioText, setBioText] = useState("");
  const [checkModal, setCheckModal] = useState(false);
  const remainingCharacters = 100 - bioText.length;
  const formTips = (
    <>
      <h2 id="unstyled-modal-title" className="modal-title">
        Tips to create a bio and get the right job
      </h2>
      <ul style={{ width: "100%" }} className="modal-description">
        <li>Create a must-read bio with lots of details so families get your vibe</li>
        <li>Set expectations by telling families what type of job you're looking for</li>
        <li>Tell families how you've come to love what you do</li>
      </ul>
      <p>
        <strong>Examples:</strong>
      </p>
      <p style={{ margin: 0 }}>
        <strong>Alice B from Oakland, CA</strong>
      </p>
      <span>
        I'm a positive and energetic mother of three and grandmother to three grandchildren. For
        several years, I worked on and off in daycare centers mostly because I love working with
        kids. Recently, I've been busy helping raise my grandbabies! Now that the grandkids are in
        school, I'm looking for a way to earn a little extra money while doing the thing I love. I'm
        confident, energetic, and fun. I do think kids are kids, but it's up to adults to teach them
        to respect others, nature, and the world around them. My passion is watching and teaching
        kiddos about this fantastic world around us.
      </span>
      <p style={{ margin: "20px 0 0 0" }}>
        <strong>Gina S from Somerville, MA</strong>
      </p>
      <span>
        Hi! I am a very reliable, patient, and creative person who has approximately 15 years of
        experience caring for children, from infants to teenagers. With me, your children will
        receive appropriate care, and I'm willing to do additional other tasks if requested.
        Personally, I'm an organizer, planner, and multitasker, so minimum supervision is required.
        With all my skills and experience, I'm able to provide a supervised, safe, and stable
        environment for your little ones.
      </span>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Button
          onClick={() => setCheckModal(false)}
          style={{ backgroundColor: "#213f5f", color: "white", width: "30%" }}
        >
          Got it
        </Button>
      </div>
    </>
  );
  const bio = (
    <div className="col-9 " style={{ paddingTop: "20px" }}>
      <h4 className="" style={{ marginBottom: "20px" }}>
        Tiểu sử của tôi
      </h4>
      <span>Thêm vào tiêu đề (Ví dụ: Luôn mỉm cười dưới mọi hoàn cảnh)</span>
      <div style={{ margin: "20px 0" }}>
        <TextField
          sx={{ width: "70%" }}
          size="small"
          id="outlined-basic"
          label="Tiêu đề tiểu sử"
          variant="outlined"
        />
      </div>
      <div style={{ width: "70%", paddingBottom: "20px" }}>
        <span>
          Giới thiệu bản thân với gia đình bằng cách viết tiểu sử. Chúng tôi đã bắt đầu một bản nháp, nhưng bạn cần phải chỉnh sửa nó
          và viết lại thêm chi tiết. Nó phải có ít nhất 100 kí tự
        </span>
      </div>
      <div>
        <textarea
          style={{ height: "100px", width: "70%" }}
          name="Size"
          placeholder="Tôi có một năm kinh nghiệm làm việc. Tôi có thể sửa đèn và giúp dọn dẹp nhà. "
          onChange={(e) => setBioText(e.target.value)}
        />
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-between",
          margin: "15px 0",
          cursor: "pointer",
        }}
      >
        <div onClick={() => setCheckModal(true)}>
          <HighlightIcon /> <span style={{ color: "blue" }}>Lời Khuyên</span>
        </div>
        <div>
          {bioText.length < 100 && (
            <span style={{ color: "#a5a5a5", fontSize: "11px" }}>
              {remainingCharacters} characters remaining
            </span>
          )}
        </div>
      </div>
      <div className="" style={{ padding: "20px 0 40px 0", width: "70%", textAlign: "end" }}>
        <NavLink className="experience-link" to={"/assistant/photo"}>
          <ButtonForMe childrenButton={"Save & Continue"} colorButton={"#213f5f"} />
        </NavLink>
      </div>
      <ModalUnstyled check={checkModal} onClose={() => setCheckModal(false)} children={formTips} widthForm={"79%"} heightForm={"80vh"} />
    </div>
  );
  return (
    <NavBarFindJob
      children={<SideBarFindJob col={"col-8"} value={bio} check={true} activeIds={[1, 2, 3, 4]} />}
    />
  );
}

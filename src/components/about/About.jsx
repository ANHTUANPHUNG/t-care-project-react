import React from "react";
import Favorite from "@mui/icons-material/Favorite";
import "./About.css";
function About() {
  return (
    <div className="about my-5" >
      <div className="about-container">
        <h1>T-Care.</h1>
        <h3>Small word. Huge impact.</h3>
        <img
          decoding="async"
          width="150"
          height="140"
          src="https://www.care.com/about/wp-content/uploads/sites/4/2021/12/Senior-Couple-1.png.webp"
          alt=""
          class="wp-image-1992"
          srcSet="https://www.care.com/about/wp-content/uploads/sites/4/2021/12/Senior-Couple-1.png.webp 424w, https://www.care.com/about/wp-content/uploads/sites/4/2021/12/Senior-Couple-1-300x267.png.webp 300w"
          sizes="(max-width: 100px) 100vw, 424px"
        />
        <div style={{width:"30%"}}>
          <p>
            Every single person will need and/or provide care to someone in their lifetime, probably
            more than once.
          </p>
        </div>
        <h3>
          And then there’s
          <span>T-Care.com…</span>
        </h3>
        <div className="about-footer">
          <h6>
            Our purpose is to help every family at each stage of care and today, we’re helping
            millions of families at home and at work across 17+ countries and growing.
          </h6>
          <p>
            <Favorite className="me-2 favorite" />
            We’re using technology and innovation to solve one of the greatest human challenges.
          </p>
          <p>
            <Favorite className="me-2 favorite" />
            We’re at the forefront of safety, advocacy and thought leadership.
          </p>
          <p>
            <Favorite className="me-2 favorite" />
            We’re obsessively attuned to our customers’ needs because we ARE our customer.
          </p>
          <p>
            <Favorite className="me-2 favorite" />
            We’re devoted to families of all types and backgrounds because we ARE families of all
            types and backgrounds.
          </p>
          <p>
            <Favorite className="me-2 favorite" />
            We’re here for all your life, for all families, for all the reasons that matter.
          </p>
        </div>
        <div className="my-3">
          <h5>T-Care</h5> for all you <span>love.</span>
        </div>
      </div>
    </div>
  );
}
export default About;

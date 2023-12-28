import React from "react";
import './LegalNotice.css'
export function LegalNotice (){

    return(
        <div className=" care-hub-footer" >
          <div className="row  care-hub-footer-align" >
            <p  className="mb-4">
              Care.com does not employ any caregiver and is not responsible for the conduct of any
              user of our site. All information in member profiles, job posts, applications, and
              messages is created by users of our site and not generated or verified by Care.com.
              You need to do your own diligence to ensure the job or caregiver you choose is
              appropriate for your needs and complies with applicable laws.
            </p>
            <p  className="mb-4">
              Care.com® HomePay℠ is a service provided by Breedlove and Associates, LLC, a Care.com
              company.
            </p>
            <p  className="mb-4">
              “Care.com" and "There for you" are service marks or registered service marks of
              Care.com, Inc. 2007-2023 Care.com, Inc. All rights reserved.
            </p>
            <div  className="col-2">
              Terms of use
            </div>
            <div  className="col-2">
              Privacy Policy
            </div>
            <div  className="col-3">
              California Privacy Notice
            </div>
            <div  className="col-5">
              Do Not Sell or Share My Personal Information
            </div>
          </div>
        </div>
    )
}
import React from "react";
import "./user.css";

export default function Profile_update() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <div class=""> */}
          <div class="col-md-8">
            <div class="p-3 py-5">
              <div class="row mt-2">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="first name"
                    value="John"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    value="Doe"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    value="john_doe12@bbb.com"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    value="+19685969668"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="address"
                    value="D-113, right avenue block, CA,USA"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    value="USA"
                    placeholder="Country"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Bank Name"
                    value="Bank of America"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    value="043958409584095"
                    placeholder="Account Number"
                  />
                </div>
              </div>
              <div class="mt-5 text-right">
                <button class="btn btn-primary profile-button" type="button">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
}

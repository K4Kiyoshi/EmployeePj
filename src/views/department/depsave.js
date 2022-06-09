/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */

/**
 * Department Save Form Component
 *
 * @author YuwaKoKo
 *
 * @create 9/6/2022
 *
 */

 import React from "react";
 import {
   CButton,
   CCol,
   CRow,
   CSelect,
   CImg,
 } from "@coreui/react";
 
 const DepSave = (props) => {
  let {
      depPlsClick,depUpClick,depDeleteClick
      ,poPlsClick,poUpClick,poDeleteClick
  } = props;
 
   return (
     <>
       <h1 className="h1container" style={{ marginBottom: "30px" }}>
         Employee List
       </h1>
       <br></br>
      <CRow style={{display:"flex"}}>
          <CCol lg="1"></CCol>
          <CCol lg="10" className="boddy">
              <br></br>
              <CRow>
                <CCol lg="3">Department<span style={{ color: "red" }}>*</span></CCol>
                <CCol lg="5">
                <CSelect
                // onChange={departmentSelectChange}
                // value={departmentSelectValue}
                style={{ border: "1px solid rgb(119, 185, 232)" }}
              >
                {/* {departmentSelectData != "" &&
                  departmentSelectData.map((data, index) => {
                    return (
                      <option key={index} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })} */}
              </CSelect>

                </CCol>
                  <CCol lg="1" >
                  <CImg
                      src={"/avatars/plus.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer" }}
                      onClick={()=>depPlsClick()}
                    />
                  </CCol>
                  <CCol lg="1">
                  <CImg
                      src={"/avatars/up.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer"}}

                     onClick={()=>depUpClick()}
                    />

                  </CCol>
                  <CCol lg="1">
                  <CImg
                      src={"/avatars/ud.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer"}}

                     onClick={()=>depDeleteClick()}
                    />
                  </CCol>
              </CRow>
              <br></br>

              <CRow>
                <CCol lg="3">Position<span style={{ color: "red" }}>*</span></CCol>
                <CCol lg="5">
                <CSelect
                // onChange={departmentSelectChange}
                // value={departmentSelectValue}
                style={{ border: "1px solid rgb(119, 185, 232)" }}
              >
                {/* {departmentSelectData != "" &&
                  departmentSelectData.map((data, index) => {
                    return (
                      <option key={index} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })} */}
              </CSelect>

                </CCol>
                  <CCol lg="1">
                  <CImg
                      src={"/avatars/plus.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer"}}

                      onClick={()=>poPlsClick()}
                    />
                  </CCol>
                  <CCol lg="1">
                  <CImg
                      src={"/avatars/up.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer"}}

                  onClick={()=>poUpClick()}
                    />

                  </CCol>
                  <CCol lg="1">
                  <CImg
                      src={"/avatars/ud.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer"}}

                 onClick={()=>poDeleteClick()}
                    />
                  </CCol>
              </CRow>
              <br></br>
              <CRow>
          <CCol lg="5"></CCol>
          <CCol lg="2">
          <CButton type="button" className="gorbtn">
                Save
              </CButton>
          </CCol>
          <CCol lg="5"></CCol>
      </CRow>
      <br></br>
          </CCol>
          <CCol lg="1"></CCol>
      </CRow>
    
     </>
   );
 };
 
 export default DepSave;
 
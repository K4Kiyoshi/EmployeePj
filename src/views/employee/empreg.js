/* eslint-disable jsx-a11y/alt-text */

/**
 * Employee Register Ui Form
 *
 * @author YuwaKoKo
 *
 * @create 8/6/2022
 *
 */
import React from "react";
import {
  CButton,
  CCol,
  CRow,
  CLabel,
  CInput,
  CInputRadio,
  CSelect,
} from "@coreui/react";

const EmpReg = (props) => {
  let {
    positionSelectChange,
    positionSelectData,
    positionSelectValue,
    departmentSelectChange,
    departmentSelectData,
    departmentSelectValue,
    radioData,
    radioCheck,
    radioClick,
    handleChangeName,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    name,
    email,
    password,
    confirmpassword,
    save,
    reset,
  } = props;

 
  return (
    <>
      <h1 className="h1container">Employee Registration Form</h1>
      <br />
      <CRow>
        <CCol lg="1"></CCol>
        <CCol lg="10" >
        <u className="underline"><h4 style={{fontFamily: "Cursive"}}>Personal Detail</h4></u>
        </CCol>
        <CCol lg="1"></CCol>
      </CRow>
      
      <CRow>
        <CCol lg="1"></CCol>
        <CCol lg="10" className="boddy">
          <br></br>
          

          <CRow>
            <CCol lg="2">Name <span style={{color: "red"}}>*</span></CCol>
            <CCol lg="3">
              <CInput type="text" placeholder="Enter your name" style={{border: "1px solid rgb(119, 185, 232)"}} onChange={handleChangeName} value={name}/>
            </CCol>
            <CCol lg="2"></CCol>
            <CCol lg="2">Email <span style={{color: "red"}}>*</span></CCol>
            <CCol lg="3">
              <CInput type="email" placeholder="Enter your email" style={{border: "1px solid rgb(119, 185, 232)"}} onChange={handleChangeEmail} value={email}/>
            </CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="2">
              <CLabel className="labels">Gender <span style={{color: "red"}}>*</span></CLabel>
            </CCol>
            <CCol lg="3">
              <CRow className="radioo">
                {radioData.map((data, index) => {
                  return (
                    <CCol lg="6" key={index}>
                      <CInputRadio
                        type="radio"
                        value={data.id}
                        checked={radioCheck == data.id ? true : false}
                        onChange={() => radioClick(data.id, data.name)}
                      />
                      <CLabel value={radioCheck}>{data.name}</CLabel>
                    </CCol>
                  );
                })}
              </CRow>
            </CCol>
            <CCol lg="2"></CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="2">Password <span style={{color: "red"}}>*</span></CCol>
            <CCol lg="3">
              <CInput type="password" style={{border: "1px solid rgb(119, 185, 232)"}} placeholder="Enter your password" onChange={handleChangePassword} value={password} />
            </CCol>
            <CCol lg="2"></CCol>
            <CCol lg="2">Confirm Password <span style={{color: "red"}}>*</span></CCol>
            <CCol lg="3">
              <CInput type="password" style={{border: "1px solid rgb(119, 185, 232)"}} placeholder="Confirm your password" 
              onChange={handleChangeConfirmPassword} value={confirmpassword}
              />
            </CCol>
          </CRow>
          <br></br>
        </CCol>
        <CCol lg="1"></CCol>
      </CRow>
      <br></br>


      <CRow>
        <CCol lg="1"></CCol>
        <CCol lg="10">
        <u className="underline"><h4 style={{fontFamily: "Cursive"}}>Department Detail</h4></u>
        </CCol>
        <CCol lg="1"></CCol>
      </CRow>
      <CRow>
        <CCol lg="1"></CCol>
        <CCol lg="10" className="boddy">
                  <br></br>
          <CRow>
            <CCol lg="2">Department</CCol>
            <CCol lg="3">
            <CSelect
                onChange={departmentSelectChange}
                value={departmentSelectValue}
                style={{ border: "1px solid rgb(119, 185, 232)" }}
              >
                {departmentSelectData != "" &&
                  departmentSelectData.map((data, index) => {
                    return (
                      <option key={index} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
              </CSelect>
            </CCol>
            <CCol lg="2"></CCol>
            <CCol lg="2">Position</CCol>
            <CCol lg="3">
            <CSelect
                onChange={positionSelectChange}
                value={positionSelectValue}
                style={{ border: "1px solid rgb(119, 185, 232)" }}
              >
                {positionSelectData != "" &&
                  positionSelectData.map((data, index) => {
                    return (
                      <option key={index} value={data.id}>
                        {data.name}
                      </option>
                    );
                  })}
              </CSelect>
            </CCol>
          </CRow>
          <br></br>

          <CRow>
            <CCol lg="5"></CCol>
            <CCol lg="2">
              <CButton type="button" className="gorbtn" style={{marginTop:"20px",marginBottom:"20px"}}>
                Add
              </CButton>
            </CCol>
            <CCol lg="5"></CCol>
          </CRow>
          <br></br>
          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="10">
              <table className="table table-info ">
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Department</th>
                    <th style={{ textAlign: "center" }}>Position</th>
                    <th style={{ textAlign: "center" }}>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th style={{ textAlign: "center" }}>IT</th>
                    <th style={{ textAlign: "center" }}>SuperAdmin</th>
                    <th style={{ textAlign: "center" }}><img
              
                src="/avatars/trash.png"
                style={{ width: "30px", cursor: "pointer" }}
                // onClick={searchClick}
              /></th>
                  </tr>
                  <tr>
                    <th style={{ textAlign: "center" }}>IT</th>
                    <th style={{ textAlign: "center" }}>Admin</th>
                    <th style={{ textAlign: "center" }}>
                    <img
          
                src="/avatars/trash.png"
                style={{ width: "30px", cursor: "pointer" }}
                // onClick={searchClick}
              />
                    </th>
                  </tr>
                </tbody>
              </table>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>
                  <br></br>
                  <CRow>
        <CCol lg="4"></CCol>
        <CCol lg="2"> <CButton type="button" className="gorbtn" onClick={save}>
                Save
              </CButton></CCol>
        <CCol lg="2"> <CButton type="button" className="gorbtn" onClick={reset}>
                Reset
              </CButton></CCol>
        <CCol lg="4"></CCol>
      </CRow>

<br></br>


        </CCol>
        <CCol lg="1"></CCol>

      </CRow>
  <br/>

    
    </>
  );
};

export default EmpReg;

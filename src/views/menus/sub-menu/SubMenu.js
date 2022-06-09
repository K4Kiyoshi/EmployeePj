/* eslint-disable jsx-a11y/alt-text */

/**
 *  Register Index
 *
 * @author YuwaKoKo
 *
 * @create 8/6/2022
 *
 */

import React, { useState } from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow
} from '@coreui/react'
import {
  nameCheck,
  nullcheck,
  emailCheck,
} from "../../common/CommonValidation";
import EmpReg from '../../employee/empreg'

const SubMenu = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [err, setErr] = useState([]);
  const [positionSelectData, setPositionSelectData] = useState([
    { id: 0, name: "Select Your Name" },
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); // position select box data
  const [positionSelectValue, setPositionSelectValue] = useState(""); // for position select box
  const [departmentSelectValue, setDepartmentSelectValue] = useState(""); // for department select box
  const [departmentSelectData, setDepartmentSelectData] = useState([
    { id: 0, name: "Select Your Department" },
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); // department select box data
  const [radioData] = useState([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ]); //Gender Data
  const [radioCheck, setRadioCheck] = useState(""); //ForRadioCheck
  const [radioRes, setRadioRes] = useState(""); //Radio Name take

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmpassword(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };


  let radioClick = (id, name) => {
    setRadioRes(name);
    setRadioCheck(id);
  };

  let positionSelectChange = (e) => {
    setPositionSelectValue(e.target.value);
  };
  let departmentSelectChange = (e) => {
    setDepartmentSelectValue(e.target.value);
  };

  const save = async () => {
    let errArray = [];
    if (!nullcheck(name)) {
      errArray.push("Please Enter Name");
    } else if (!nameCheck(name)) {
      errArray.push("Invalid name");
    }
    if (!nullcheck(email)) {
      errArray.push("Please Enter Email");
    } else if (!emailCheck(email)) {
      errArray.push("Invalid Email");
    }
    
    if (!nullcheck(radioCheck)) {
      errArray.push("Please Select Gender");
    }
    if (!nullcheck(password)) {
      errArray.push("Please Enter Password");
    }
    if (!nullcheck(confirmpassword)) {
      errArray.push("Please Confirm Password");
    }else
    if(confirmpassword != password) {
      errArray.push("Passwords ain't Same");
    }
    setErr(errArray);
    // if (errArray == [] || errArray == "") {
    //   setShow(true);
    //   if(editStatus){
    //     setContent("Are you sure you want to update data?");
    //   setType("update");}
    //   else{
    //     setContent("Are you sure you want to save data?");
    //   setType("save-data");
    //   }
    
    // } else {
    //   setErr(errArray);
    //   setSuccess([]);
    // }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };


  const reset = () => {
    setName("");
    setEmail("");
    setErr("");
    setRadioCheck("");
    setPassword("");
    setConfirmpassword("");  

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
          <div>
          {err.length > 0 && (
            <div className="errMsgBox">
              {err.map((e, index) => {
                return (
                  <>
                    <p
                      style={{
                        color: "white",
                        marginLeft: "50px",
                        borderRadius: "20px",
                      }}
                      key={index}
                    >
                      {e}
                    </p>
                  </>
                );
              })}
            </div>
          )}
        </div>
            <EmpReg 
            radioCheck={radioCheck} radioClick={radioClick} radioRes={radioRes} 
            positionSelectData={positionSelectData}
              positionSelectChange={positionSelectChange}
              departmentSelectChange={departmentSelectChange}
              departmentSelectData={departmentSelectData}
              radioData={radioData}
              handleChangeName={handleChangeName}
              handleChangePassword={handleChangePassword}
              handleChangeEmail={handleChangeEmail}
              handleChangeConfirmPassword={handleChangeConfirmPassword}
              name={name}
              email={email}
              password={password}
              confirmpassword={confirmpassword}
              save={save}
              reset={reset}
            />
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SubMenu

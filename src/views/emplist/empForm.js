/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/alt-text */

/**
 * Employee Form Component
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
  CInput,
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
  } = props;

  return (
    <>
      <h1 className="h1container" style={{ marginBottom: "30px" }}>
        Employee List
      </h1>
      <br></br>
      <CRow style={{ fontFamily: "cursive" }}>
        <CCol lg="1"></CCol>
        <CCol lg="10">
          <CRow>
            <CCol lg="2">Employee ID</CCol>
            <CCol lg="3">
              <CInput
                input="text"
                style={{ border: "1px solid rgb(119, 185, 232)" }}
              />
            </CCol>
            <CCol lg="2"></CCol>
            <CCol lg="2">Employee Name</CCol>
            <CCol lg="3">
              <CInput
                input="text"
                style={{ border: "1px solid rgb(119, 185, 232)" }}
              />
            </CCol>
          </CRow>
          <br />
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
          <br />
          <CRow style={{ marginTop: "20px" }}>
            <CCol lg="5"></CCol>
            <CCol lg="2">
              <CButton className="gorbtn">Search</CButton>
            </CCol>
            <CCol lg="5"></CCol>
          </CRow>
        </CCol>
        <CCol lg="1"></CCol>
      </CRow>
      <br />
    </>
  );
};

export default EmpReg;

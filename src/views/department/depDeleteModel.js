/* eslint-disable jsx-a11y/alt-text */

/**
 * DeleteModal Component
 *
 * @author YuwaKoKo
 *
 * @create 8/6/2022
 *
 */

import React from "react";
import {
  CRow,
  CButton,
  CModal,
  CModalBody,
  CButtonToolbar,
  CModalHeader,
  CCol,
  CInput,
  CSelect,
} from "@coreui/react";
const DepDeleteModel = (props) => {
  const {
    depDeleteModelShow,
    depDeleteModelSaveBtn,
    depDeleteModelCancleBtn,

    departmentDelSelectChange,
    departmentDelSelectValue,
    departmentDelSelectData,
    // detailData
  } = props;

  return (
    <>
      {/* {data != "" && */}
      <CModal
        size="lg"
        centered
        closeOnBackdrop={false}
        show={depDeleteModelShow}
        id="advanced"
      >
        <CModalHeader
          style={{ justifyContent: "center", fontFamily: "cursive" }}
        >
          <h2>Delete Department Registration</h2>
        </CModalHeader>
        <CModalBody style={{ fontFamily: "cursive" }}>
          <br />

          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="10">
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  Department Name <span style={{ color: "red" }}>*</span>
                </CCol>
                <CCol lg="6">
                  <CSelect
                    onChange={departmentDelSelectChange}
                    value={departmentDelSelectValue}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                  > <option value=''>--Please Select Department--</option>
                    {departmentDelSelectData != "" &&
                      departmentDelSelectData.map((data, index) => {
                        return (
                          <option key={index} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                  </CSelect>
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>

          <br />
          <CButtonToolbar className="confirm-body" justify="center">
            <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                {" "}
                <CButton className="r-confirm-btn" onClick={depDeleteModelSaveBtn}>
                  Remove
                </CButton>
              </CCol>
              <CCol lg="4">
                {" "}
                <CButton
                  className="cancel-confirm-btn"
                  onClick={depDeleteModelCancleBtn}
                >
                  Cancle
                </CButton>
              </CCol>
              <CCol lg="2"></CCol>
            </CRow>
          </CButtonToolbar>
        </CModalBody>
      </CModal>

      {/* } */}
    </>
  );
};
export default DepDeleteModel;

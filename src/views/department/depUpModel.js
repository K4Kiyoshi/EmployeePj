/* eslint-disable jsx-a11y/alt-text */

/**
 * UpdateModal Component
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
const DepUpModel = (props) => {
  const {
    depUpModelShow,
    depUpModelSaveBtn,
    HandleDepUpName,
    depUpName,
    depUpModelCancleBtn,

    departmentSelectChange,
    departmentSelectValue,
    departmentSelectData,
    // detailData
  } = props;

  return (
    <>
      {/* {data != "" && */}
      <CModal
        size="lg"
        centered
        closeOnBackdrop={false}
        show={depUpModelShow}
        id="advanced"
      >
        <CModalHeader
          style={{ justifyContent: "center", fontFamily: "cursive" }}
        >
          <h2>Update Department Registration</h2>
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
                    onChange={departmentSelectChange}
                    value={departmentSelectValue}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                  > <option value=''>--Please Select Department--</option>
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
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>

              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  Update Department Name <span style={{ color: "red" }}>*</span>
                </CCol>
                <CCol lg="6">
                  <CInput
                    type="text"
                    onChange={HandleDepUpName}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                    value={depUpName}
                  />
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>

          <br />
          <CButtonToolbar className="confirm-body" justify="center">
            <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                {" "}
                <CButton className="c-confirm-btn" onClick={depUpModelSaveBtn}>
                  Update
                </CButton>
              </CCol>
              <CCol lg="4">
                {" "}
                <CButton
                  className="cancel-confirm-btn"
                  onClick={depUpModelCancleBtn}
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
export default DepUpModel;

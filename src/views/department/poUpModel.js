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
const PoUpModel = (props) => {
  const {
    poUpModelShow,
    poUpModelSaveBtn,
    HandlePoUpName,
    poUpName,
    poUpModelCancleBtn,
    poUpSuccess,
    poUpError,
    positionSelectChange,
    positionSelectValue,
    positionSelectData,
    // detailData
  } = props;

  return (
    <>
      {/* {data != "" && */}
      <CModal
        size="lg"
        centered
        closeOnBackdrop={false}
        show={poUpModelShow}
        id="advanced"
      >
        <CModalHeader
          style={{ justifyContent: "center", fontFamily: "cursive" }}
        >
          <h2>Update Position Registration</h2>
        </CModalHeader>
        <CModalBody style={{ fontFamily: "cursive" }}>
          <br />

          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="10">
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  Position Name <span style={{ color: "red" }}>*</span>
                </CCol>
                <CCol lg="6">
                  <CSelect
                    onChange={positionSelectChange}
                    value={positionSelectValue}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                  >
                    {" "}
                    <option value="">--Please Select Position--</option>
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
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>

              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  Update position Name <span style={{ color: "red" }}>*</span>
                </CCol>
                <CCol lg="6">
                  <CInput
                    type="text"
                    onChange={HandlePoUpName}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                    value={poUpName}
                  />
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4"></CCol>
                <CCol lg="6">
                  {poUpSuccess.length > 0 &&
                    poUpSuccess.map((data, index) => {
                      return (
                        <div key={index} className="susMsgBox1">
                          <p>{data}</p>
                        </div>
                      );
                    })}
                  {poUpError.length > 0 &&
                    poUpError.map((data, index) => {
                      return (
                        <div key={index} className="errMsgBox1">
                          <p>{data}</p>
                        </div>
                      );
                    })}
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>
            </CCol>
            <CCol lg="1"></CCol>
          </CRow>

          <CButtonToolbar className="confirm-body" justify="center">
            <CRow>
              <CCol lg="2"></CCol>
              <CCol lg="4">
                {" "}
                <CButton className="c-confirm-btn" onClick={poUpModelSaveBtn}>
                  Update
                </CButton>
              </CCol>
              <CCol lg="4">
                {" "}
                <CButton
                  className="cancel-confirm-btn"
                  onClick={poUpModelCancleBtn}
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
export default PoUpModel;

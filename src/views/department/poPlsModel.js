/* eslint-disable jsx-a11y/alt-text */

/**
 * DetailModal Component
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
} from "@coreui/react";
const PoPlsModel = (props) => {
  const {
    poPlsModelShow,
    poPlsModelSaveBtn,
    HandlePoPlsName,
    poPlsName,
    poPlsModelCancleBtn,
    posPlsSuccess,
    posPlsError,
    // detailData
  } = props;

  return (
    <>
      {/* {data != "" && */}
      <CModal
        size="lg"
        centered
        closeOnBackdrop={false}
        show={poPlsModelShow}
        id="advanced"
      >
        <CModalHeader
          style={{ justifyContent: "center", fontFamily: "cursive" }}
        >
          <h2>Append Position Registration</h2>
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
                  <CInput
                    type="text"
                    onChange={HandlePoPlsName}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                    value={poPlsName}
                  />
                </CCol>
                <CCol lg="1"></CCol>
              </CRow>
              <br></br>

              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4"></CCol>
                <CCol lg="6">
                  {posPlsSuccess.length > 0 &&
                    posPlsSuccess.map((data, index) => {
                      return (
                        <div key={index} className="susMsgBox1">
                          <p>{data}</p>
                        </div>
                      );
                    })}
                  {posPlsError.length > 0 &&
                    posPlsError.map((data, index) => {
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
                <CButton className="ok-confirm-btn" onClick={poPlsModelSaveBtn}>
                  Save
                </CButton>
              </CCol>
              <CCol lg="4">
                {" "}
                <CButton
                  className="cancel-confirm-btn"
                  onClick={poPlsModelCancleBtn}
                >
                  Cancle
                </CButton>
              </CCol>
              <CCol lg="2"></CCol>
            </CRow>
          </CButtonToolbar>
        </CModalBody>
      </CModal>
    </>
  );
};
export default PoPlsModel;

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
  CSelect,
} from "@coreui/react";
const PoDeleteModel = (props) => {
  const {
    poDeleteModelShow,
    poDeleteModelSaveBtn,
    poDeleteModelCancleBtn,

    positionDelSelectChange,
    positionDelSelectValue,
    positionDelSelectData,
    // detailData
  } = props;

  return (
    <>
      {/* {data != "" && */}
      <CModal
        size="lg"
        centered
        closeOnBackdrop={false}
        show={poDeleteModelShow}
        id="advanced"
      >
        <CModalHeader
          style={{ justifyContent: "center", fontFamily: "cursive" }}
        >
          <h2>Delete Position Registration</h2>
        </CModalHeader>
        <CModalBody style={{ fontFamily: "cursive" }}>
          <br />

          <CRow>
            <CCol lg="1"></CCol>
            <CCol lg="10">
              <CRow>
                <CCol lg="1"></CCol>
                <CCol lg="4">
                  position Name <span style={{ color: "red" }}>*</span>
                </CCol>
                <CCol lg="6">
                  <CSelect
                    onChange={positionDelSelectChange}
                    value={positionDelSelectValue}
                    style={{ border: "1px solid rgb(119, 185, 232)" }}
                  > <option value=''>--Please Select Position--</option>
                    {positionDelSelectData != "" &&
                      positionDelSelectData.map((data, index) => {
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
            <CRow >
              <CCol lg="2"></CCol>
              <CCol lg="4">
                {" "}
                <CButton className="r-confirm-btn" onClick={poDeleteModelSaveBtn}>
                  Remove
                </CButton>
              </CCol>
              <CCol lg="4">
                {" "}
                <CButton
                  className="cancel-confirm-btn"
                  onClick={poDeleteModelCancleBtn}
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
export default PoDeleteModel;

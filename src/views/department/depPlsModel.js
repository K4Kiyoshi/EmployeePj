/* eslint-disable jsx-a11y/alt-text */

/**
 * DetailModal Component
 *
 * @author YuwaKoKo
 *
 * @create 8/6/2022
 *
 */



import React from 'react';
import {CRow,CButton,CModal,CModalBody,CButtonToolbar,CModalHeader,CCol, CInput} from '@coreui/react';
const DepPlsModel = props => {
    const {
        depPlsModelShow,
        depPlsModelSaveBtn,
        HandleDepPlsName,
        depPlsName,
        depPlsModelCancleBtn
        // detailData
    } = props;


    return (
        <>
        {/* {data != "" && */}
                <CModal  size="lg" centered closeOnBackdrop={false} show={depPlsModelShow} id="advanced"
                >
                      <CModalHeader style={{justifyContent: "center",fontFamily:"cursive"}}><h2>
                       Append Department Registration</h2></CModalHeader>
                    <CModalBody style={{fontFamily:"cursive"}}>
                    <br/>

                        <CRow>
                            <CCol lg="1"></CCol>
                            <CCol lg="10">
                                <CRow>
                                    <CCol lg="1"></CCol>
                                    <CCol lg="4">Department Name <span style={{color : "red"}}>*</span></CCol>
                                    <CCol lg="6"><CInput type="text" onChange={HandleDepPlsName}  style={{ border: "1px solid rgb(119, 185, 232)" }}
                                    value={depPlsName}
                                    /></CCol>
                                    <CCol lg="1"></CCol>
                                </CRow>
                            </CCol>
                            <CCol lg="1"></CCol>
                        </CRow>

                        <br/>
                        <CButtonToolbar className="confirm-body" justify="center">
                          <CRow style={{paddingTop:"50px"}}>
                              <CCol lg="2"></CCol>
                              <CCol lg="4"> <CButton className="ok-confirm-btn" onClick={depPlsModelSaveBtn}>Save</CButton></CCol>
                              <CCol lg="4"> <CButton className="cancel-confirm-btn" onClick={depPlsModelCancleBtn}>Cancle</CButton></CCol>
                              <CCol lg="2"></CCol>

                           
                            </CRow>
                        </CButtonToolbar>
                    </CModalBody>
                </CModal>
    
        {/* } */}
            
        </>
    )
}
export default DepPlsModel
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
import {CRow,CButton,CModal,CModalBody,CButtonToolbar,CModalHeader,CCol} from '@coreui/react';
const DetailModal = props => {
    const {
        show,
        closeBtn,
        // data,
        // detailData
    } = props;


    return (
        <>
        {/* {data != "" && */}
                <CModal  size="lg" centered closeOnBackdrop={false} show={show} id="advanced"
                style={{backgroundColor:'rgb(119, 185, 232)'}}
                >
                    <CModalHeader style={{justifyContent: "center",fontFamily:"cursive"}}><h2>
                        Employee Detail Information</h2></CModalHeader>
                    <CModalBody style={{fontFamily:"cursive"}}>

                    
                    <br/>


                        <CRow id="approver-modal" >
                           
                           <CCol lg="1"></CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               ID
                           </CCol>
                           <CCol lg="2" style={{textAlign:"center"}}>:</CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               {/* {detailData.student_id} */}
                               1
                               </CCol>
                           <CCol lg="1"></CCol>
                        </CRow>
                        <br/>
                        <CRow >
                           
                           <CCol lg="1"></CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               Name
                           </CCol>
                           <CCol lg="2" style={{textAlign:"center"}}>:</CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                                {/* {detailData.student_name} */}
                                YuwaKoKo
                           </CCol>
                           <CCol lg="1"></CCol>
                        </CRow>
                        <br/>
        
                           <CRow>
                           <CCol lg="1"></CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               Email
                           </CCol>
                           <CCol lg="2" style={{textAlign:"center"}}>:</CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               {/* {detailData.email} */}
                               yuwakoko@test.com
                               </CCol>
                           <CCol lg="1"></CCol>
                        </CRow>
                        <br/>
                        <CRow >
                           
                           <CCol lg="1"></CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               Gender
                           </CCol>
                           <CCol lg="2" style={{textAlign:"center"}}>:</CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                           {/* {detailData.gender} */}
                           Male
                           </CCol>
                           <CCol lg="1"></CCol>
                        </CRow>
                        <br/>

                        <CRow >
                           
                           <CCol lg="1"></CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                              Department
                           </CCol>
                           <CCol lg="2" style={{textAlign:"center"}}>:</CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               {/* {detailData.dob} */}
                               IT
                               </CCol>
                           <CCol lg="1"></CCol>
                        </CRow>
                        <br/>
                        <CRow >
                           
                           <CCol lg="1"></CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                               Position
                           </CCol>
                           <CCol lg="2" style={{textAlign:"center"}}>:</CCol>
                           <CCol lg="4" style={{textAlign:"start"}}>
                           {/* {detailData.address} */}
                           Admin
                           </CCol>
                           <CCol lg="1"></CCol>
                        </CRow>
                        <br/>
                        <CButtonToolbar className="confirm-body" justify="center">
                          <CRow style={{paddingTop:"50px"}}>
                            <CButton className="cancel-confirm-btn" onClick={closeBtn}>Close</CButton>
                            </CRow>
                        </CButtonToolbar>
                    </CModalBody>
                </CModal>
    
        {/* } */}
            
        </>
    )
}
export default DetailModal
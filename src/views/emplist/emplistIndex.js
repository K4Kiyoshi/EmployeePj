/* eslint-disable jsx-a11y/alt-text */

/**
 * Employee Index Main
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

import EmpTable from './empTable'
import EmpForm from './empForm'
import DetailModal from "./DetailModal";
import { useHistory } from "react-router-dom";
const EmpListIndex = () => {
  const history = useHistory();//history
  const [currentPage, setCurrentPage] = useState(""); // pageination's CurrentPage
  const [lastPage, setLastPage] = useState(""); // pageination's LastPage
  const [success, setSuccess] = useState([]);// success messages
  const [error, setError] = useState([]);//error messages
  const [totalRow, setTotalRow] = useState("");//api total Row
  const [positionSelectData, setPositionSelectData] = useState([
    { id: 0, name: "Select Your Name" },
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); // position select box data
  const [departmentSelectValue, setDepartmentSelectValue] = useState(""); // for department select box
  const [departmentSelectData, setDepartmentSelectData] = useState([
    { id: 0, name: "Select Your Department" },
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); // department select box data
  const [positionSelectValue, setPositionSelectValue] = useState(""); // for position select box
  const [page, setpage] = useState("");// pagination's Page
  const [detailModalShow, setDetailModalShow] = useState(false); //detailModalShow








  let detail = async (w) => {
    setError([]);
    setSuccess([]);
    setDetailModalShow(true);
  };


  let positionSelectChange = (e) => {
    setPositionSelectValue(e.target.value);
  };
  let departmentSelectChange = (e) => {
    setDepartmentSelectValue(e.target.value);
  };
  let setActivePage = (page) => {
    setError([]);
    setSuccess([]);
    // setLoading(true);
    // search(page);
  };

  let closeBtn = () => {
    setDetailModalShow(false);
  };


  let edit =(e)=>{

    // let data ={ 
    //   id: e.id
    // };
    // localStorage.setItem('STUDENT_DATA', JSON.stringify(data) );
    history.push('/menus/sub-menu');
  
  
  }




  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
              <EmpForm positionSelectData={positionSelectData}
              positionSelectChange={positionSelectChange}
              departmentSelectChange={departmentSelectChange}
              departmentSelectData={departmentSelectData}
              
              
              
              />
              <br></br>
            <EmpTable
            currentPage={currentPage}
            lastPage={lastPage}
            setActivePage={setActivePage}
            totalRow={totalRow}
            page={page}
            detail={detail}
            // deleteCLick={deleteCLick}
            edit={edit}
            
            />
            
            <DetailModal
                show={detailModalShow}
                closeBtn={closeBtn}
                // detailData={detailData}
              />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EmpListIndex

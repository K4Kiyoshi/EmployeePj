/* eslint-disable jsx-a11y/alt-text */

/**
 * Department Index
 *
 * @author YuwaKoKo
 *
 * @create 9/6/2022
 *
 */
import DepSave from '../department/depsave'
 import React, { useState } from 'react'
 import {
  
   CCard,
   CCardBody,
   
   CCol,
   CRow
 } from '@coreui/react'
import DepPlsModel from './depPlsModel'
import DepUpModel from './depUpModel'
import DepDeleteModel from './depDeleteModel'
import PoPlsModel from './poPlsModel'
import PoUpModel from './poUpModel'
import PoDeleteModel from './poDeleteModel'


const DepartmentIndex= () => {
  const [depPlsModelShow, setDepPlsModelShow] = useState(false); //setDepPlusModel
  const [depUpModelShow, setDepUpModelShow] = useState(false); //setDepUpModel
  const [depDeleteModelShow, setDepDeleteModelShow] = useState(false); //setDepUpModel
  const [poPlsModelShow, setPoPlsModelShow] = useState(false); //setPositionPlusModel
  const [poUpModelShow, setPoUpModelShow] = useState(false); //setPositionUpModel
  const [poDeleteModelShow, setPoDeleteModelShow] = useState(false); //setPoUpModel
  const [poPlsName, setPoPlsName]=useState(""); //Pls Position Name plus button 
  const [depPlsName, setDepPlsName]=useState(""); //Pls DepartmentName plus button 
  const [depUpName, setDepUpName]=useState(""); //Pls DepartmentName Update button 
  const [poUpName, setPoUpName]=useState(""); //Pls PositionName Update button 
  const [posPlsSuccess, setPosPlsSuccess] = useState([]); // Position ModalPlus success message
  const [posPlsError, setPosPlsError] = useState([]); // Position ModalPlus error message
  const [poUpSuccess, setPoUpSuccess] = useState([]); // Position Up success message
  const [poUpError, setPoUpError] = useState([]); // Position Up error message

  const [departmentSelectValue, setDepartmentSelectValue] = useState("");
  // <-for position update select box
  const [positionSelectValue, setPositionSelectValue] = useState("");
   // <-for department update select box
   const [positionDelSelectValue, setPositionDelSelectValue] = useState("");
   // <-for position Delete select box
   const [departmentDelSelectValue, setDepartmentDelSelectValue] = useState("");
   // for department delete select box
  const [departmentSelectData, setDepartmentSelectData] = useState([
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); // <--department update select box data
  const [positionSelectData, setPositionSelectData] = useState([
    { id: 1, name: "Id" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Career Path" },
  ]); // <--position update select box data
 const [departmentDelSelectData, setDepartmentDelSelectData] = useState([
   { id: 1, name: "Id" },
   { id: 2, name: "Name" },
   { id: 3, name: "Email" },
   { id: 4, name: "Career Path" },
 ]); // <--department delete select box data
 const [positionDelSelectData, setPositionDelSelectData] = useState([
  { id: 1, name: "Id" },
  { id: 2, name: "Name" },
  { id: 3, name: "Email" },
  { id: 4, name: "Career Path" },
]); // <--position delete select box data

// Dep pls Model Show Form
  const depPlsClick=()=>{ 
  setDepPlsModelShow(true);
  };
// Dep pls Model SaveFUnction Form
  let depPlsModelSaveBtn = () => {
    setDepPlsModelShow(false);
  };
// DepPlsName Change 
let HandleDepPlsName = (e) => {
    setDepPlsName(e.target.value);
};
//Dep Pls Close Btn
let depPlsModelCancleBtn = (e) => {
    setDepPlsModelShow(false)
};
//DepUpSelect Function
let departmentSelectChange = (e) => {
  setDepartmentSelectValue(e.target.value);
};
// Dep pls Model Show Form
const depUpClick=()=>{ 
  setDepUpModelShow(true);
  };
// Dep pls Model SaveFUnction Form
let depUpModelSaveBtn = () => {
  setDepUpModelShow(false);
};
// DepPlsName Change 
let HandleDepUpName = (e) => {
  setDepUpName(e.target.value);
};
//Dep Pls Close Btn
let depUpModelCancleBtn = (e) => {
  setDepUpModelShow(false)
};
//Depsave Delete Click
const depDeleteClick=()=>{ 
  setDepDeleteModelShow(true);
};
//DepUpSelect Function
let departmentDelSelectChange = (e) => {
  setDepartmentDelSelectValue(e.target.value);
};

// Dep Delete Model SaveFUnction Form
let depDeleteModelSaveBtn = () => {
  setDepDeleteModelShow(false);
};
//Dep Pls Close Btn
let depDeleteModelCancleBtn = (e) => {
  setDepDeleteModelShow(false)
};


//------------------------------------------------Position Functions
// Position pls Model Show Form
const poPlsClick=()=>{ 
  setPosPlsSuccess([]);
  setPosPlsError([]);
  setPoPlsModelShow(true);
};
// Position pls Model SaveFunction Form
let poPlsModelSaveBtn = () => {
  if (poPlsName == "" || poPlsName == null) {
    setPosPlsSuccess([]);
    setPosPlsError(["Please Enter Department Value"]);
  } else {
    setPosPlsError([]);
    setPosPlsSuccess(["Successfully Saved!"]);
  }
};
//Position Pls Close Btn
let poPlsModelCancleBtn = (e) => {
  setPoPlsModelShow(false)
};
// Position PlsName Change 
let HandlePoPlsName = (e) => {
  setPoPlsName(e.target.value);
};
// Update From Click From depsave
const poUpClick=()=>{ 
  setPoUpError([]);
  setPoUpSuccess([]);
  setPoUpModelShow(true);
};
//Position Update Select Function
let positionSelectChange = (e) => {
  setPositionSelectValue(e.target.value);
};
// Position up Model SaveFunction Form
let poUpModelSaveBtn = () => {
  if (positionSelectValue == "") {
    setPoUpSuccess([]);
    setPoUpError(["Please Select Position! "]);
  } else if (poUpName == "") {
    setPoUpSuccess([]);
    setPoUpError(["Please Enter Update Value"]);
  } else {
    setPoUpError([]);
    setPoUpSuccess(["Successfully Updated!"]);
  }
};

// Position up Model Cancel Function Form
let poUpModelCancleBtn = () => {
  setPoUpModelShow(false);
};
// PositionPlsName Change 
let HandlePoUpName = (e) => {
  setPoUpName(e.target.value);
};
//Positionsave Delete Click
const poDeleteClick=()=>{ 
  setPoDeleteModelShow(true);
};
//Poisition DeleteSelect Function
let positionDelSelectChange = (e) => {
  setPositionDelSelectValue(e.target.value);
};
// Position up Model SaveFunction Form
let poDeleteModelSaveBtn = () => {
  setPoDeleteModelShow(false);
};
// Position up Model Cancel Function Form
let poDeleteModelCancleBtn = () => {
  setPoDeleteModelShow(false);
};
   return (
     <CRow>
       <CCol xs="12">
         <CCard>
           <CCardBody>
            <DepSave 
                depPlsClick={depPlsClick}
                depUpClick={depUpClick}
                depDeleteClick={depDeleteClick}
                poPlsClick={poPlsClick}
                poUpClick={poUpClick}
                poDeleteClick={poDeleteClick}
            />
            <DepPlsModel 
            depPlsModelShow={depPlsModelShow}
            depPlsModelSaveBtn={depPlsModelSaveBtn}
            depPlsModelCancleBtn={depPlsModelCancleBtn}
            HandleDepPlsName={HandleDepPlsName}
            depPlsName={depPlsName}
            
            />            
            <DepUpModel 
            departmentSelectChange={departmentSelectChange}
            departmentSelectData={departmentSelectData}
            depUpModelShow={depUpModelShow}
            depUpModelSaveBtn={depUpModelSaveBtn}
            depUpModelCancleBtn={depUpModelCancleBtn}
            depUpName={depUpName}
            HandleDepUpName={HandleDepUpName}
            />
            <DepDeleteModel 
              depDeleteModelShow={depDeleteModelShow}
              departmentDelSelectChange={departmentDelSelectChange}
              departmentDelSelectData={departmentDelSelectData}
              depDeleteModelSaveBtn={depDeleteModelSaveBtn}
              depDeleteModelCancleBtn={depDeleteModelCancleBtn}
            />
            <PoPlsModel 
            posPlsSuccess={posPlsSuccess}
            posPlsError={posPlsError}
            poPlsModelShow={poPlsModelShow}
            poPlsModelSaveBtn={poPlsModelSaveBtn}
            poPlsModelCancleBtn={poPlsModelCancleBtn}
            HandlePoPlsName={HandlePoPlsName}
            poPlsName={poPlsName}            
            />
            <PoUpModel
            positionSelectChange={positionSelectChange}
            positionSelectData={positionSelectData}
            poUpModelShow={poUpModelShow}
            poUpModelSaveBtn={poUpModelSaveBtn}
            poUpModelCancleBtn={poUpModelCancleBtn}
            poUpName={poUpName}
            HandlePoUpName={HandlePoUpName}  
            poUpSuccess={poUpSuccess}
            poUpError={poUpError} 
            />
            <PoDeleteModel 
              poDeleteModelShow={poDeleteModelShow}
              positionDelSelectChange={positionDelSelectChange}
              positionDelSelectData={positionDelSelectData}
              poDeleteModelSaveBtn={poDeleteModelSaveBtn}
              poDeleteModelCancleBtn={poDeleteModelCancleBtn}

            />
           </CCardBody>
         </CCard>
       </CCol>
     </CRow>
   )
 }
 
 export default DepartmentIndex
 
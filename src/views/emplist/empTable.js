/* eslint-disable jsx-a11y/alt-text */

/**
 * Employee Table Component
 *
 * @author YuwaKoKo
 *
 * @create 8/6/2022
 *
 */



import React from "react";
import { CImg } from "@coreui/react";
import UserData from "./userData"

let EmpTable = (props) => {
  let {  totalRow,detail,deleteCLick,edit} = props;
 
  
  return (
    <>
   
    <>
      <div>
        <span className="totalRow" style={{ float: "right" ,fontFamily:"cursive"}}>
          Total Rows : {totalRow}
        </span>
      </div>
      <div style={{overflow:"auto" , width:"100%",fontFamily:"cursive"}}>
        <table className="table table-striped table-info">
          <thead>
            <tr>
              <th rowSpan="2" style={{verticalAlign:"middle" ,textAlign:"center" }}>Number</th>
              <th rowSpan="2" style={{verticalAlign:"middle" ,textAlign:"center" }}>ID</th>
              <th rowSpan="2" style={{verticalAlign:"middle" ,textAlign:"center" }}>Name</th>
              <th rowSpan="2" style={{verticalAlign:"middle" ,textAlign:"center" }}>Email</th>
              <th rowSpan="2" style={{verticalAlign:"middle" ,textAlign:"center" }}>Department</th>
              <th rowSpan="2" style={{verticalAlign:"middle" ,textAlign:"center" }}>Position</th>
              <th
                colSpan={3}
                style={{ textAlign: "center" ,verticalAlign:"middle" }}
              >
                Action
              </th>
            </tr>
            <tr>
              <th  style={{verticalAlign:"middle" ,textAlign:"center" }}>Edit
              </th>
              <th  style={{verticalAlign:"middle" ,textAlign:"center" }}>Detail
              </th>
              <th  style={{verticalAlign:"middle" ,textAlign:"center" }}> Delete
              </th>
              </tr>
          </thead>
          <tbody>
            {UserData.map((data, index) => {
              return (
                <tr key={index}>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                    {index+1}
                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                    {data.student_id}
                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                    {data.student_name}
                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                    {data.email}
                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                   
                    {data.career_name}
                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                    {data.phone}
                  </td>
                  <td 
                    style={{verticalAlign:"middle" ,textAlign:"center" }} >
                    <CImg
                      src={"/avatars/edit.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer" }}
                      onClick={()=>edit(data)}          
                    />
                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}
                 >
                    <CImg
                      src={"/avatars/6.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{cursor:"pointer" }}
                      onClick={()=>detail(data)}
                    />

                  </td>
                  <td style={{verticalAlign:"middle" ,textAlign:"center" }}>
                    <CImg
                      src={"/avatars/d.png"}
                      alt="id"
                      width={20}
                      height={20}
                      style={{ cursor:"pointer"}}

                      onClick={()=>deleteCLick(data.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
     
      </>

    </>
  );
};
export default EmpTable;

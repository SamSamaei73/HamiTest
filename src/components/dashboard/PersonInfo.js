import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import "../../css/Dashboard/SelectExams.css";

function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}



const PersonInfo = ({userData , userId}) => {

  const getMarriage = (userData) => {
    switch (userData.MarriedStatus) {
   
      case 1:
        return "متاهل";
        break;
      case 2:
        return "مجرد";
        break;
    
      default:
        break;
    }
  };
 

  const getEducationsType = (userData) => {
    switch (parseInt(userData.Education)) {
   
      case 0:
        return "وارد نشده";
        break;
      case 1:
        return "دیپلم";
        break;
      case 2:
        return "کاردانی";
        break;
      case 3:
        return "کارشناسی";
        break;
      case 4:
        return "کارشناسی ارشد ";
        break;
      case 5:
        return "دکتری  ";
        break;
    
      default:
        break;
    }
  };
 

  return (
    <div className='PersonInfo'> 
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">نام</label>
        <input className='infoInput' type="text" readOnly value={userData.FirstName}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">نام خانوادگی</label>
        <input className='infoInput' type="text" readOnly value={userData.LastName}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">جنسیت</label>
        <input className='infoInput' type="text" readOnly value={userData.Sexuality}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">تاریخ تولد</label>
        <input className='infoInput' type="text" readOnly value={userData.Birthday}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">وضعیت تاهل</label>
        <input className='infoInput' type="text" readOnly value={getMarriage(userData)}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">تحصیلات</label>
        <input className='infoInput' type="text" readOnly value={getEducationsType(userData)}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">کدملی</label>
        <input className='infoInput' type="text" readOnly value={userData.NationalID}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">تلفن تماس</label>
        <input className='infoInput' type="text" readOnly value={userData.MobileNum}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">شغل</label>
        <input className='infoInput' type="text" readOnly value={userData.Job}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">شغل سمت</label>
        <input className='infoInput' type="text" readOnly value={userData.JobTitle}/>
       </div>
       <div className="itemInfo">
        <label className='infoLabel' htmlFor="">آدرس</label>
        <input className='infoInput' type="text" readOnly value={userData.Address}/>
       </div>
     
    </div>
  )
}

export default PersonInfo
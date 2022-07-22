import React from 'react';
import '../../css/Dashboard/ManageContact.css';


const FormAddPerson = () => {
  return (
    <div id='formAddPerson'>
        <form action="form">
            <div className="titleForm">
                <h2>ثبت مشخصات پرسنل</h2>
            </div>
            <div className="mainForm">
                <div className="itemForm">
                    <label>نام</label>
                    <input type="text" />
                </div>
                <div className="itemForm">
                    <label>نام خانوادگی</label>
                    <input type="text" />
                </div>
                <div className="itemForm">
                    <label>شماره پرسنلی</label>
                    <input type="text" />
                </div>
                <div className="itemForm">
                    <label>کد ملی</label>
                    <input type="text" />
                </div>
                <div className="itemForm">
                    <label>موبایل</label>
                    <input type="text" />
                </div>
                <div className="itemForm">
                    <label>نام کاربری</label>
                    <input type="text" />
                </div>
                <div className="itemForm">
                    <label>جنسیت</label>
                    <select>
                        <option value={1}>مرد</option>
                        <option value={2}>زن</option>
                    </select>
                </div>
            </div>
            <div className="btmAddPerson">
                <button>ثبت</button>
            </div>
        </form>
    </div>
  )
}

export default FormAddPerson
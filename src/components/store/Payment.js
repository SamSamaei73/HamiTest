import React, { useMemo, useRef, useState, useContext, useEffect } from 'react';
import "../../sass/Store.scss";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import TestContext from '../../Context/Test/testContext';
import Delete from '../../images/icons8-close-48.png'


const Payment = () => {



  return (
    <div id="Payment">
      <Header />
      <Navbars />
      <h3>سبد خرید شما</h3>
      <div className='sectionPart'>
        <div className="Bill">
          <h3>سفارش شما</h3>
          <div className="boxDetails">
            <div className="items">
              <h5>محصول</h5>
              <h5>قیمت</h5>
            </div>
            <div className="items">
              <h5> قیمت کل</h5>
              <h5>120000 تومان</h5>
            </div>
            <div className="items">
              <h5>هزینه ارسال</h5>
              <h5>120000 تومان</h5>
            </div>
            <div className="items">
              <h5> کد تخفیف</h5>
              <h5>120000 تومان</h5>
            </div>
            <div className="itemsSum">
              <h5> مجموع </h5>
              <h5>120000 تومان</h5>
            </div>

          </div>
          <button>خرید</button>
        </div>
        <div className="Information">
          <div className="infoBox">
             <table>
              <tr>
                <th>ردیف</th>
                <th>نام محصول</th>
                <th>قیمت</th>
                <th>تخفیف</th>
                <th></th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img src={Delete} alt="Delete" /></td>
              </tr>
             </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;

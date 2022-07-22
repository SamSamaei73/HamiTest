import React, { useMemo, useRef, useState, useContext, useEffect } from 'react';
import "../../sass/Store.scss";
import Header from "../tools/Header";
import Navbars from "../tools/Navbars";
import Footer from "../tools/Footer";
import { PersonalColumns } from '../column/Columns';
import CustomTable from '../column/CustomTable';
import TestContext from '../../Context/Test/testContext';


const Payment = () => {





    const testContext = useContext(TestContext);

    const {

       

    } =testContext;

    const [healthRecipiesData, setHealthRecipiesData] = useState(null);


    const KartableColumnsForAdmin = useMemo(
        () => [PersonalColumns],

        []
    );


    



  return (
    <div id="Payment">
      <Header />
      <Navbars />
      <h3>سبد خرید شما</h3>
            <div id='printTest' className="printme">
        <CustomTable
          columns={KartableColumnsForAdmin}
          data={healthRecipiesData ? healthRecipiesData : []}
        />
      </div>
      <div className="wayPay">
        <div className="payInfo">
          <div className="payItem">
          <label >مبلغ قابل پرداخت</label>
          <input type="text" className='inputcunt'/>
          <label >تومان</label>
          </div>
          <div className="payItem">
            <label >آدرس پستی</label>
            <input type="text" className='addresPay'/>
              </div>
              <div className="payItem">
                <label >کدپستی</label>
                <input type="text" className='codePay' />
              </div>
              <button>پرداخت نهایی</button>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Payment;

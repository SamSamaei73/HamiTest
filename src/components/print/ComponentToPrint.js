import React from "react";
import '../../css/exams/Resultexam.css';
import Logo from '../../images/ht_1.png';
import Test from '../../images/personality_190417.jpeg';




export const ComponentToPrint = React.forwardRef((props, ref) => {
  return <div ref={ref} id='Resultexam'>
  <div className="logotresult">
      <img src={Logo} alt="Logo" />

  </div>
  <div className="formresult">
      <div className="itemresu">
          <h3>نام و نام خانوادگی:</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>تحصیلات :</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>تاریخ آزمون :</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>نام آزمون :</h3>
          <h4></h4>
      </div>

  </div>
  <div className="formresult">
      <div className="itemresu">
          <h3>نام و نام خانوادگی:</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>تحصیلات :</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>تاریخ آزمون :</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>نام آزمون :</h3>
          <h4></h4>
      </div>

  </div>
  `<div className="formresult">
      <div className="itemresu">
          <h3>نام و نام خانوادگی:</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>تحصیلات :</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>تاریخ آزمون :</h3>
          <h4></h4>
      </div>
      <div className="itemresu">
          <h3>نام آزمون :</h3>
          <h4></h4>
      </div>

  </div>`

  <div className="nameweb">
      <h3>توسعه فردی و سازمانی</h3>
      <h3>www.hamitest.com</h3>
  </div>
  <img src={Test}/>

</div>;
});

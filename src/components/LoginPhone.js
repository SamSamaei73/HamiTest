import React from 'react';
import "../css/Login.css";
import Header from './tools/Header';
import Navbar from './tools/Navbars';


const LoginPhone = () => {
  return (
    <div id='LoginPhone'>
        <Header/>
        <Navbar/>
        <div className='LoginSpace'>
            <div className="titleLogin">
                <h3>ورود / عضویت</h3>
            </div>
            <div className="mainInputLogin">
                <div className="guideLogin">
                    <p>جهت ورود یا عضویت در سایت شماره تلفن همراه خود را وارد نمایید</p>
                </div>
                <div className="inputPhone">
                    <label >شماره تلفن همراه</label>
                    <input type="number" />
                </div>
                <button>مرحله بعد </button>
            </div>
        </div>
        <div className='LoginSpace'>
            <div className="titleLogin">
                <h3>ورود / عضویت</h3>
            </div>
            <div className="mainInputLogin">
                <div className="guideLogin">
                    <p>رمزعبور و کد تاییده ارسال شده را وارد</p>
                </div>
                <div className="inputPhone">
                    <label >رمزعبور</label>
                    <input type="password" />
                </div>
                <div className="inputPhone">
                    <label >کد تاییده</label>
                    <input type="text" />
                </div>
                <button>مرحله بعد </button>
                <button className='secondBtn'>فراموشی رمزعبور</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPhone
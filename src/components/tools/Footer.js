import React from "react";
import "../../css/Footer.css";
import Phone from "../../images/icons8-phone-50.png";
import Email1 from "../../images/icons8-email-64.png";
import Loacation from "../../images/icons8-location-50.png";
import Instagram from "../../images/icons8-instagram-50.png";
import Whatsapp from "../../images/icons8-whatsapp-50.png";
import Telegram from "../../images/icons8-telegram-app-48.png";
import Linksite from "../../images/icons8-link-50.png";
import { NavLink } from "react-router-dom";
import Enamad from "../../images/NL4af3EG.png";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="styleFooter">
        <div className="certificate">
          <div className="samandehi">
            <img
              referrerpolicy="origin"
              id="rgvjjxlzwlaosizpesgtapfu"
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://logo.samandehi.ir/Verify.aspx?id=314905&p=xlaorfthaodspfvlobpddshw",
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                )
              }
              alt="logo-samandehi"
              src={
                "https://logo.samandehi.ir/logo.aspx?id=314905&p=qftinbpdshwlbsiylymaujyn"
              }
            />
          </div>
          {/* <a
           id="W5Ejk7KdGFvNSHionRgZ" 
            onClick={() =>
              window.open(
                "https://trustseal.enamad.ir/?id=287609&amp;Code=W5Ejk7KdGFvNSHionRgZ",
                "Popup",
                "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
              )
            }
            className="samandehi"
            referrerpolicy="origin"
            target="_blank"
          > */}
          <a referrerpolicy="origin" target="_blank"  onClick={() =>
                window.open(
                  "https://trustseal.enamad.ir/?id=287609&amp;Code=W5Ejk7KdGFvNSHionRgZ",
                  "Popup",
                  "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                )
              } href="https://trustseal.enamad.ir/?id=287609&amp;Code=W5Ejk7KdGFvNSHionRgZ" className="samandehi ">
          <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=287609&amp;Code=W5Ejk7KdGFvNSHionRgZ" alt="logo" style={{cursor:'pointer'}} id="W5Ejk7KdGFvNSHionRgZ"/>
            {/* <img src={Enamad} referrerpolicy="origin" alt="enamad" /> */}
            {/* <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=287609&amp;Code=W5Ejk7KdGFvNSHionRgZ">
            <img referrerpolicy="origin" src={"https://Trustseal.eNamad.ir/logo.aspx?id=287609&amp;Code=W5Ejk7KdGFvNSHionRgZ"} alt="logo" style={{cursor:'pointer'}} id="W5Ejk7KdGFvNSHionRgZ"/></a> */}
          </a>
        </div>
        <div className="footerItemabout">
          <h3>درباره ما</h3>
          <p>
            ازمونها به منظور شناسایی مسائل مراجعین موسسه فرهنگی هنری حامی تغییر
            مثبت بینش جهت پایش وبرگزاری دوره های مهارتهای زندگی اجرا میگردد
          </p>
        </div>
        <div className="footerItem usefull">
          <div className="footerHeader">
            <h3>لینک های مفید</h3>
          </div>
          <div className="footerInfo">
            <div className="InfoItem">
              <NavLink to="/ListExams">
                <p>لیست آزمون ها</p>
              </NavLink>
              <div className="iconFooter">
                <img src={Linksite} alt="Linksite" />
              </div>
            </div>
            <div className="InfoItem">
              <NavLink to="/Articles">
                <p>مقالات </p>
              </NavLink>
              <div className="iconFooter">
                <img src={Linksite} alt="Linksite" />
              </div>
            </div>
            {/* <div className="InfoItem">
              <NavLink to="/Store">
                <p>فروشگاه</p>
              </NavLink>
              <div className="iconFooter">
                <img src={Linksite} alt="Linksite" />
              </div>
            </div> */}
            <div className="InfoItem">
              <NavLink to="/Support">
                <p>پشتیبانی</p>
              </NavLink>
              <div className="iconFooter">
                <img src={Linksite} alt="Linksite" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerItem">
          <div className="footerHeader">
            <h3>راه های ارتباطی</h3>
          </div>
          <div className="footerInfo">
            <div className="InfoItem">
              <a href="tel:09057647673">
                {" "}
                <p>09057647673</p>
              </a>
              <div className="iconFooter">
                <img src={Phone} alt="phone" />
              </div>
            </div>
            <div className="InfoItem">
              <a href="tel:02634431500">
                {" "}
                <p>026-34431500</p>
              </a>
              <div className="iconFooter">
                <img src={Phone} alt="phone" />
              </div>
            </div>
            <div className="InfoItem">
              <a href="mailto:Hamivalue@gmail.com">
                <p>Hamivalue@gmail.com</p>
              </a>
              <div className="iconFooter">
                <img src={Email1} alt="phone" />
              </div>
            </div>
            <div className="InfoItem">
              <a>
                <p>کرج فلکه اول گوهردشت برج نیکامال</p>
              </a>
              <div className="iconFooter">
                <img src={Loacation} alt="phone" />
              </div>
            </div>
            <div className="InfoItem appFooter">
              <a
                href="https://www.instagram.com/Elhamzare_/"
                className="iconFooter"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="whatsapp://send?text=Hello World!&phone=+989057647673"
                className="iconFooter"
              >
                <img src={Whatsapp} alt="Whatsapp" />
              </a>
              <a href="" className="iconFooter">
                <img src={Telegram} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>
          2021© تمامی حقوق مادی و معنوی این سایت متعلق به مجموعه حامی تست می
          باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد
        </p>
        <p>
          Created by <a href="https://alireza-samaei.com/"> Samaei Groups</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;

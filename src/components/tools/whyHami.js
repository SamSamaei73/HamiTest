import React from "react";
import "../../css/whyHami.css";
import Gif1 from "../../images/110.png";
import Gif4 from "../../images/111.jpeg";
import Gif2 from "../../images/121.gif";
import Gif3 from "../../images/122.gif";
import Gif5 from "../../images/123.gif";
import { Slide } from "react-awesome-reveal";

const whyHami = () => {
  return (
    <div id="whyHami">
      <div className="WhyTitle">
        <h3>چرا حامی تست را انتخاب می کنید؟</h3>
      </div>
      <Slide direction="right" className="FadeStyle">
        <div className="boxHami">
          <div className="boxImage">
            <div className="imageWhy">
              <img src={Gif1} alt="gifInfo" />
            </div>11111111
          </div>
          <div className="boxInfo textWhy">
            <h3>تست روانشناسی</h3>
            <p>
              در اینجا ما برای شما آزمون های مشهور تست افسردگی و بسیاری از تست
              های روانشناسی کاربردی را با بهترین تفسیر و تحلیل آماده کرده ایم.
              حامی تست یکی از بهترین سایت های روانشناسی ارزیابی آنلاین است که
              توانسته با استفاده از تست های معتبر و روش های دقیق، رضایت درصد
              قابل توجهی از کاربران را جلب نماید.
            </p>
          </div>
        </div>
      </Slide>

      <Slide direction="left" className="FadeStyle">
        <div className="boxHami">
          <div className="boxInfo textWhy">
            <h3>چرا حامی تست معتبر است؟</h3>
            <p>
              تست های روانشناسی حامی تست طی یک فرایند طولانی توسط متخصصین این
              حوزه تهیه می شود. هسته علمی حامی تست شامل اساتیدی از رشته های
              روانسنجی، روانشناسی بالینی، روانشناسی شخصیت، آمار، مدیریت و
              پژوهشگری است. در کنار تیم علمی حامی تست، همچنین متخصصین ما همواره
              در تلاشند بروز ترین تست های شخصیت شناسی و روانشناسی دنیا را در
              اختیار کاربران بگذارند.
            </p>
          </div>
          <div className="boxImage">
            <div className="imageWhy">
              <img src={Gif2} alt="gifInfo" />
            </div>
          </div>{" "}
        </div>
      </Slide>

      <Slide direction="right" className="FadeStyle">
        <div className="boxHami">
          <div className="boxImage">
            <div className="imageWhy">
              <img src={Gif3} alt="gifInfo" />
            </div>
          </div>{" "}
          <div className="boxInfo textWhy">
            <h3>مزایای استفاده از تست های حامی تست</h3>
            <p>
              در اینجا ما برای شما آزمون های مشهور تست افسردگی و بسیاری از تست
              های روانشناسی کاربردی را با بهترین تفسیر و تحلیل آماده کرده ایم.
              حامی تست یکی از بهترین سایت های روانشناسی ارزیابی آنلاین است که
              توانسته با استفاده از تست های معتبر و روش های دقیق، رضایت درصد
              قابل توجهی از کاربران را جلب نماید.
            </p>
          </div>
        </div>
      </Slide>

      <Slide direction="left" className="FadeStyle">
        <div className="boxHami">
          <div className="boxInfo textWhy">
            <h3>کاربرد های فردی تست های حامی تست</h3>
            <p>
              کلیه افراد می توانند از انواع تست های روانشناسی حامی تست برای
              خودشناسی استفاده کنند. آزمون های فردی حامی تست را می توان در دو
              دسته کلی جای داد: آزمون های درون فردی: این آزمون ها برای ارزیابی
              توانایی ها، مهارت ها و ویژگی های هر فرد به کار می روند. آزمون های
              بین فردی: این دسته از تست ها را می توانند برای بررسی کیفیت روابط
              بین فردی مورد استفاده قرار گیرند.
            </p>
          </div>
          <div className="boxImage">
            <div className="imageWhy">
              <img src={Gif4} alt="gifInfo" />
            </div>
          </div>{" "}
        </div>
      </Slide>

      <Slide direction="right" className="FadeStyle">
        <div className="boxHami">
          <div className="boxImage">
            <div className="imageWhy">
              <img src={Gif5} alt="gifInfo" />
            </div>
          </div>{" "}
          <div className="boxInfo textWhy">
            <h3>کاربردهای گروهی تست های حامی تست </h3>
            <p>
              سازمان ها، مراکز آموزشی و مشاوره با تست های حامی تست می توانند به
              صورت گروهی و فردی نیازهای ارزیابی خود را به بهترین شکل برطرف
              نمایند. سازمان ها با استفاده از پروتال اختصاصی خود و به همراه
              ابزارهای دقیق حامی تست کارکنان خود را به نحو دقیقی گزینش می کنند.
              مراکز آموزشی از تست های تحصیلی حامی تست و تست رغبت سنج استرانگ
              برای بررسی استعداد و هدایت دانش آموزان استفاده می نمایند. مراکز
              مشاوره به کمک پروتال اختصاصی خود توانسته اند تا انواع تست های
              بالینی را در سریع ترین زمان ممکن برای مراجعین خود اجرا کنند.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default whyHami;

import React from "react";
import "../../css/ArticlesHamitest.css";
import Hosh from "../../images/454545.jpeg";
import Salamat from "../../images/1399031310312799420526314.jpeg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";


const ArticlesHamitest = () => {

  return (
    <div id="ArticlesHamitest">
      <div className="artHami">
        <h3>مقالات</h3>
      </div>
      <div className="artMain">
        <Popup
          trigger={
            <div className="artBox">
              <div className="infoArticale">
                <div className="infoArticaletitle">
                  <h6>نقش سلامت روان و بهداشت روانی سازمان ها</h6>
                </div>
                <div className="infoArticaleMain">
                  <p>
                    سلامت روانی و فکری کارکنان در سازمان به اندازه تولید و بهره
                    وری از اهمیت بسزایی برخوردار است. یکی از عوامل مهم درون
                    سازمانی تامین بهداشت روانی کارکنان است. درصورتی شرایط کاری
                    مناسب در سازمان ایجاد می شود که ...{" "}
                  </p>
                </div>
              </div>
              <div className="imagearticle">
                <img src={Salamat} alt="Salamat" />
              </div>
            </div>
          }
          modal
        >
          <div className="popupMainArticle">
            <div className="popoupImageArti">
              <img src={Salamat} alt="Salamat" />
            </div>
            <div className="popoupInfoArti">
              <div className="titleArtPop">
                <h3>نقش سلامت روان و بهداشت روانی سازمان ها</h3>
              </div>
              <div className="infoMainArtPop">
                <p>
                  مقدمه: سلامت روانی و فکری کارکنان در سازمان به اندازه تولید و
                  بهره وری از اهمیت بسزایی برخوردار است. یکی از عوامل مهم درون
                  سازمانی تامین بهداشت روانی کارکنان است. درصورتی شرایط کاری
                  مناسب در سازمان ایجاد می شود که کارکنان سازمان از سلامت روحی و
                  روانی و فکری مناسبی برخوردار باشند. هدف این مقاله بررسی مفهوم
                  بهداشت روانی در محیط کار است و اینکه چه عواملی در سلامت روان
                  کارکنان موثرترمی¬باشند.این تحقیق نشان می دهد در صورتی که
                  بهداشت روان در محیط کار تأمین شود می¬تواند تأثیرات مثبتی در بر
                  داشته باشد و باعث کاهش مشکلات اضطراب و استرس و افسردگی و دیگر
                  بیماری های روانی شود. بهداشت روانی کارکنان و ارتباط آن با شیوه
                  های مدیریت در سازمان مسئله ای بسیار مهم است. مدیران و
                  سرپرستارانی که با کارکنان خود روش های علمی و اعتدال را پیش
                  می¬گیرند باعث می¬شوند تا کارکنان آنها کمتر دچار فشار روانی
                  شوند.همچنین باعث می¬شود ارتباط دو سویه خوبی را هم باهم برقرار
                  نمایند. برای اینکه بتوانیم سلامت روانی برای کارکنان سازمان در
                  حیطه شغلی ایجاد کنیم باید به خوبی از توانمندی¬ها و
                  محدودیت¬هایشان آگاه باشیم. بهزیستی و سلامت روان کارکنان به
                  میزان قابل توجهی بستگی به رفتار مدیران آنها دارد. مدیران باید
                  هنجارهای اخلاقی معین مثل حس سلوک، عدالت، صداقت و احترام را
                  مدنظر قرار دهند. نقش¬های مدیریتی در سازمان شامل رئیس و رهبر،
                  تنظیم و کنترل کننده، توزیع کننده، سخنگو، کارآفرین، حل کننده
                  مشکلات و مذاکره کننده را در سازمان داراست. مدیر می¬تواند
                  فنون¬های مشاوره ای را در سازمان بکار گیرد. او می¬تواند هنگام
                  وقوع مشکلات آنها را حل کند و فشارهای روانی کارکنان را کاهش
                  دهد. یکی از نقش های رهبر ایفای نقش نمونه است که طی آن لازم است
                  رهبر خود نمونه بارز رفتاری باشد که از افراد سازمان انتظار می
                  رود مانند آن باشند. اگر افراد سازمانی دچار اختلال روانی نشوند
                  و از کار خود احساس رضایت کنند و علاقه مند به ادامه دادن آن
                  شوند، با یکدیگر و با محیط کار روابط مطلوبی برقرار می کنند و
                  بالاخره علی رغم وجود پاره ای از مشکلات در بیرون و درون سازمان
                  احساس خوشبختی از عضویت در سازمان می¬کنند و در نهایت فضای روانی
                  مناسبی بر کار حاکم می شود.این شرایطی است که اهداف بهداشت روانی
                  را در سازمان تأمین می کند. مدیران سازمان با به کارگیری اصول
                  بهداشت روانی و سالم سازی محیط و فضای روانی کار، ضمن شناسایی
                  نیازها، محدودیت ها و احترام به شخصیت کارکنان، زمینه های شور و
                  تبادل و ایجاد مسئولیت را در کارکنان بوجود می آورند و به جای
                  خرده گیری از کادر آموزشی به آنها اجازه ابتکارعمل و تبادل نظر
                  در تصمیم گیری می دهند. آنها اهداف سازمانی را برای آنها روشن
                  می¬سازند و با اعمال مدیریت و رهبری انعطاف پذیر، در صورت امکان
                  محیط خود را تغییر می¬دهند و با دادن اطلاعات لازم به تمامی کادر
                  و ایجاد ارتباطات صحیح، در توسعه منابع و امکانات، برانگیختن
                  نیروی کار متعهد، ماهر و قابل انعطاف تلاش می¬کنند و ضمن حفظ و
                  نگهداری ساختار سازمان و توجه به سلامت جسمی و روانی کلیه اعضا،
                  حجم بالایی از کیفیت آموزشی را با کمترین هزینه ارائه می¬دهند و
                  این اطمینان در آنان ایجاد می-شود که مدیریت اثربخش بدون توجه به
                  سلامت روانی مدیران حاصل نمی شود. مدیران متعهد و مسئول باید
                  بدانند که سازمانشان در چه وضعیتی قرار دارند و برای دستیابی به
                  اهداف سازمان باید چه معیارهایی برای سنجش عملکرد سازمان خود در
                  نظر گیرند. سلامت روان یعنی اینکه هر فرد از توانایی های فردی
                  خود آگاه باشد، از عهده¬ی فشارهای عادی زندگی برآید و بتواند به
                  صورت مولد و مفید کار کند و با جامعه خود همکاری داشته باشد.
                  فردی که بتواند با اعضای خانواده،همکاران،همسایگان و بطور کلی
                  اجتماع پیرامون خود خوب سازگار شود ازنظر بهداشت روانی بهنجار
                  خواهد بود. تعارض ها و کشمکش های درونی و بیرونی خـود را حل
                  نموده و در مقابل ناکامی¬های اجتناب¬ناپذیر زندگی مقاومت خواهد
                  داشت. کسی که نتواند با محیط خود درست برخورد کند از نظر سلامت
                  روانی مشکل دارد. عوامل بسیاری باعث برهم خوردن سلامت روانی
                  می¬شود که از جمله آنها می¬توان به عدم رعایت عدالت اجتماعی،
                  فراهم نبودن فرصت¬های شکوفایی برای افراد، وجود تبعیض¬های
                  غیرمنطقی و عدم ایجاد امنیت اجتماعی اشاره کرد. استرس¬های روانی،
                  برای هر فرد و سازمانی هزینه و خسارت¬های زیادی به همراه دارد.
                  سلامت روان افراد می¬تواند اطلاعات ارزشمندی را در زمینه برنامه
                  ریزی¬های آموزشی، درمان و پیشگیری از بروز اختلالات روانی در
                  اختیار مسئولان، برنامه ریزان و مدیران سازمان¬ها و مراکز ارایه
                  دهنده خدمات قرار دهد. عوامل استرس¬زای سازمانی عواملی هستند که
                  حاصل روابط جمعی در داخل گروه یا سازمان بوده و مستقیماً با
                  محیط¬های کار و شرایط کاری در ارتباط هستند. مهم¬ترین عوامل
                  سازمانی استرس¬زا شامل ویژگی¬های شغل، ویژگی¬های نقش، روابط کاری
                  میان فردی، ساختار و جوسازمانی و سبک¬های مدیریت می¬باشد. چند
                  اصول در بهداشت روانی در سازمان موثرند که شامل ایجاد شرایطی است
                  که کارکنان سازمان با اعتقاد قلبی و با صمیمیت برای خود وهمکاران
                  خویش احترام قائل شوند و شناسایی دلایل واقعی کم کاری،غیبت از
                  کار، بی حوصلگی و بی علاقگی به کار، کم توجهی و بی¬دقتی کارکنان
                  و آشنا ساختن کارکنان با واقعیت¬های محیط کار و حذف آن دسته از
                  معیارها و عوامل سازمانی که از لحاظ اخلاقی، انسانی و فرهنگ
                  سازمانی صحیح تلقی نمی¬شود. بنابراین مدیران باید تلاش کنند تا
                  محیط کار برای کارکنان اضطراب آورنباشد و کارمندان احساس امنیت
                  شغلی کنند و با شادی و نشاط و شوق و انگیزه به دور ازهرگونه خشم
                  و درگیری بیهوده به وظایف خود عمل نمایند.
                </p>
              </div>
            </div>
          </div>
        </Popup>

        <Popup
          trigger={
            <div className="artBox">
              <div className="infoArticale">
                <div className="infoArticaletitle">
                  <h6>رابطه بین هوش هیجانی و عملکرد کارکنان</h6>
                </div>
                <div className="infoArticaleMain">
                  <p>
                    هوش هیجانی از مفهوم هوش اجتماعی بدست آمده است. هیجان ها نقش
                    خیلی مهمی در زندگی افراد دارند. هوش هیجانی به ما کمک می کند
                    تا هیجانات خود و دیگران را شناسایی و کنترل کنیم ...{" "}
                  </p>
                </div>
              </div>
              <div className="imagearticle">
                <img src={Hosh} alt="Hosh" />
              </div>
            </div>
          }
          modal
        >
          <div className="popupMainArticle">
            <div className="popoupImageArti">
              <img src={Hosh} alt="Hosh" />
            </div>
            <div className="popoupInfoArti">
              <div className="titleArtPop">
                <h3>رابطه بین هوش هیجانی و عملکرد کارکنان</h3>
              </div>
              <div className="infoMainArtPop">
                <p>
                  هوش هیجانی از مفهوم هوش اجتماعی بدست آمده است. هیجان ها نقش
                  خیلی مهمی در زندگی افراد دارند. هوش هیجانی به ما کمک می کند تا
                  هیجانات خود و دیگران را شناسایی و کنترل کنیم و به خودمان
                  انگیزه بدهیم و در شرایط سخت و دشوار مقاوم باشیم و بتوانیم
                  استرس خود را کنترل کنیم. هیجان ها می توانند به رویاها و
                  ادراکات و خاطره های ما انرژی بدهند. هوش هیجانی اهداف فرد را در
                  زندگی شکل می دهد و با موفقیت در زندگی هم ارتباط دارد. کارکنانی
                  که هوش هیجانی بالایی دارند می توانند احساسات و علت¬های استرس و
                  مشکلات کاری خود را ارزیابی کنند. در نتیجه وفاداری بیشتری به
                  سازمان نشان می دهند. کارکنانی که هوش هیجانی بالایی دارند بهتر
                  می توانند موقعیت شغلی خوبی برای خود پیدا کنند. افراد با هوش
                  هیجانی بالا می توانند با دیگران راحت تعامل کنند و در کنترل و
                  اداره کردن احساسات دیگران مهارت دارند. همین مهارت ها، محبوبیت
                  و نفوذ شخصی را تقویت می کند و فرد در فعالیت های مختلف اجتماعی
                  و ارتباط صمیمانه با دیگران موفق می شود. میان هوش هیجانی و
                  رضایت شغلی رابطه است و هوش هیجانی این قدرت را دارد که رضایت
                  شغلی را پیش بینی کند. عامل مرتبط دیگر با هوش هیجانی عملکرد
                  کارکنان است. هوش هیجانی بر نحوه عملکردی که باعث موفقیت افراد
                  می شود و همچنین بر ارزیابی آن عملکرد توسط خود فرد و همکارها یا
                  مدیران او تاثیر می گذارد. خودکارآمدی با رضایت شغلی در ارتباط
                  است. خودکارآمدی عموماً به عنوان یک حوزه اختصاصی در نظر گرفته
                  می شود. یعنی فرد می تواند خودباوری نسبتاً محکمی در دامنه های
                  مختلف یا موقعیت های عملکردی خاصی داشته باشد. خودکارآمدی فرد می
                  تواند باعث مشخص شدن لیاقت و قابلیت فرد برای کنار آمدن مؤثر با
                  خیلی از موقعیت های بد و تنش زا باشد. توسعه و بهبود فرایند
                  یادگیري درسازمان و حرکت به سمت سازمان یادگیرنده می تواند تا حد
                  زیادي بر بهبود عملکرد سازمانی تاثیر بگذارد. یادگیری سازمانی را
                  ابزاري می دانند که به وسیلۀ آن از دانش فردي و سازمانی محافظت
                  می شود. یادگیری سازمانی شرایطی را برای همۀ افراد ایجاد می کند
                  که در آن افراد باید شرایط و تغییرات را بپذیرند و از آن به
                  عنوان فرایند دائمی استقبال کنند. هوش هیجانی تأثیر بسیاری بر
                  شادی و رضایت مردم دارد. کسانی که هوش هیجانی خود را به کار می
                  گیرند، ظرفیت خوب و مناسبی برای تعهد، پذیرش مسئولیت و قبول
                  چارچوب اخلاقی دارند. در رابطه با افراد دیگر، خیلی دلسوز و با
                  ملاحظه هستند و زندگی عاطفی خوبی دارند. هوش هیجانی باعث می¬شود
                  که نوآوری در افراد ظاهر شود و آن ها را وادار می نماید تا
                  خودشان را سریع تر با تغییرات ناگهانی و شرایطی که عدم اطمینان
                  در آن وجود دارد هماهنگ کنند. حضور این افراد در سازمان باعث
                  بوجود آمدن هنجارهایی مثل درک متقابل، توجه به دیدگاه¬ها، اهمیت
                  دادن به دیگران، تقویت اعتماد به نفس و حس هویت و رفتار و
                  برخوردی مناسب با ارباب رجوع می شود. وجود همۀ این هنجارها سبب
                  بهتر شدن عملکرد کارکنان می شود. هوش هیجانی در زمینه 1- رشد و
                  توسعه 2- گزینش و استخدام 3- عملکرد گروهی بالا 4- تصمیم گیری در
                  مورد نیروی کار نقش حیاتی و مهمی دارد. هوش هیجانی 4 بعد دارد:
                  1. بتوانیم عواطف خودمان و دیگران را شناسایی کنیم: مهم ترین
                  توانایی مرتبط با هوش هیجانی این است که ازهیجان¬ها و احساساتمان
                  آگاه باشیم. توانایی خودآگاهی به مدیران اجازه می دهد تا نقاط
                  قوت وضعفشان را بشناسند و به ارزش هایی که دارند اعتماد پیدا
                  کنند. مدیران خودآگاه برای آزمون دقیق روحیاتشان از خوداگاهی
                  استفاده می کنند و به طور شهودی و از راه درک مستقیم می¬دانند که
                  چگونه دیگران را تحت تأثیر قرار بدهند. 2. کاربرد عواطف: کاربرد
                  عواطف به معنای توانایی استفاده از عواطف برای کمک به کسب نتایج
                  مطلوب، حل مسائل و استفاده از فرصت ها و عواطف برای برانگیختن
                  افراد است. این بعد هسته اصلی کار حرفه¬ای است. 3. بتوانیم عواطف
                  دیگران را بفهمیم و درک کنیم: توانایی درک هیجان های پیچیده و
                  آگاهی از علت¬های بوجود آورنده هیجانها و چگونگی تغییر یافتن
                  هیجان¬ها از یک حالت به حالت دیگر را درک هیجان¬ها می-گویند.
                  مدیرانی که از این توانایی برخوردارند، برای گسترش شور و
                  اشتیاقشان و حل اختلافاتشان از مهربانی استفاده می¬نمایند. آنها
                  به کمک توانایی¬هایی که دارند می¬توانند بفهمند که چه چیزی باعث
                  برانگیختن یا آرام شدن افراد و گروه ها می-شود. پس می¬توانند
                  همکاری بهتری با دیگران داشته باشند. 4. مدیریت هیجان¬ها: مدیریت
                  هیجان¬ها به معنای توانایی کنترل و اداره کردن هیجانات خودمان و
                  دیگران است. افرادی که این توانایی را دارند، اجازه نمی¬دهند که
                  بدخلقی و پرخاشگری¬ها¬ی گاه و بی گاه در طول روز از آنان سر
                  بزند. ایشان از توانایی مدیریت هیجان برای این منظور استفاده می¬
                  نمایند و روحیه بد را به محیط کار وارد نمی نمایند. یا منشأ و
                  علت بروز آن مشکل را به شیوه ای منطقی برای مردم توضیح می دهند.
                  پس آن ها می دانند که منشأ این بدخلقی ها کجاست وزمان لازم برای
                  بازگشت به حالت طبیعی خود را می توانند تشخیص دهند.
                </p>
              </div>
            </div>
          </div>
        </Popup>
      </div>

      <div className="btnArticle">
        <NavLink to="/Articles">
          <button className="btnArticleStyle">بیشتر</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ArticlesHamitest;
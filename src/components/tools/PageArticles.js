import React from 'react';
import '../../css/ArticlesHamitest.css';
import Header from '../tools/Header';
import Navbars from '../tools/Navbars';
import Footer from '../tools/Footer';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Hosh from '../../images/454545.jpeg';
import Salamat from '../../images/1399031310312799420526314.jpeg';
import Amalkard from '../../images/4534.jpeg';
import Sazman from '../../images/wwew.jpeg';
import { ArticleTi } from "../tools/Constant";




const PageArticles = () => {
  document.title = ArticleTi;

  return (
    <div id='PageArticles'>
        <Header/>
        <Navbars/>
          <div className="MainPageArticle">


          <div className="artMain">


           <Popup trigger={
            <div className="artBox">
                <div className="infoArticale">
                    <div className="infoArticaletitle">
                        <h6>نقش سلامت روان و بهداشت روانی سازمان ها</h6>
                    </div>
                    <div className="infoArticaleMain">
                        <p>سلامت روانی و فکری کارکنان در سازمان به اندازه  تولید و بهره وری  از اهمیت بسزایی برخوردار است. یکی از عوامل مهم درون سازمانی تامین بهداشت روانی کارکنان است. درصورتی شرایط کاری مناسب در سازمان ایجاد می شود که ...  </p>
                    </div>
                </div>
                <div className="imagearticle">
                    <img src={Salamat} alt="Salamat" />
                </div>
        </div>} modal>
            <div className="popupMainArticle">
                <div className="popoupImageArti">
                <img src={Salamat} alt="Salamat" />

                </div>
                <div className="popoupInfoArti">
                    <div className="titleArtPop">
                        <h3>نقش سلامت روان و بهداشت روانی سازمان ها</h3>
                    </div>
                    <div className="infoMainArtPop">
                        <p>مقدمه:
سلامت روانی و فکری کارکنان در سازمان به اندازه  تولید و بهره وری  از اهمیت بسزایی برخوردار است. یکی از عوامل مهم درون سازمانی تامین بهداشت روانی کارکنان است. درصورتی شرایط کاری مناسب در سازمان ایجاد می شود که کارکنان سازمان از سلامت روحی و روانی و فکری مناسبی برخوردار باشند. هدف این مقاله بررسی مفهوم بهداشت روانی در محیط کار است و اینکه چه عواملی در سلامت روان کارکنان موثرترمی¬باشند.این تحقیق نشان می دهد در صورتی که بهداشت روان در محیط کار تأمین شود می¬تواند تأثیرات مثبتی در بر داشته باشد و باعث کاهش مشکلات اضطراب و استرس و افسردگی و دیگر بیماری های روانی شود.

بهداشت روانی کارکنان و ارتباط آن با شیوه های مدیریت در سازمان مسئله ای بسیار مهم است. مدیران و سرپرستارانی که با کارکنان خود روش های علمی و اعتدال را پیش می¬گیرند باعث می¬شوند تا کارکنان آنها کمتر دچار فشار روانی شوند.همچنین باعث می¬شود ارتباط دو سویه خوبی را هم باهم برقرار نمایند. برای اینکه بتوانیم سلامت روانی برای کارکنان سازمان در حیطه شغلی ایجاد کنیم باید به خوبی از توانمندی¬ها و محدودیت¬هایشان آگاه باشیم. بهزیستی و سلامت روان کارکنان به میزان قابل توجهی بستگی به رفتار مدیران آنها دارد. مدیران باید هنجارهای اخلاقی معین مثل حس سلوک، عدالت، صداقت و احترام را مدنظر قرار دهند. نقش¬های مدیریتی در سازمان شامل رئیس و رهبر، تنظیم و کنترل کننده، توزیع کننده، سخنگو، کارآفرین، حل کننده مشکلات و مذاکره کننده را در سازمان داراست. مدیر می¬تواند فنون¬های مشاوره ای را در سازمان بکار گیرد. او می¬تواند هنگام وقوع مشکلات آنها را حل کند و فشارهای روانی کارکنان را کاهش دهد. یکی از نقش های رهبر ایفای نقش نمونه است که طی آن لازم است رهبر خود نمونه بارز رفتاری باشد که از افراد سازمان انتظار می رود مانند آن باشند. اگر افراد سازمانی دچار اختلال روانی نشوند و از کار خود احساس رضایت  کنند و علاقه مند به ادامه دادن آن شوند، با یکدیگر و با محیط کار روابط مطلوبی برقرار می کنند و بالاخره علی رغم وجود پاره ای از مشکلات در بیرون و درون سازمان احساس خوشبختی از عضویت در سازمان می¬کنند و در نهایت فضای روانی مناسبی بر کار حاکم می شود.این شرایطی است که اهداف بهداشت روانی را در سازمان تأمین می کند. 

مدیران سازمان با به کارگیری اصول بهداشت روانی و سالم سازی محیط و فضای روانی کار، ضمن شناسایی نیازها، محدودیت ها و احترام به شخصیت کارکنان، زمینه های شور و تبادل و ایجاد مسئولیت را در کارکنان بوجود می آورند و به جای خرده گیری از کادر آموزشی به آنها اجازه ابتکارعمل و تبادل نظر در تصمیم گیری می دهند. آنها اهداف سازمانی را برای آنها روشن می¬سازند و با اعمال مدیریت و رهبری انعطاف پذیر، در صورت امکان محیط خود را تغییر می¬دهند و با دادن اطلاعات لازم به تمامی کادر و ایجاد ارتباطات صحیح، در توسعه منابع و امکانات، برانگیختن نیروی کار متعهد، ماهر و قابل انعطاف تلاش می¬کنند و ضمن حفظ و نگهداری ساختار سازمان و توجه به سلامت جسمی و روانی کلیه اعضا، حجم بالایی از کیفیت آموزشی را با کمترین هزینه ارائه می¬دهند و این اطمینان در آنان ایجاد می-شود که مدیریت اثربخش بدون توجه به سلامت روانی مدیران حاصل نمی شود. مدیران متعهد و مسئول باید بدانند که سازمانشان در چه وضعیتی قرار دارند و برای دستیابی به اهداف سازمان باید چه معیارهایی برای سنجش عملکرد سازمان خود در نظر گیرند.

سلامت روان یعنی اینکه هر فرد از توانایی های فردی خود آگاه باشد، از عهده¬ی فشارهای عادی زندگی برآید و بتواند به صورت مولد و مفید کار کند و با جامعه خود همکاری داشته باشد. فردی که بتواند با اعضای خانواده،همکاران،همسایگان و بطور کلی اجتماع پیرامون خود خوب سازگار شود ازنظر بهداشت روانی بهنجار خواهد بود. تعارض ها و کشمکش های درونی و بیرونی خـود را حل نموده و در مقابل ناکامی¬های اجتناب¬ناپذیر زندگی مقاومت خواهد داشت. کسی که نتواند با محیط خود درست برخورد کند از نظر سلامت روانی مشکل دارد. عوامل بسیاری باعث برهم خوردن سلامت روانی می¬شود که از جمله آنها می¬توان به عدم رعایت عدالت اجتماعی، فراهم نبودن فرصت¬های شکوفایی برای افراد، وجود تبعیض¬های غیرمنطقی و عدم ایجاد امنیت اجتماعی اشاره کرد. استرس¬های روانی، برای هر فرد و سازمانی هزینه و خسارت¬های زیادی به همراه دارد. سلامت روان افراد می¬تواند اطلاعات ارزشمندی را در زمینه برنامه ریزی¬های آموزشی، درمان و پیشگیری از بروز اختلالات روانی در اختیار مسئولان، برنامه ریزان و مدیران سازمان¬ها و مراکز ارایه دهنده خدمات قرار دهد.

عوامل استرس¬زای سازمانی عواملی هستند که حاصل روابط جمعی در داخل گروه یا سازمان بوده و مستقیماً با محیط¬های کار و شرایط کاری در ارتباط هستند. مهم¬ترین عوامل سازمانی استرس¬زا شامل ویژگی¬های شغل، ویژگی¬های نقش، روابط کاری میان فردی، ساختار و جوسازمانی و سبک¬های مدیریت می¬باشد. 
چند اصول در بهداشت روانی در سازمان موثرند که شامل ایجاد شرایطی است که کارکنان سازمان با اعتقاد قلبی و با صمیمیت برای خود وهمکاران خویش احترام قائل شوند و شناسایی دلایل واقعی کم کاری،غیبت از کار، بی حوصلگی و بی علاقگی به کار، کم توجهی و بی¬دقتی کارکنان و آشنا ساختن کارکنان با واقعیت¬های محیط کار و حذف آن دسته از معیارها و عوامل سازمانی که از لحاظ اخلاقی، انسانی و فرهنگ سازمانی صحیح تلقی نمی¬شود. بنابراین مدیران باید تلاش کنند تا محیط کار برای کارکنان اضطراب آورنباشد و کارمندان احساس امنیت شغلی کنند و با شادی و نشاط و شوق و انگیزه به دور ازهرگونه خشم و درگیری بیهوده به وظایف خود عمل نمایند. 
</p>
                    </div>
                </div>

            </div>
           </Popup>


           <Popup trigger={
            <div className="artBox">
                <div className="infoArticale">
                    <div className="infoArticaletitle">
                        <h6>رابطه بین هوش هیجانی و عملکرد کارکنان</h6>
                    </div>
                    <div className="infoArticaleMain">
                        <p>هوش هیجانی از مفهوم هوش اجتماعی بدست آمده است. هیجان ها نقش خیلی مهمی در زندگی افراد دارند. هوش هیجانی به ما کمک می کند تا هیجانات خود و دیگران را شناسایی و کنترل کنیم ... </p>
                    </div>
                </div>
                <div className="imagearticle">
                    <img src={Hosh} alt="Hosh" />
                </div>
        </div>} modal>
            <div className="popupMainArticle">
                <div className="popoupImageArti">
                <img src={Hosh} alt="Hosh" />

                </div>
                <div className="popoupInfoArti">
                    <div className="titleArtPop">
                        <h3>رابطه بین هوش هیجانی و عملکرد کارکنان</h3>
                    </div>
                    <div className="infoMainArtPop">
                        <p>هوش هیجانی از مفهوم هوش اجتماعی بدست آمده است. هیجان ها نقش خیلی مهمی در زندگی افراد دارند. هوش هیجانی به ما کمک می کند تا هیجانات خود و دیگران را شناسایی و کنترل کنیم و به خودمان انگیزه بدهیم و در شرایط سخت و دشوار مقاوم باشیم و بتوانیم استرس خود را کنترل کنیم. هیجان ها می توانند به رویاها و ادراکات و خاطره های ما انرژی بدهند. هوش هیجانی اهداف فرد را در زندگی شکل می دهد و با موفقیت در زندگی هم ارتباط دارد. کارکنانی که هوش هیجانی بالایی دارند می توانند احساسات و علت¬های استرس و مشکلات کاری خود را ارزیابی کنند. در نتیجه وفاداری بیشتری به سازمان نشان می دهند. کارکنانی که هوش هیجانی بالایی دارند بهتر می توانند موقعیت شغلی خوبی برای خود پیدا کنند. افراد با هوش هیجانی بالا می توانند با دیگران راحت تعامل کنند و در کنترل و اداره کردن احساسات دیگران مهارت دارند. همین مهارت ها، محبوبیت و نفوذ شخصی را تقویت می کند و فرد در فعالیت های مختلف اجتماعی و ارتباط صمیمانه با دیگران موفق می شود.
میان هوش هیجانی و رضایت شغلی رابطه است و هوش هیجانی این قدرت را دارد که رضایت شغلی را پیش بینی کند. عامل مرتبط دیگر با هوش هیجانی عملکرد کارکنان است. هوش هیجانی بر نحوه عملکردی که باعث موفقیت افراد     می شود و همچنین بر ارزیابی آن عملکرد توسط خود فرد و همکارها یا مدیران او تاثیر می گذارد. خودکارآمدی با رضایت شغلی در ارتباط است. خودکارآمدی عموماً به عنوان یک حوزه اختصاصی در نظر گرفته می شود. یعنی فرد می تواند خودباوری نسبتاً محکمی در دامنه های مختلف یا موقعیت های عملکردی خاصی داشته باشد. خودکارآمدی فرد می تواند باعث مشخص شدن لیاقت و قابلیت فرد برای کنار آمدن مؤثر با خیلی از موقعیت های بد و تنش زا باشد. 
توسعه و بهبود فرایند یادگیري درسازمان و حرکت به سمت سازمان یادگیرنده می تواند تا حد زیادي بر بهبود عملکرد سازمانی تاثیر بگذارد. یادگیری سازمانی را ابزاري می دانند که به وسیلۀ آن از دانش فردي و سازمانی محافظت می شود. یادگیری سازمانی شرایطی را برای همۀ افراد ایجاد می کند که در آن افراد باید شرایط و تغییرات را بپذیرند و از آن به عنوان فرایند دائمی استقبال کنند.
هوش هیجانی تأثیر بسیاری بر شادی و رضایت مردم دارد. کسانی که هوش هیجانی خود را به کار می گیرند، ظرفیت خوب و مناسبی برای تعهد، پذیرش مسئولیت و قبول چارچوب اخلاقی دارند. در رابطه  با افراد دیگر، خیلی دلسوز و با
ملاحظه هستند و زندگی عاطفی خوبی دارند. هوش هیجانی باعث می¬شود که نوآوری در افراد ظاهر شود و آن ها را وادار می نماید تا خودشان را سریع تر با تغییرات ناگهانی و شرایطی که عدم اطمینان در آن وجود دارد هماهنگ کنند. حضور این افراد در سازمان باعث بوجود آمدن هنجارهایی مثل درک متقابل، توجه به دیدگاه¬ها، اهمیت دادن به دیگران، تقویت اعتماد به نفس و حس هویت و رفتار و برخوردی مناسب با ارباب رجوع می شود. وجود همۀ این هنجارها سبب بهتر شدن عملکرد کارکنان می شود.
هوش هیجانی در زمینه 1- رشد و توسعه  2- گزینش و استخدام  3- عملکرد گروهی بالا    4- تصمیم گیری در مورد نیروی کار    نقش حیاتی و مهمی دارد. 

هوش هیجانی 4 بعد دارد:
1. بتوانیم عواطف خودمان و دیگران را شناسایی کنیم: 
مهم ترین توانایی مرتبط با هوش هیجانی این است که ازهیجان¬ها و احساساتمان آگاه باشیم. توانایی خودآگاهی به مدیران اجازه می دهد تا نقاط قوت وضعفشان را بشناسند و به ارزش هایی که دارند اعتماد پیدا کنند. مدیران خودآگاه برای آزمون دقیق روحیاتشان از خوداگاهی استفاده می کنند و به طور شهودی و از راه درک مستقیم می¬دانند که چگونه دیگران را تحت تأثیر قرار بدهند.

2. کاربرد عواطف: 
کاربرد عواطف به معنای توانایی استفاده از عواطف برای کمک به کسب نتایج مطلوب، حل مسائل و استفاده از فرصت ها و عواطف برای برانگیختن افراد است.  این بعد هسته اصلی کار حرفه¬ای است. 
3.  بتوانیم عواطف دیگران را  بفهمیم و درک کنیم: 
توانایی درک هیجان های پیچیده و آگاهی از علت¬های بوجود آورنده هیجانها و چگونگی تغییر یافتن هیجان¬ها از یک حالت به حالت دیگر را درک هیجان¬ها می-گویند. مدیرانی که از این توانایی برخوردارند، برای گسترش شور و اشتیاقشان و حل اختلافاتشان از مهربانی استفاده می¬نمایند. آنها به کمک توانایی¬هایی که دارند می¬توانند بفهمند که چه چیزی باعث برانگیختن یا آرام شدن افراد و گروه ها می-شود. پس می¬توانند همکاری بهتری با دیگران داشته باشند. 
4. مدیریت هیجان¬ها:
مدیریت هیجان¬ها به معنای توانایی کنترل و اداره کردن هیجانات خودمان و دیگران است.  افرادی که این توانایی را دارند، اجازه نمی¬دهند که بدخلقی و پرخاشگری¬ها¬ی گاه و بی گاه در طول روز از آنان سر بزند. ایشان از توانایی مدیریت هیجان برای این منظور استفاده می¬ نمایند و روحیه بد را به محیط کار وارد نمی نمایند.  یا منشأ و علت بروز آن مشکل را به شیوه ای منطقی برای مردم توضیح می دهند. پس آن ها می دانند که منشأ این بدخلقی ها کجاست وزمان لازم برای بازگشت به حالت طبیعی خود را می توانند تشخیص دهند. 
</p>
                    </div>
                </div>

            </div>
           </Popup>


           <Popup trigger={
            <div className="artBox">
                <div className="infoArticale">
                    <div className="infoArticaletitle">
                        <h6>اهمیت ارزیابی کارکنان</h6>
                    </div>
                    <div className="infoArticaleMain">
                        <p>عملکرد به معنای تلاش کارکنان برای انجام دادن مسئولیتهای محوله و یا دستیابی به اهداف تعیین شده برای آنان است. در چارت سازمانی برای ...  </p>
                    </div>
                </div>
                <div className="imagearticle">
                    <img src={Amalkard} alt="Amalkard" />
                </div>
        </div>} modal>
            <div className="popupMainArticle">
                <div className="popoupImageArti">
                <img src={Amalkard} alt="Amalkard" />

                </div>
                <div className="popoupInfoArti">
                    <div className="titleArtPop">
                        <h3>اهمیت ارزیابی کارکنان</h3>
                    </div>
                    <div className="infoMainArtPop">
                        <p> عملکرد به معنای تلاش کارکنان برای انجام دادن مسئولیتهای محوله و یا دستیابی به اهداف تعیین شده برای آنان است. در چارت سازمانی برای هر شغل مسئولیت‌¬هایی تعریف شده است که باید مطابق با انتظارات تعیین شده تحقق یابند. سنجش، ارزیابی و نمره ‌دهی به عملکرد کارکنان بر مبنای استانداردهای تعیین شده را ارزیابی عملکرد می¬نامند. در سالهای اخیرارزیابی عملکرد کارکنان از جایگاه ویژه¬ای در سازمانها برخوردار گردیده است. ارزیابی عملکرد کمک خواهد نمود تا صلاحیت، خصوصیات، کیفیت، مهارت، ظرفیت و پتانسیل بالقوه‌ی کارکنان برای مدیران جهت پیشبرد فعالیتهای آینده سازمان  مشخص شود.
                            بر اساس ارزیابی عملکرد، بهترین کارکنان پاداش دریافت خواهند کرد. دریافت پاداش انگیزه پیشرفت بیشتری به کارکنان خواهد داد. کارمندانی که شاهد دریافت پاداش توسط همکار خود هستند نیز تقویت می¬شوند تا توانایی و مهارت و تلاش خود را بیشتر کرده وآنان نیزازامتیازاتی که سازمان به کارکنان موفق می¬دهد برخوردار گردند.  
                            مدیران بیشترین مسئولیت را درمسئله ارزیابی عملکرد کارکنان دارا هستند. مدیران استانداردهای مد نظر را مشخص می¬کنند و نهایتاً تعیین می¬نمایند که عملکرد کارکنان در حیطه¬های مختلف در راستای اهداف سازمان قرار دارد یا خیر. 
                            به منظور دستیابی سازمان به اهداف تعیین شده، انجام ارزیابی¬های مختلف به مدیران کمک خواهد نمود تا افراد مناسبی را برای جایگاه¬های شغلی مختلف انتخاب نمایند. در این راستا استفاده از ابزارهای مناسب، منطقی، استاندارد و علمی جهت کنترل کمّیت و کیفیت کار بعنوان اموری زیر بنایی از اهمیت ویژه¬ای برخوردار است. 
                            مهمترین هدف ارزیابی عملکرد سازمان یا کارکنان، در نهایت سنجش میزان بهره¬وری آن سازمان است. در واقع با کمک ارزیابی عملکرد، به شاخص‌های کمّی یا کیفی دست پیدا خواهند نمود. سپس روند پیشرفت فعالیت‌ها بررسی خواهد شد و نهایتاً به بهبود عملکرد افراد و سازمان منجر خواهد شد.
                            بررسی‌های اولیه  زمانی نتیجه‌ بخش خواهد بود  که برنامه ریزی و اقدامات مؤثری صورت پذیرد. ارزیابی عملکرد نه تنها به کارکنان اجازه خواهد داد که به میزان کارآمدی خود پی ببرند، بلکه به آنها کمک خواهد نمود تا تلاش و مسیر آینده خود را نیز جهت صحیح بخشند. 
                            به علت سرعت و حجم بالای اطلاعات، هر سازمان با چالش¬هایی مواجه است که داشتن معیارهایی برای تعیین خط مشی سازمان و برنامه ریزی بر اساس نقاط ضعف و قوت آن ضرورت دارد. 
                            شناخت دقیق کارکنان به سازمان کمک می نماید براساس وضعیت منابع انسانی، سرمایهء انسانیِ در اختیار و اطلاعات موجود در خصوص کارکنان، کیفیت و کمّیت تولید و یا ارائه خدمات خود را بهینه نمایند. بنابراین به منظور همراستا ساختن اهداف سازمان و نحوه فعالیت افراد ضروری است کارکنان بازتابی در خصوص عملکردشان در اختیار داشته باشند تا بتوانند به یادگیری یا بهبود رفتارهای سازمانی خود مبادرت نمایند. برای افزایش رفتار مثبت و حذف رفتارهای نامتناسب، لازم است کارکنان از اثربخشی نحوه انجام وظایف و مسئولیت¬های خود اطلاعات درستی در اختیار داشته باشند.  
                            ارزیابی عملکرد فرایندی است که بوسیله آن نحوه عملکرد کارکنان در فواصل زمانی معین و به طور رسمی مورد سنجش و بررسی قرار می¬گیرد. ارزیابی عملکرد نیز مانند هر فرایند دیگری از مراحل مختلفی تشکیل شده است.  
                            در مرحله نخست هدف ازارزیابی عملکرد تعیین می¬شود. مرحله نخست از اهمیت ویژه¬ای برخوردار است. زیرا به نظر می¬رسد سیستم واحدی برای ارزیابی عملکرد همه کارکنان در همه سازمانها وجود ندارد. لذا هر سازمان متناسب با اهداف کلی و جزئی خود به ارزیابی عملکرد کارکنان خود مبادرت می¬نماید.  در گام بعد با توجه به استانداردهای وضع شده، شرح وظایف کارکنان تعریف می¬گردد. در این مرحله وظایف توسط مدیران رتبه بالاتر به صورت مبسوط به کارکنان توضیح داده می¬شود و انتظارات از شخص بیان می¬گردد. شاخص¬ها و استانداردهایی که سبب می¬شود عملکرد کارکنان مقبول واقع شود در این مرحله به کارکنان تفهیم می¬شود. جایگاه آزمونهایی که به سنجش توانایی، شخصیت، مدل رفتاری، نحوه واکنش به مسائل، استعداد و توانایی فرد و... می پردازد در این مرحله تعریف می¬شود که به مدیران و کارکنان کمک می¬نماید براساس شاخصهای واقعی و عملی به تعیین استانداردها و انتظارات مبادرت نمایند.  در گام سوم عملکرد واقعی افراد اندازه گیری خواهد شد. در گام چهارم عملکرد واقعی فرد با استانداردهای تعیین شده مورد قیاس قرار می¬¬گیرد؛ ونهایتاً درمرحله آخر نتایج حاصل در اختیار فرد قرار می¬گیرد. براساس نتایجی که در اختیار فرد گذاشته می¬شود انتظار می¬رود برنامه ریزی¬های لازم جهت بهبود نقاط ضعف، تقویت نقاط قوت و کسب مهارتهای جدید و ضروری صورت پذیرد. اگر بخواهیم عملکرد افراد را مؤثرتر کنیم، بهترین راه حل بازخورد نتایج است. 
                            بازیابی عملکرد بستگی به چند عامل  مهم دارد. در وهله اول شایسته است مدیران به قدری از توانایی برخوردار باشند که بتوانند افراد مناسب را شناسایی کرده، سپس آنها را جهت انجام مسئولیت¬هایشان آماده نمایند. در گام بعد قادر باشند عملکرد آنها را اندازه گیری نمایند زیرا این اقدام ارزش نسبی کار هر فرد را برای سازمان تعیین می نماید. نهایتاً به ارزیابی دستاوردهای فردی نیز کمک خواهد نمود. همچنین  مدیران بتوانند عملکرد کارکنان را تقویت نموده زیرا این مهم  به افراد یاری می رساند ضعف‌های خود را شناسایی و سپس اصلاح نمایند و در نهایت سبب اثر بخشی و بهره وری بیشتر سازمان خواهد شد. 
                            در این راستا مدیران خدماتی را که کارکنان ارائه می نمایند را جبران می نمایند. بدین معنا متناسب با عملکرد آنان حقوق و پاداش منصفانه به افراد تعلق خواهد گرفت. بدین ترتیب نیروهای بالقوه  شناسایی خواهند شد. 
                            سیستم ارزیابی عملکرد مدل¬ها و الگوهای گوناگونی دارند که به چهار مورد اشاره شده است:

                            :AHP 1. الگوی فرایند سلسله مراتبی
                            این الگو براساس اصل ترسیم درخت سلسله مراتب، اصل تدوین و تعیین اولویت¬ها و اصل سازگاری منطقی قضاوت¬ها می¬باشد.
                            ISO:  2. نظام مدیریت کیفیت ایزو
                            این نظام به چگونگی مدیریت فرآیندهای موثر بر کیفیت می¬پردازد و ضروریت هایی را تعیین کرده که برای گرفتن گواهینامه  باید همه¬ی این الزامات و نیازمندی¬ها برآورده شده باشند.
                            3. هرم عملکرد:
                            هر سیستم ارزیابی عملکرد باید رابطه¬ای  شفاف بین شاخص¬های عملکرد در سطوح مختلف سازمان برقرار نماید به نحوی که  هر یک از واحدها برای رسیدن به اهداف خود یکسان تلاش . هدف این الگو ایجاد ارتباط بین استراتژی سازمان و عملیاتی است که قصد انجام آن وجود دارد.
                            4. فرایند کسب و کار:  
                            این الگو تفاوت بین شاخص¬های ورودی، خروجی، فرایند و نتایج را نشان می دهد. ورودی ها شامل کارمندان ماهر، نیازهای مشتریان و سرمایه ست. خروجی ها شامل محصولات، خدمات و نتایج مالی است. سیستم پردازش شامل گواهی محصولات و تولید محصولات و تحویل محصولات است و نتایج نیز شامل فراهم کردن نیازهای مشتریان و جلب رضایت آنان می¬باشد. 
                            </p>
                    </div>
                </div>

            </div>
           </Popup>


           <Popup trigger={
            <div className="artBox">
                <div className="infoArticale">
                    <div className="infoArticaletitle">
                        <h6>نقش استعدادیابی در عملکرد سازمان ها</h6>
                    </div>
                    <div className="infoArticaleMain">
                        <p>استعدادیابی فرایندی مداوم در ارزیابی منابع انسانی است. هدف از استعدادیابی استخدام نیروهای ماهر و کارآزموده است. افرادی که استعدادها و توانایی¬های آنها هماهنگ و در راستای اهداف گسترده سازمان تعریف خواهد شد ... </p>
                    </div>
                </div>
                <div className="imagearticle">
                    <img src={Sazman} alt="Sazman" />
                </div>
        </div>} modal>
            <div className="popupMainArticle">
                <div className="popoupImageArti">
                <img src={Sazman} alt="Sazman" />

                </div>
                <div className="popoupInfoArti">
                    <div className="titleArtPop">
                        <h3>نقش استعدادیابی در عملکرد سازمان ها</h3>
                    </div>
                    <div className="infoMainArtPop">
                        <p>استعدادیابی فرایندی مداوم در ارزیابی منابع انسانی است. هدف از استعدادیابی استخدام نیروهای ماهر و کارآزموده است. افرادی که استعدادها و توانایی¬های آنها هماهنگ و در راستای اهداف گسترده سازمان تعریف خواهد شد. استعدادیابی و به کار گیری افراد در جایگاههای مناسب یکی از اصلی ترین مسائل درسازمان محسوب میشود. 
                            توسعه سازمان¬ها در بازارهای جهانی به گسترش رقابت پذیری و سودآوری متکی به عملکرد کارکنان است. درهمین راستا سازمانها تلاش می کنند توانایی های کارکنان خود را افزایش دهند. افزایش توانایی کارکنان به بهبود عملکرد و نهایتاً به بهره وری بیشتر منتج خواهد شد.
                            از جمله عوامل مهم و موثر در بهبود عملکرد کارکنان نحوه مدیریت سازمان است. مدیرانی در این زمینه موفق عمل می کنند که بتوانند توانایی های کارکنان سازمان خود را به نحو بهتری ارزیابی نموده و در جایگاههای مناسبی از آنها استفاده نمایند. 
                            استعدادیابی و ارزیابی توانایی و استعداد کارکنان از اهمیت ویژه ای دارد. از آن جمله می توان به الف) کشف استعدادهای مورد نیاز و حفظ آنها ب) هنگامی که کارکنان متناسب با استعداد خود انتخاب و جایگذاری شده باشند، با شوق و اشتیاق بیشتری در پست خود به کار خواهند پرداخت. ج) شناسایی نیازها، استعدادها و تامین خدماتی که منجر به دادن پاداش به کارکنان شودسبب افزایش رضایتمندی کارکنان  د) و نهایتاً پویایی و بهره وری بیشتر و بهره اقتصادی و شغلی سازمان خواهد شد. 
                            گاهاً شاهد کارکنانی هستیم که حتی حاضرند شغل فعلی خود را ترک نمایند و آینده شغلی خود را تغییر دهند؛ زیرا فکر می¬کنند که سمت و پستی که در آن مشغول به کار هستند با توانایی¬های آنها هماهنگ نیست. همچنین برای انجام ساده¬ترین تا پیچیده¬ترین کارها می¬بایست انرژی و وقت زیادی صرف کنند و نتیجتاً سازمان نیز هزینه بیشتری را متحمل خواهد شد. این مهم را سازمانها می توانند با تاسیس واحد استعدادیابی در سازمان تامین نمایند. بدین طریق کارکنان با توانمندی¬ها و استعدادهای خود آشنا خواهند شود و نهایتا در جایگاه مناسب خود مشغول به کار خواهند شد و در طولانی مدت از اشتغال خود دلسرد نخواهند شد. 
                            از منظر مدیران  سازمان، انتخاب مؤثر متقاضیان  از اهمیت بالایی برخوردار است. "شخص مناسب برای شغل مناسب و شغل مناسب برای شخص مناسب"؛ برای تعریف شخص مناسب برای شغل مناسب لازم است شرایط و ویژگی¬های پست مد نظر با جزییات هر چه بیشتر شرح داده شود و تعریف گردد. اگر در تحلیل اجزای سمت مدنظر اشتباهی رخ دهد، تعیین ملاکهای مناسب برای فردی که برای سمت مورد نظر می بایست انتخاب شود، بسیار دشوار خواهد شد. بنابراین طراحی شغل و تجزیه وتحلیل آن به منظور کارآیی بیشتر و رسیدن به اهداف سازمان ضروری به نظر می رسد. در این شرایط اگر مدیران در خصوص طراحی شغل و تجزیه وتحلیل انتظاراتی که از مجری آن می رود تسلط کافی نداشته باشند، انتخاب و انتصاب درستی صورت نخواهد گرفت. بنابراین تصمیم گیری در خصوص متقاضیان بسیار دشوار خواهد بود و نهایتا اهداف سازمان یا محقق نخواهد شد ویا با دشواری وصرف هزینه¬های آشکار و پنهان زیادی محقق خواهد شد. 
                            استعداد یابی افراد و سرمایه¬گذاری بر اساس آن به خودی خود منبع بالقوه¬ای است که پیش بینی کننده میزان بهره وری و کیفیت عملکرد سازمان است.
                            استعدادیابی و مدیریت صحیح آن در سازمان اهداف عمده  زیر را دنبال می¬کند: الف) سبب ازدیاد خلاقیت افراد در سازمان خواهد شد. ب)باعث افزایش بهره وری و بازده سازمان خواهد شد. ج) سبب کاهش هزینه های سازمان می گردد. د) به وسیله آن کمبودها و نیازهای سازمان قابل تشخیص خواهد شد. ه) تشخیص و انتخاب و نهایتاً حفظ افراد مناسب در هر پست و سمتی را میسر می سازد
                            درون زایی از دیگر عوامل مهم در سازمان سازمان است. درون زایی بدین معناست که مدیران، کارکنانِ با استعداد را شناسی نموده و به پرورش مهارتهای آنها اقدام نمایند. بدین ترتیب کشف استعدادهای افراد مستعد، پرورش آنها و جهت دهی به توانمندی¬های آنان به رشد عملکرد سازمان و تربیت نیروهای انسانی ماهر و کارآمد و البته رضایتمند منجر خواهد شد. 
                            در کنار استعداد یابی تشویق کارمندان به توسعه مهارتهای فردی باید جزیی از سیاست¬های رسمی مدیرانی باشد که مایلند کارکنان در فرایند افزایش بهره¬وری مشارکت فعال داشته باشند. شایسته است که کارمندان در تمام سطوح به ارتقا مهارت¬هایی بپردازند که همه روزه از آنها استفاده خواهند کرد. همچنین به کسب مهارتهای جدید مبادرت نمایند. 
                            ارتقا سطح توانایی¬ها و مهارت¬های افراد بسیار حائز اهمیت است. نکته قابل توجه در این خصوص آن است که ارتقا سطح افرادی که توانایی انجام کار مد نظر در سازمان را ندارند کاری عبث و بی فایده است. همچنین در شرایطی افراد مجبور می شوند مسئولیتهایی را بپذیرند که توانایی انجام آنرا ندارند یا اساساً علاقمند به انجام آن نیستند و تنها به دلیل اجبارهای مالی به انجام آن مبادرت می نمایند. بنابراین انگیزه کارکنان نیز بسیار مهم است. مدیران به این نکته توجه نمایند که پذیرش مسئولیت از سوی کارکنانشان بخاطر انگیزه های مادی است ویا آنها به علت داشتن توانایی و استعداد و همچنین علاقه در سمت خاصی مشغول به کار هستند. مدیرانی موفق هستند که کارکنان را برای پذیرفتن و انجام نقش¬های بزرگتر پرورش دهند، نه برای گرفتن دستمزد بالاتر. 
                            در این راستا کارمندانی که به شایستگی با توجه به استعدادها و توانایی¬هایشان از عهده مسئولیت¬های خویش برمی¬آیند باید از پاداش و امتیازات ویژه¬ای برخوردار گردند. تا انگیزه کارکنان افزایش یافته و تلاش بیشتری نمایند.  
                            علاوه بر تمایل به انجام کار، توانایی انجام کار توسط یک کارمند، همچنین انگیزه¬های کار¬مند حائز اهمیت بسیار است.
                            اما شناخت استعداد¬های افراد در گام نخست به مدیران کمک می¬نماید به قابلیتها و توانایی¬های کارکنان ویا افراد داوطلب پی برده؛ همچنین فرایند استعدادیابی راه موثری است برای شناخت انگیزه¬های افراد. زیرا افرادی که در زمینه خاصی استعداد دارند برای انجام آن انگیزه کافی و علاقه دارند و تلاش می¬نمایند از حداکثر توان خود استفاده کنند تا مسئولیت¬های محوله را به خوبی انجام دهند. بنابراین از مهمترین شاخص¬های ارزیابی عملکرد افراد استعداد یابی کارکنان است. 
                            </p>
                    </div>
                </div>

            </div>
           </Popup>



         </div>

          </div>
        <Footer/>
    </div>
  )
}

export default PageArticles
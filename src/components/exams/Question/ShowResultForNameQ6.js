import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question6.css";
import "../../../sass/Answer/Answer.scss";
import AllPagesPDFViewer from "./AllPages";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import Resoult from "../../../images/speak.png";
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

const ShowResultForNameQ6 = React.forwardRef((props, ref) => {
  const PicData = [
    { id: 1171, pic: require("../../../images/v.png") },
    { id: 1172, pic: require("../../../images/j.png") },
    { id: 1173, pic: require("../../../images/h.png") },
    { id: 1174, pic: require("../../../images/a.png") },
    { id: 1175, pic: require("../../../images/m.png") },
    { id: 1176, pic: require("../../../images/q.png") },
    { id: 1177, pic: require("../../../images/interpersonal_orig.png") },
    { id: 1178, pic: require("../../../images/logical_orig.png") },
    { id: 1179, pic: require("../../../images/istockphoto.jpeg") },
    { id: 11710, pic: require("../../../images/435.png") },
    { id: 11711, pic: require("../../../images/545.jpeg") },
    { id: 11712, pic: require("../../../images/pleasant.jpeg") },
    { id: 11713, pic: require("../../../images/5555.jpeg") },
    { id: 11714, pic: require("../../../images/5555.jpeg") },
    { id: 11715, pic: require("../../../images/30.png") },
    { id: 11716, pic: require("../../../images/31.png") },
    { id: 11717, pic: require("../../../images/32.png") },
    { id: 11718, pic: require("../../../images/34.png") },
    { id: 11719, pic: require("../../../images/35.png") },
    { id: 11720, pic: require("../../../images/29.jpeg") },
  ];
  const testContext = useContext(TestContext);
  const [finalResultData, setFinalResultData] = useState([]);
  const [Hiden, setHiden] = useState(false);
  const [Math, setMath] = useState("");
  const [Experimental, setExperimental] = useState("");
  const [Human, setHuman] = useState("");
  const [Service, setService] = useState("");
  const [Industry, setIndustry] = useState("");
  const [Agriculture, setAgriculture] = useState("");
  const [Technical, setTechnical] = useState("");
  const [Bussiness, setBussiness] = useState("");
  const [userInfoData, setUserInfoData] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const {
    calscoreoftest117JustForShowResultData,
    CalScoreOfTest117JustShowResult,
    CalScoreOfTest117,
    calscoreoftest5Data,
    downloadTestFileData,
    calscoreoftest117Data,
    userIdForShowingResult,
    err,
  } = testContext;
  useEffect(() => {
    if (calscoreoftest117Data) {
      FillResultOfTest117(calscoreoftest117Data);
    } else {
      CalScoreOfTest117JustShowResult(userIdForShowingResult);
    }
  }, []);

  useEffectSkipFirst(() => {
    if (calscoreoftest117JustForShowResultData) {
      FillResultOfTest117(calscoreoftest117JustForShowResultData);
    } else {
      CalScoreOfTest117JustShowResult(userIdForShowingResult);
    }
  }, [calscoreoftest117JustForShowResultData]);
  useEffectSkipFirst(() => {
    if (downloadTestFileData) {
      const blob = new Blob([downloadTestFileData], {
        type: "application/pdf",
      });
      setPdfFile(blob);
    }
  }, [downloadTestFileData]);
  useEffectSkipFirst(() => {
    if (calscoreoftest117Data) {
      FillResultOfTest117(calscoreoftest117Data);
    }
  }, [calscoreoftest117Data]);
  const FillResultOfTest117 = (calscoreoftest117Data) => {
    if (calscoreoftest117Data) {
      setHiden(true);
      let calscoreoftest117Data1 = calscoreoftest117Data;
      // console.log("calscore117:", calscoreoftest117Data1);
      setFinalResultData(calscoreoftest117Data1.CritriaScores);
      if (calscoreoftest117Data1.CritriaScores) {
        if (calscoreoftest117Data1.CritriaScores[0]) {
          setMath(calscoreoftest117Data1.CritriaScores[0].MathScore);
          setExperimental(calscoreoftest117Data1.CritriaScores[0].HealthScore);
          setHuman(calscoreoftest117Data1.CritriaScores[0].HumanScore);
          setService(calscoreoftest117Data1.CritriaScores[0].ServiceScore);
          setIndustry(calscoreoftest117Data1.CritriaScores[0].IndustryScore);
          setAgriculture(
            calscoreoftest117Data1.CritriaScores[0].AgricultureScore
          );
          setTechnical(calscoreoftest117Data1.CritriaScores[0].TechnicalScore);
          setBussiness(calscoreoftest117Data1.CritriaScores[0].BussinessScore);
        }
      }
    }
  };

  useEffectSkipFirst(() => {
    if (calscoreoftest5Data) {
      // console.log("userinfo:", calscoreoftest5Data.userInfo);
      setUserInfoData(calscoreoftest5Data.userInfo);
    }
  }, [calscoreoftest5Data]);

  return (
    <div ref={ref} id="AnswerStyle16">
   
   <div className="formresult">
        <div className="itemresu">
          <h3>نام و نام خانوادگی:</h3>
          <h4>
            {userInfoData
              ? userInfoData.FirstName + " " + userInfoData.LastName
              : null}
          </h4>
        </div>
        <div className="itemresu">
          <h3>تحصیلات :</h3>
          <h4>{userInfoData ? userInfoData.Education : null}</h4>
        </div>
        <div className="itemresu">
          <h3>تاریخ آزمون :</h3>
          <h4>{userInfoData ? userInfoData.Date : null}</h4>
        </div>
        <div className="itemresu">
          <h3>نام آزمون :</h3>
          <h4>{userInfoData ? userInfoData.TestName : null}</h4>
        </div>
      </div>
      <div className="nameweb">
        <h3>توسعه فردی و سازمانی</h3>
        <h3>www.hamitest.com</h3>
      </div>
     
        {
          //  questions.question.map((item=>
          finalResultData
            ? finalResultData.map((item) => (
                <div className="boxAnswer">
                  <div className="photoTemplate">
                    <img
                      src={PicData.filter((i) => i.id == item.Id)[0].pic}
                      alt="Language"
                    />
                  </div>

                  <div className="pointExam">
                    <h5>امتیاز</h5>
                    <h5>{item.userScore}</h5>
                  </div>
                  <div className="pointExam">
                    <h5>رتبه</h5>
                    <h5>{item.finalGrade}</h5>
                  </div>
                  <div className="pointExam">
                    <h5>همخوانی</h5>
                    <h5> {item.alingPoint}</h5>
                  </div>
                  <div className="pointExam">
                    <h5>میزان شده</h5>
                    <h5>{item.totalPoint}</h5>
                  </div>
                </div>
              ))
            : null
        }
        {finalResultData ? (
          <div className={Hiden ? "boxAnswer" : "boxAnswerH"}>
            <div className="photoTemplate">
              <img src={Resoult} alt="Language" />
            </div>
            <div className="pointExam">
              <h5>ریاضی</h5>
              <h5>{Math}</h5>
            </div>
            <div className="pointExam">
              <h5>تجربی</h5>
              <h5>{Experimental}</h5>
            </div>
            <div className="pointExam">
              <h5>انسانی</h5>
              <h5>{Human}</h5>
            </div>
            <div className="pointExam">
              <h5>خدمات</h5>
              <h5>{Service}</h5>
            </div>
            <div className="pointExam">
              <h5>صنعت</h5>
              <h5>{Industry}</h5>
            </div>
            <div className="pointExam">
              <h5>کشاورزی</h5>
              <h5>{Agriculture}</h5>
            </div>
            <div className="pointExam">
              <h5>فنی و حرفه ای</h5>
              <h5>{Technical}</h5>
            </div>
            <div className="pointExam">
              <h5>کار و دانش</h5>
              <h5>{Bussiness}</h5>
            </div>
          </div>
        ) : null}
         {
        <div className="all-page-container">
          {pdfFile ? <AllPagesPDFViewer pdf={pdfFile} /> : null}
        </div>
      }
      </div>
  );
});

export default ShowResultForNameQ6;

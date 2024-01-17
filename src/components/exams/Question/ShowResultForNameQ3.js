import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import Logo from "../../../images/ht_1.png";
import { css } from "@emotion/react";
import AllPagesPDFViewer from "./AllPages";
import Chart3D from "./Chart3D";
import SpiderChart from "./SpiderChart";
import PieChart from "./PieChart";
import { findNameOfTest } from "./FindTestName";
import "../../../css/exams/Question3.css";

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

const ShowResultForNameQ3 = React.forwardRef((props, ref) => {
 
  const testContext = useContext(TestContext);
  const [loading, setLoading] = useState(false);
  const [userInfoData, setUserInfoData] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [seriesList, setseriesList] = useState([]);
  const [seriesPieList, setseriesPieList] = useState([]);
  const [xcatList, setxcatList] = useState([]);
  const [xTitle, setxTitle] = useState([]);

  const override = css`
    display: flex;
    margin: 10rem auto;
  `;
  const [Hiden, setHiden] = useState(false);
  const [finalResultData, setFinalResultData] = useState([]);
  const {
    GetAllQuestions,
    questionsData,
    CalScoreOfTest,
    calscoreoftestData,
    CalScoreOfTestJustShowResult,
    calscoreoftestJustForShowResultData,
    userIdForShowingResult,
    downloadTestFileData,
    DownloadTestFileById,

    err,
  } = testContext;
  useEffect(() => {
    setLoading(true);
    setHiden(false);
    CalScoreOfTestJustShowResult(userIdForShowingResult, props.number,props.date);
  }, []);

  useEffectSkipFirst(() => {
    if (calscoreoftestData) {
      // //console.log("resuserwithCalculation:", calscoreoftestData.CritriaScores);
      //
      setFinalResultData(calscoreoftestData.CritriaScores);
    }
  }, [calscoreoftestData]);
  useEffectSkipFirst(() => {
    if (calscoreoftestJustForShowResultData) {
      console.log(
        "calscoreoftestJustForShowResultData:",
        calscoreoftestJustForShowResultData
      );
      setUserInfoData(calscoreoftestJustForShowResultData.userInfo);
      if (calscoreoftestJustForShowResultData.pdfId) {
        DownloadTestFileById(calscoreoftestJustForShowResultData.pdfId);
      }

      setFinalResultData(calscoreoftestJustForShowResultData.CritriaScores);
      const catData = calscoreoftestJustForShowResultData.CritriaScores.map(
        (item) => {
          let newCatItem = {};
          newCatItem.name = item.Name;
          xcatList.push(item.Name);
          xTitle.push(item.Name);
          if (props.number === 7) {
            seriesPieList.push([item.Name, item.userScore]);
          }
          seriesList.push(item.userScore);
        }
      );
    }
  }, [calscoreoftestJustForShowResultData]);

  const chartTitle = findNameOfTest(props.number);

  useEffectSkipFirst(() => {
    if (downloadTestFileData) {
      const blob = new Blob([downloadTestFileData], {
        type: "application/pdf",
      });
      setPdfFile(blob);
    }
  }, [downloadTestFileData]);

  return (
    <div ref={ref} id="AnswerStyle1">
      <div className="InfoStayle3">
        {userInfoData ? (
          <div className="resulNam6">
            <div className="logotresult">
              <img src={Logo} alt="Logo" />
            </div>
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
          </div>
        ) : null}
      </div>
      <div className="ChartStyle2">

      <div className="ChartStyle">
        {pdfFile ? (
          <Chart3D
            chartTitle={chartTitle}
            yTitle={""}
            xcatList={xcatList}
            xTitle={xTitle}
            seriesList={seriesList}
          />
        ) : null}
        {pdfFile ? (
          <SpiderChart
            chartTitle={chartTitle}
            yTitle={""}
            xcatList={xcatList}
            xTitle={xTitle}
            seriesList={seriesList}
          />
        ) : null}
        {/* {seriesPieList.length > 0 ? (
          <PieChart
            chartTitle={chartTitle}
            yTitle={""}
            xcatList={xcatList}
            xTitle={xTitle}
            seriesList={seriesPieList}
          />
        ) : null} */}
        </div>
      </div>
      {/* <div id="IconAnswer">
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
                  <div className="nameAnswer">
                    <h5>{item.Name}</h5>
                  </div>
                  <div className="pointExam">
                    <h5>{item.userScore}</h5>
                  </div>
                </div>
              ))
            : null
        }
      </div> */}
      {
        <div className="pdfStyle">
        {pdfFile ? <AllPagesPDFViewer pdf={pdfFile} /> : null}
        </div>
      }
      {<div></div>}
    </div>
  );
});

export default ShowResultForNameQ3;

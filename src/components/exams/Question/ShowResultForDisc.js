import React, { useMemo, useRef, useEffect, useState, useContext } from "react";
import "../../../css/exams/Result/ShowResultForDisc.css";
import Chart1 from "../../exams/Question/Chart";
import TestContext from "../../../Context/Test/testContext";
import Gauge from "./Gauge";
import Logo from "../../../images/ht_1.png";
import AllPagesPDFViewer from "./AllPages";
import CustomTable from "../../column/CustomTable";
import { DiscColumns } from "../../column/Columns";
import "../../../css/exams/Question4.css";

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

const ShowResultForDisc = React.forwardRef(({ Charthide }, ref) => {
  const testContext = useContext(TestContext);

  const {
    calscoreoftest5Data,
    DownloadTestFileById,
    downloadTestFileData,
    calscoreoftest5JustForShowResultData,
    SetCalScoreForTest5,
    DownloadVoiceFile,
    err,
  } = testContext;
  const [pdfFile, setPdfFile] = useState(null);
  const [videoForDownload, setVideoForDownload] = useState(null);
  const [FinalResultDisc, setFinalResultDisc] = useState(null);
  const [maxSeriesData, setmaxSeriesData] = useState(null);
  const [minSeriesData, setminSeriesData] = useState(null);
  const [userFinalNumber, setUserFinalNumber] = useState(null);
  const [userFinalCode, setUserFinalCode] = useState(null);
  const [userInfoData, setUserInfoData] = useState(null);
  const [userScorePercentSeriesData, setUserScorePercentSeriesData] =
    useState(null);
  const [finalResultData, setFinalResultData] = useState([]);
  const KartableColumnsForAdmin = useMemo(
    () => [DiscColumns],

    []
  );
  useEffectSkipFirst(() => {
    if (calscoreoftest5JustForShowResultData) {
      //console.log("datsshowresult:", calscoreoftest5JustForShowResultData);
      SetCalScoreForTest5(calscoreoftest5JustForShowResultData);
    }
  }, [calscoreoftest5JustForShowResultData]);
  useEffectSkipFirst(() => {
    if (downloadTestFileData) {
      const blob = new Blob([downloadTestFileData], {
        type: "application/pdf",
      });
      setPdfFile(blob);
    }
  }, [downloadTestFileData]);

  useEffectSkipFirst(() => {
    if (calscoreoftest5Data) {
      ////
      console.log("resuserwithCalculation", calscoreoftest5Data);
      setUserFinalCode(calscoreoftest5Data.userFinalCode);

      if (calscoreoftest5Data.pdfId) {
        console.log("pdfId", calscoreoftest5Data.pdfId);
        DownloadTestFileById(calscoreoftest5Data.pdfId);
      }
      if (calscoreoftest5Data.voiceId) {
        console.log("voiceId", calscoreoftest5Data.voiceId);

        DownloadVoiceFile(calscoreoftest5Data.voiceId);
      }

      setUserFinalNumber(calscoreoftest5Data.userFinalNumber);
      setFinalResultDisc(calscoreoftest5Data.FinalResult);
      let sortData = calscoreoftest5Data.CritriaScores.map((item) => {
        let newData = {};
        if (parseInt(item.Id) == 54) {
          newData.newId = 54;
          newData.OrderId = 1; //D
        }
        if (parseInt(item.Id) == 52) {
          newData.newId = 53;
          newData.OrderId = 2; //I
        }
        if (parseInt(item.Id) == 53) {
          newData.newId = 52;
          newData.OrderId = 4; //C
        }
        if (parseInt(item.Id) == 51) {
          newData.newId = 51;
          newData.OrderId = 3; //S
        }
        newData.Id = item.Id;
        newData.Description = item.Description;
        newData.Name = item.Name;
        newData.countMax = item.countMax;
        newData.countMin = item.countMin;
        newData.userScore = item.userScore;
        newData.userScoreCode = item.userScoreCode;
        newData.userScorePercent = item.userScorePercent;
        return newData;
      }).sort((a, b) => parseInt(b.newId) - parseInt(a.newId));
      setFinalResultData(sortData);
      sortData = sortData.sort(
        (a, b) => parseInt(a.OrderId) - parseInt(b.OrderId)
      );
      const countMaxData = sortData.map(({ countMax }) => countMax);
      setmaxSeriesData(countMaxData);
      const countMinData = sortData.map(({ countMin }) => countMin);
      setminSeriesData(countMinData);
      const userScorePercentData = sortData.map(
        ({ Name, OrderId, userScorePercent, userScoreCode }) => {
          return {
            Name,
            OrderId,
            userScoreCode,
            userScorePercent: parseFloat(
              parseFloat(parseFloat(userScorePercent) / 100).toFixed(2)
            ),
          };
        }
      );
      setUserScorePercentSeriesData(userScorePercentData);

      setUserFinalCode(calscoreoftest5Data.userFinalCode);
      setUserFinalNumber(calscoreoftest5Data.userFinalNumber);
      let sortData1 = calscoreoftest5Data.CritriaScores.map((item) => {
        let newData = {};
        if (parseInt(item.Id) == 54) {
          newData.newId = 54;
          newData.OrderId = 1; //D
        }
        if (parseInt(item.Id) == 52) {
          newData.newId = 53;
          newData.OrderId = 2; //I
        }
        if (parseInt(item.Id) == 53) {
          newData.newId = 52;
          newData.OrderId = 4; //C
        }
        if (parseInt(item.Id) == 51) {
          newData.newId = 51;
          newData.OrderId = 3; //S
        }
        newData.Id = item.Id;
        newData.Description = item.Description;
        newData.Name = item.Name;
        newData.countMax = item.countMax;
        newData.countMin = item.countMin;
        newData.userScore = item.userScore;
        newData.userScoreCode = item.userScoreCode;
        newData.userScorePercent = item.userScorePercent;
        return newData;
      }).sort((a, b) => parseInt(b.newId) - parseInt(a.newId));
      setFinalResultData(sortData1);
      sortData1 = sortData1.sort(
        (a, b) => parseInt(a.OrderId) - parseInt(b.OrderId)
      );
      //console.log("sortdata by orderId:", sortData);
      const countMaxData1 = sortData1.map(({ countMax }) => countMax);
      setmaxSeriesData(countMaxData1);
      const countMinData1 = sortData1.map(({ countMin }) => countMin);
      setminSeriesData(countMinData1);
      const userScorePercentData1 = sortData1.map(
        ({ Name, OrderId, userScorePercent, userScoreCode }) => {
          return {
            Name,
            OrderId,
            userScoreCode,
            userScorePercent: parseFloat(
              parseFloat(parseFloat(userScorePercent) / 100).toFixed(2)
            ),
          };
        }
      );
      setUserScorePercentSeriesData(userScorePercentData1);
      setUserInfoData(calscoreoftest5Data.userInfo);

      //console.log("scorePercent:", userScorePercentData);
      ////console.log("countMinData:", countMinData);
    }
  }, [calscoreoftest5Data]);
  useEffectSkipFirst(() => {
    if (calscoreoftest5Data) {
      // console.log("userinfo:", calscoreoftest5Data.userInfo);
      // setUserInfoData(calscoreoftest5Data.userInfo);
    }
  }, [calscoreoftest5Data]);
  return (
    <div ref={ref} className={Charthide ? "chartStayl1" : "chartStaylH"}>
      <div className="InfoStayleDisck">
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
      {/* <div id="AnswerStyle1Disk">
        {
          //  questions.question.map((item=>
          finalResultData
            ? finalResultData.map((item) => (
                // <section className="qtest primary">
                //   <h4>{item.Name}</h4>
                //   <h4>{item.userScore}</h4>
                // </section>

                <div className="boxAnswer">
                  <div className="photoTemplate">
                    <img src={Language} alt="Language" />
                  </div>
                  <div className="nameAnswer">
                    <h4>{item.Name}</h4>
                  </div>
                  <div className="pointExam">
                    <h5>{item.userScore}</h5>
                  </div>
                </div>
              ))
            : null
        }
      </div> */}
      <div className="ChartStyleDisc1">
        {finalResultData ? (
          <Chart1
            both={false}
            data={maxSeriesData}
            name={["بیشترین"]}
            Title="بیشترین"
            SubTitle="معیارها"
          />
        ) : null}
        {finalResultData ? (
          <Chart1
            data={minSeriesData}
            both={false}
            name={["کمترین"]}
            Title="کمترین"
            SubTitle="معیارها"
          />
        ) : null}
        </div>
        <div className="ChartStyleDisc2">
        {finalResultData ? (
          <Chart1
            name={["بیشترین", "کمترین"]}
            both={true}
            data={[maxSeriesData, minSeriesData]}
            Title="بیشترین و کمترین"
            SubTitle="معیارها"
          />
        ) : null}
        </div>
        <div className="ChartStyleDiscgage">
        {finalResultData ? (
          <Gauge
            userScorePercentSeriesData={userScorePercentSeriesData}
            userFinalNumber={userFinalNumber}
            userFinalCode={userFinalCode}
          />
        ) : null}
        </div>
        {
        <div className="pdfStyle">
          {pdfFile ? <AllPagesPDFViewer pdf={pdfFile} /> : null}
        </div>
      }
        {
          <div className="TableResult">
            <CustomTable
              columns={KartableColumnsForAdmin}
              data={FinalResultDisc ? FinalResultDisc : []}
            />
          </div>
        }
      
      
    </div>
  );
});

export default ShowResultForDisc;

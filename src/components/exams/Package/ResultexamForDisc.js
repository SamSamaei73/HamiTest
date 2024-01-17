import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  createRef,
} from "react";
import "../../../css/exams/Resultexam.css";
import ShowResultForDisc from "../Question/ShowResultForDisc";
import ReactToPrint from "react-to-print";
import TestContext from "../../../Context/Test/testContext";
import ShowResultForNameQ6 from "../Question/ShowResultForNameQ6";
import ShowResultForNameQ from "../Question/ShowResultForNameQ";
import ShowResultForNameQ2 from "../Question/ShowResultForNameQ2";
import ShowResultForNameQ3 from "../Question/ShowResultForNameQ3";
import Header from "../../tools/Header";
import Navbar from "../../tools/Navbars";
import FileDownload from "js-file-download";

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
const ResultexamForDisc = ({ Charthide }) => {
  const componentRef = useRef();

  const [chartShow, setChartShow] = useState(null);
  const [testId, setTestId] = useState(null);
  const testContext = useContext(TestContext);
  const [countVoice, setCountVoice] = useState(0);

  const {
    userIdForShowingResult,
    testIdForShowingResult,
    testDateForShowingResult,
    SetUserIdForShowingResult,
    calscoreoftest5Data,
    CalScoreOfTest5JustShowResult,
    testForSpecificUserData,
    downloadTestFileByTypeDescData,
    DownloadVoiceFile,

    calscoreoftest5JustForShowResultData,
    err,
  } = testContext;
  useEffect(() => {
    if (Charthide) {
      setChartShow(Charthide);
    } else {
      setChartShow(true);
    }
    if (userIdForShowingResult) {
      // //console.log("userid:", userIdForShowingResult);
      if (testIdForShowingResult === 5) {
        CalScoreOfTest5JustShowResult(
          userIdForShowingResult,
          testDateForShowingResult
        );
      }
    }
    if (testIdForShowingResult) {
      //console.log("testid:", testIdForShowingResult);
      setTestId(testIdForShowingResult);
    }
  }, []);

  const downloadVoiceFile = () => {
    if (downloadTestFileByTypeDescData) {
      setCountVoice(countVoice + 1);
      if (countVoice == 1) {
        const blob = new Blob([downloadTestFileByTypeDescData], {
          type: "video/mp4",
        });
        //setVideoForDownload(blob);
        FileDownload(blob, "voice.mp4");
      }
    }
  };

  useEffectSkipFirst(() => {
    if (testIdForShowingResult) {
      //  console.log("testidskipfirst:", testIdForShowingResult);
      setTestId(testIdForShowingResult);
    }
  }, [testIdForShowingResult]);

  return (
    <div id="Resultexam">
      <Header />
      <Navbar />
      <div className="BtnResult">
        <ReactToPrint
          copyStyles="false"
          trigger={() => <button>چاپ گزارش</button>}
          content={() => componentRef.current}
        />
        {testIdForShowingResult === 5 || testIdForShowingResult === 2 ? (
          <button
            className={downloadTestFileByTypeDescData ? "" : "displayBtn"}
            onClick={(e) => {
              downloadVoiceFile(e);
            }}
          >
            فایل صوتی
          </button>
        ) : null}
      </div>
      <div id="Show6">
        {testId == 5 ? (
          <ShowResultForDisc
            ref={componentRef}
            Charthide={chartShow}
            date={testDateForShowingResult}
          />
        ) : testId == 117 ? (
          <ShowResultForNameQ6 ref={componentRef} />
        ) : testId == 3 || testId == 113 ? (
          <ShowResultForNameQ
            ref={componentRef}
            number={testId}
            date={testDateForShowingResult}
          />
        ) : testId == 2 ||
          testId == 4 ||
          testId == 6 ||
          testId == 7 ||
          testId == 8 ||
          testId == 9 ||
          testId == 10 ||
          testId == 111 ||
          testId == 112 ||
          testId == 116 ||
          testId == 114 ? (
          <ShowResultForNameQ2
            ref={componentRef}
            number={testId}
            date={testDateForShowingResult}
          />
        ) : testId == 1 || testId == 115 ? (
          <ShowResultForNameQ3
            ref={componentRef}
            number={testId}
            date={testDateForShowingResult}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ResultexamForDisc;

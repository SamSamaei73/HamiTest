import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  createRef,
} from "react";
import "../../../css/exams/Resultexam.css";
import ComponentToPrint from "../Question/ShowResultForDisc";
import ReactToPrint from "react-to-print";
import TestContext from "../../../Context/Test/testContext";
import ShowResultForNameQ6 from "../Question/ShowResultForNameQ6";
import ShowResultForNameQ from "../Question/ShowResultForNameQ";
import ShowResultForNameQ2 from "../Question/ShowResultForNameQ2";
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

  const {
    userIdForShowingResult,
    testIdForShowingResult,
    SetUserIdForShowingResult,
    calscoreoftest5Data,
    CalScoreOfTest5JustShowResult,
    testForSpecificUserData,
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
      CalScoreOfTest5JustShowResult(userIdForShowingResult);
    }
    if (testIdForShowingResult) {
      //console.log("testid:", testIdForShowingResult);
      setTestId(testIdForShowingResult);
    }
  }, []);

  useEffectSkipFirst(() => {
    if (testIdForShowingResult) {
      //  console.log("testidskipfirst:", testIdForShowingResult);
      setTestId(testIdForShowingResult);
    }
  }, [testIdForShowingResult]);

  return (
    <div id="Resultexam">
      <ReactToPrint
        copyStyles="false"
        trigger={() => <button>چاپ</button>}
        content={() => componentRef.current}
      />
      <div id="Show6">
        {testId == 5 ? (
          <ComponentToPrint ref={componentRef} Charthide={chartShow} />
        ) : testId == 117 ? (
          <ShowResultForNameQ6 ref={componentRef} />
        ) : testId == 3 || testId == 113 ? (
          <ShowResultForNameQ ref={componentRef} number={testId} />
        ) : testId == 2 ||
          testId == 4 ||
          testId == 6 ||
          testId == 7 ||
          testId == 8 ||
          testId == 9 ||
          testId == 10 ||
          testId == 111 ||
          testId == 112 ||
          testId == 114 ? (
          <ShowResultForNameQ2 ref={componentRef} number={testId} />
        ) : null}
      </div>
    </div>
  );
};

export default ResultexamForDisc;

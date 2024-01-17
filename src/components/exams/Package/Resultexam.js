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
import ResultexamForNameQ6 from "./ResultexamForNameQ6";
import ResultexamForDisc from "./ResultexamForDisc";
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
const Resultexam = ({ Charthide }) => {
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
      {testId == 5 ? (
        <>
          <ResultexamForDisc />
        </>
      ) : testId == 117 ? (
        <></>
      ) : // <ResultexamForNameQ6 />
      null}
    </div>
  );
};

export default Resultexam;

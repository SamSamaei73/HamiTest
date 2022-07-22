import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  createRef,
} from "react";
import "../../../css/exams/Resultexam.css";
import ReactToPrint from "react-to-print";
import TestContext from "../../../Context/Test/testContext";
import ShowResultForNameQ6 from "../Question/ShowResultForNameQ6";
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
const ResultexamForNameQ6 = () => {
  const componentRef1 = useRef();

  const [chartShow, setChartShow] = useState(null);
  const [testId, setTestId] = useState(null);
  const testContext = useContext(TestContext);

  const {
    userIdForShowingResult,
    testIdForShowingResult,

    CalScoreOfTest5JustShowResult,

    err,
  } = testContext;
  useEffect(() => {
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
        content={() => componentRef1.current}
      />
   
        
        <ShowResultForNameQ6 />
      
    </div>
  );
};

export default ResultexamForNameQ6;

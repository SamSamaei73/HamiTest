import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
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

const ShowResultForNameQ = React.forwardRef((props, ref) => {
  const PicData = [
    { id: 31, pic: require("../../../images/435.png") },
    { id: 32, pic: require("../../../images/daron.png") },
    { id: 33, pic: require("../../../images/hesi.jpeg") },
    { id: 34, pic: require("../../../images/shohodi.jpeg") },
    { id: 35, pic: require("../../../images/fekri.png") },
    { id: 36, pic: require("../../../images/ehsasi.png") },
    { id: 37, pic: require("../../../images/ghezavat.jpeg") },
    { id: 38, pic: require("../../../images/edraki.jpeg") },
    { id: 1113, pic: require("../../../images/63.jpeg") },
    { id: 1131, pic: require("../../../images/62.png") },
  ];
  const testContext = useContext(TestContext);
  const [loading, setLoading] = useState(false);
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
    err,
  } = testContext;
  useEffect(() => {
    setLoading(true);
    setHiden(false);
    CalScoreOfTestJustShowResult(userIdForShowingResult, props.number);
    // if (!calscoreoftestData) {
    // }
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

      setFinalResultData(calscoreoftestJustForShowResultData.CritriaScores);
    }
  }, [calscoreoftestJustForShowResultData]);
  return (
    <div ref={ref} id="AnswerStyle1">
      {finalResultData
        ? finalResultData.map((item) => (
            <div className="boxAnswer">
              <div className="photoTemplate">
                <img
                  src={PicData.filter((i) => i.id == item.Id)[0].pic}
                  alt="Language"
                />
              </div>
              <div className="nameAnswer">
                <h4>{item.Name}</h4>
              </div>
              <div className="pointExam">
                <h5>{item.userScore}</h5>
              </div>
            </div>
          ))
        : null}
    </div>
  );
});

export default ShowResultForNameQ;

import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import { css } from "@emotion/react";
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

const ShowResultForNameQ2 = React.forwardRef((props, ref) => {
  const PicData = [
    { id: 21, pic: require("../../../images/speak.png") },
    { id: 24, pic: require("../../../images/bodily-kinesthetic_1_orig.png") },
    { id: 27, pic: require("../../../images/musical_orig.png") },
    { id: 23, pic: require("../../../images/existential_3.png") },
    { id: 28, pic: require("../../../images/naturalist_orig.png") },
    { id: 26, pic: require("../../../images/intrapersonal_1.png") },
    { id: 25, pic: require("../../../images/interpersonal_orig.png") },
    { id: 22, pic: require("../../../images/logical_orig.png") },
    { id: 41, pic: require("../../../images/istockphoto.jpeg") },
    { id: 42, pic: require("../../../images/435.png") },
    { id: 43, pic: require("../../../images/545.jpeg") },
    { id: 44, pic: require("../../../images/pleasant.jpeg") },
    { id: 45, pic: require("../../../images/5555.jpeg") },
    { id: 61, pic: require("../../../images/5555.jpeg") },
    { id: 71, pic: require("../../../images/30.png") },
    { id: 72, pic: require("../../../images/31.png") },
    { id: 73, pic: require("../../../images/32.png") },
    { id: 74, pic: require("../../../images/34.png") },
    { id: 75, pic: require("../../../images/35.png") },
    { id: 76, pic: require("../../../images/29.jpeg") },
    { id: 77, pic: require("../../../images/36.png") },
    { id: 78, pic: require("../../../images/37.png") },
    { id: 79, pic: require("../../../images/38.png") },
    { id: 710, pic: require("../../../images/39.png") },
    { id: 711, pic: require("../../../images/40.png") },
    { id: 712, pic: require("../../../images/42.png") },
    { id: 713, pic: require("../../../images/43.png") },
    { id: 714, pic: require("../../../images/44.png") },
    { id: 715, pic: require("../../../images/45.png") },
    { id: 716, pic: require("../../../images/46.png") },
    { id: 717, pic: require("../../../images/47.png") },
    { id: 718, pic: require("../../../images/48.webp") },
    { id: 719, pic: require("../../../images/49.png") },
    { id: 720, pic: require("../../../images/50.png") },
    { id: 721, pic: require("../../../images/51.png") },
    { id: 722, pic: require("../../../images/52.webp") },
    { id: 723, pic: require("../../../images/53.webp") },
    { id: 724, pic: require("../../../images/54.png") },
    { id: 101, pic: require("../../../images/55.png") },
    { id: 1111, pic: require("../../../images/56.jpeg") },
    { id: 1112, pic: require("../../../images/57.webp") },
    { id: 1121, pic: require("../../../images/58.webp") },
    { id: 1122, pic: require("../../../images/59.png") },
    { id: 1123, pic: require("../../../images/60.webp") },
    { id: 1124, pic: require("../../../images/61.jpeg") },
    { id: 1141, pic: require("../../../images/64.jpeg") },
    { id: 1142, pic: require("../../../images/65.jpeg") },
    { id: 1143, pic: require("../../../images/66.webp") },
    { id: 1144, pic: require("../../../images/67.jpeg") },
    { id: 1145, pic: require("../../../images/5555.jpeg") },
    { id: 1146, pic: require("../../../images/68.jpeg") },
    { id: 1147, pic: require("../../../images/69.jpeg") },
    { id: 1148, pic: require("../../../images/63.jpeg") },
    { id: 1149, pic: require("../../../images/70.jpeg") },
    { id: 11410, pic: require("../../../images/71.jpeg") },
    { id: 91, pic: require("../../../images/72.png") },
    { id: 92, pic: require("../../../images/73.jpeg") },
    { id: 93, pic: require("../../../images/74.png") },
    { id: 94, pic: require("../../../images/75.webp") },
    { id: 95, pic: require("../../../images/76.jpeg") },
    { id: 96, pic: require("../../../images/77.jpeg") },
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

export default ShowResultForNameQ2;

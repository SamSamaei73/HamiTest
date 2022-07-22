import React, { useEffect, useState, useContext, useRef } from "react";
import "../../../css/exams/Question.css";
import TestContext from "../../../Context/Test/testContext";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import "smooth-smooth-scroll/polyfill";
import scrollToComponent from "react-scroll-to-component";
import ShowResultForNameQ from "./ShowResultForNameQ";

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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const NameQ = (props) => {
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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const override = css`
    display: flex;
    margin: 10rem auto;
  `;
  const [Hiden, setHiden] = useState(false);
  const [finalResultData, setFinalResultData] = useState([]);
  const [questions1, setQuestions1] = useState(null);
  const [responseTest, setResponseTest] = useState([]);
  const [sectionData, setSectionData] = useState([]);
  const testContext = useContext(TestContext);

  const {
    GetAllQuestions,
    questionsData,
    CalScoreOfTest,
    calscoreoftestData,
    err,
  } = testContext;
  useEffect(() => {
    setHiden(false);
  }, []);
  useEffect(() => {
    GetAllQuestions(props.number);
  }, []);
  useEffectSkipFirst(() => {
    setLoading(false);
    if (questionsData) {
      // //console.log("dataofallqustions:", questionsData);
      setQuestions1(questionsData);
      let qlist = [];
      if (questionsData) {
        questionsData.forEach((item) => {
          if (item.answers) {
            item.answers.filter((ans) => {
              if (ans.Selected) {
                // props.increaseCount(questionsData.length);
                let newItem = {};
                newItem.QuestionId = ans.QuestionId;
                newItem.AnswerId = ans.AnswerId;
                newItem.QuestionOfEachSpecificCritriaId =
                  ans.QuestionOfEachSpecificCritriaId;
                //qlist.push(newItem);
                responseTest.push(newItem);
                //console.log("qlist", responseTest);
                // props.increaseCount(responseTest.length);
              }
            });
          }
        });
      }
      props.totalQuestion(questionsData.length);
    }
    let sum = responseTest
      .map((item) => item.QuestionId)
      .filter((value, index, self) => self.indexOf(value) === index);
    props.increaseCount(sum.length);
  }, [questionsData]);

  useEffectSkipFirst(() => {
    if (calscoreoftestData) {
      // //console.log("resuserwithCalculation:", calscoreoftestData.CritriaScores);
      //
      setFinalResultData(calscoreoftestData.CritriaScores);
    }
  }, [calscoreoftestData]);

  const onValueChange = (data) => {
    let userData = {};
    let QuestionId = parseInt(data.split("-")[0]);
    let AnswerId = parseInt(data.split("-")[1]);
    let QuestionOfEachSpecificCritriaId = parseInt(data.split("-")[2]);
    userData.QuestionId = QuestionId;
    scrollToComponent(sectionData[userData.QuestionId + 1], {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "linear",
    });
    userData.AnswerId = AnswerId;
    userData.QuestionOfEachSpecificCritriaId = QuestionOfEachSpecificCritriaId;
    let samerecord = responseTest.filter(
      (item) => item.QuestionId == userData.QuestionId
    );
    // //console.log(samerecord);
    if (samerecord.length > 0) {
      for (const obj of responseTest) {
        if (obj.QuestionId === userData.QuestionId) {
          obj.QuestionOfEachSpecificCritriaId =
            userData.QuestionOfEachSpecificCritriaId;
          obj.AnswerId = userData.AnswerId;
          //console.log("userData:", userData, obj);
          return obj;
        }
      }
    } else {
      responseTest.push(userData);
      //  //console.log("userresponse:", responseTest);
      // props.increaseCount(responseTest.length);
    }
    let sum = responseTest
      .map((item) => item.QuestionId)
      .filter((value, index, self) => self.indexOf(value) === index);
    props.increaseCount(sum.length);

    // //console.log("userresponse:", responseTest);
  };

  const SendData = () => {
    let frmData = {
      Test2: responseTest,
    };
    CalScoreOfTest(frmData);
  };

  // const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);

  return (
    <div id="NameQ2">
      <div className={Hiden ? "allStayleH" : "allStayleQ"}>
        {
          //  questions.question.map((item=>
          questions1
            ? questions1.map((item) => (
                <section
                  ref={(section) => {
                    sectionData[item.QuestionId] = section;
                  }}
                  id="qtest"
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground1"
                      : "SecondBackground1"
                  }
                >
                  <h4>{item.Name}</h4>
                  <div id="Answer">
                    <div className="answerStyle">
                      {item.answers.map((o) => (
                        <div className="optionItem">
                          <input
                            onChange={(e) => {
                              onValueChange(e.target.value);
                            }}
                            type="radio"
                            value={
                              o.QuestionId +
                              "-" +
                              o.AnswerId +
                              "-" +
                              o.QuestionOfEachSpecificCritriaId
                            }
                            className="ticket"
                            defaultChecked={o.Selected}
                            name={item.QuestionId}
                          ></input>
                          <h5>{o.Name}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))
            : null
        }
        <div className="resultTest">
          <button
            id="resultButton"
            onClick={(e) => {
              SendData();
              setHiden(true);
            }}
          >
            دیدن نتایج
          </button>
        </div>
      </div>
      {loading ? (
        <ClockLoader
          color={"#A93B6E"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <ShowResultForNameQ number={props.number} />
      )}

      {/* {loading ? (
        <ClockLoader
          color={"#A93B6E"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div id="AnswerStyle1">
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
      )} */}
    </div>
  );
};

export default NameQ;

import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question5.css";
import "../../../sass/Support.scss";
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

const NameQ5 = (props) => {
  const PicData = [];

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const override = css`
    display: flex;
    margin: 10rem auto;
  `;
  const [Hiden, setHiden] = useState(false);
  const [questions1, setQuestions1] = useState(null);
  const [responseTest, setResponseTest] = useState([]);
  const [finalResultData, setFinalResultData] = useState([]);
  const testContext = useContext(TestContext);
  const {
    GetAllAnswers,
    GetAllQuestions,
    answersData,
    questionsData,
    CalScoreOfTest,
    calscoreoftestData,
    err,
  } = testContext;
  useEffect(() => {
    GetAllQuestions(props.number);
    // //console.log('data',questions.question1)
  }, []);
  useEffectSkipFirst(() => {
    if (questionsData) {
      // //console.log("dataofallqustions:", questionsData);
      setQuestions1(questionsData);
      props.totalQuestion(questionsData.length);
    }
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
    let QuestionId = data.split("-")[0];
    let AnswerId = data.split("-")[1];
    let QuestionOfEachSpecificCritriaId = data.split("-")[2];
    userData.QuestionId = QuestionId;
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

          break;
        }
      }
    } else {
      responseTest.push(userData);
      props.increaseCount(responseTest.length);
    }

    // //console.log("userresponse:", responseTest);
  };

  const SendData = () => {
    let frmData = {
      Test2: responseTest,
    };
    CalScoreOfTest(frmData);
  };

  return (
    <div id="NameQ5">
      <div className={Hiden ? "allStayleH" : "allStayleQ"}>
        {
          //  questions.question.map((item=>
          questions1
            ? questions1.map((item) => (
                // //console.log('Id',item.Id);
                // //console.log('Name',item.Name);
                <section
                  id="qtest"
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground5"
                      : "SecondBackground5"
                  }
                >
                  <h4>{item.Name}</h4>
                  <div className="Answer5">
                    <div className="answerStyle5">
                      {item.answers.map((o) => (
                        <div className="optionItem">
                          <div className="answerRange">
                            <input type="range" min={0} max={6} />
                            <div className="rangeNumber">
                              <label htmlFor="0">0</label>
                              <label htmlFor="1">1</label>
                              <label htmlFor="2">2</label>
                              <label htmlFor="3">3</label>
                              <label htmlFor="4">4</label>
                              <label htmlFor="5">5</label>
                              <label htmlFor="6">6</label>
                            </div>
                          </div>

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

      {/* 
      <div className={Hiden ? "allStayleH" : "allStayleQ"}>
        {
          //  questions.question.map((item=>
          questions1
            ? questions1.map((item) => (
                // //console.log('Id',item.Id);
                // //console.log('Name',item.Name);
                <section
                  id="qtest"
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground5"
                      : "SecondBackground5"
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
        <div id="AnswerStyle1">
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
        </div>
      )} */}
    </div>
  );
};

export default NameQ5;

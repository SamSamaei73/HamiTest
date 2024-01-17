import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question5.css";
import "../../../sass/Support.scss";
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

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
    CalScoreOfTest116,
    calscoreoftestData,
    calscoreoftest116Data,
    err,
  } = testContext;
  useEffect(() => {
    GetAllQuestions(props.number);
    // //console.log('data',questions.question1)
  }, []);
  useEffectSkipFirst(() => {
    if (questionsData) {
      console.log("dataofallqustions:", questionsData);
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
    let OrderId = data.split("-")[1];
    let QuestionOfEachSpecificCritriaId = data.split("-")[2];
    let SelectedValue = data.split("-")[3];
    userData.QuestionId = QuestionId;
    if (OrderId == "1") {
      userData.Score1 = SelectedValue;
      userData.Score4 = 0;
      userData.OrderId = 1;
      console.log("order1");
    } else if (OrderId == "2") {
      userData.Score4 = SelectedValue;
      userData.OrderId = 2;
      userData.Score1 = 0;
      console.log("order2");
    }
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

          if (OrderId == "1") {
            console.log("order333");
            obj.Score1 = SelectedValue;
          }
          if (OrderId == "2") {
            console.log("order44");
            obj.Score4 = SelectedValue;
          }

          break;
        }
      }
    } else {
      responseTest.push(userData);
      props.increaseCount(responseTest.length);
    }

    console.log("userresponse:", responseTest);
  };

  const SendData = () => {
    let frmData = {
      Test: responseTest,
    };
    CalScoreOfTest116(frmData);
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
                  key={item.QuestionId}
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
                        <div className="optionItem" key={o.AnswerId}>
                          <div className="answerRange">
                            <input
                              type="range"
                              min={0}
                              max={6}
                              defaultValue={0}
                              id={
                                o.QuestionId +
                                "-" +
                                o.OrderId +
                                "-" +
                                o.QuestionOfEachSpecificCritriaId
                              }
                              onChange={(e) => {
                                console.log(e.target.id, e.target.value);
                                onValueChange(
                                  e.target.id + "-" + e.target.value
                                );
                              }}
                            />
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
          <NavLink to="/SelectExams">
            <button
              id="resultButton"
              onClick={(e) => {
                SendData();
                setHiden(true);
              }}
            >
              دیدن نتایج
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NameQ5;

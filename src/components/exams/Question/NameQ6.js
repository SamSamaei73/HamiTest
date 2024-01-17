import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question6.css";
import "../../../sass/Answer/Answer.scss";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import scrollToComponent from "react-scroll-to-component";
import { NavLink } from "react-router-dom";
import ShowResultForNameQ6 from "./ShowResultForNameQ6";

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

const NameQ6 = (props) => {
 

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const override = css`
    display: flex;
    margin: 10rem auto;
  `;

  const [Hiden, setHiden] = useState(false);
  const [questions1, setQuestions1] = useState(null);
  const [questionsCount, setQuestionsCount] = useState(0);
  const [partThreeOfQuestions, setPartThreeOfQuestions] = useState(null);
  const [responseTest, setResponseTest] = useState([]);
  // const [finalResultData, setFinalResultData] = useState([]);
  const [sectionData, setSectionData] = useState([]);
  // const [Math, setMath] = useState("");
  // const [Experimental, setExperimental] = useState("");
  // const [Human, setHuman] = useState("");
  // const [Service, setService] = useState("");
  // const [Industry, setIndustry] = useState("");
  // const [Agriculture, setAgriculture] = useState("");
  // const [Technical, setTechnical] = useState("");
  // const [Bussiness, setBussiness] = useState("");
  const testContext = useContext(TestContext);
  const {
    GetAllAnswers,
    GetAllQuestions,
    answersData,
    questionsData,
    CalScoreOfTest117,
    calscoreoftest117Data,
    err,
  } = testContext;
  useEffect(() => {
    GetAllQuestions(props.number);
    // //console.log('data',questions.question1)
  }, []);
  useEffectSkipFirst(() => {
    if (questionsData) {
      setLoading(false);
      // //console.log("dataofallqustions:", questionsData);
      let partOneAndTwoOfQuestions = questionsData.filter(
        (item) => item.QuestionId != 11719 && item.QuestionId != 11720
      );
      let partThreeOfQuestions = questionsData.filter(
        (item) => item.QuestionId == 11719 || item.QuestionId == 11720
      );
      ////console.log("part1&2", partOneAndTwoOfQuestions);
      ////console.log("part3", partThreeOfQuestions);
      setPartThreeOfQuestions(partThreeOfQuestions);
      setQuestions1(partOneAndTwoOfQuestions);
      let qlist = [];
      if (partOneAndTwoOfQuestions) {
        partOneAndTwoOfQuestions.forEach((item) => {
          //let selectedAnswers = item.answers.filter((ans) => ans.Selected);
          item.answers.forEach((ans) => {
            // if (ans.Selected == true) {
            //   setQuestionsCount(questionsData.length);
            //   // //console.log("part2:", ans, ans.Selected);
            //   let newItem = {};
            //   newItem.QuestionId = ans.QuestionId;
            //   newItem.AnswerId = ans.AnswerId;
            //   newItem.QuestionOfEachSpecificCritriaId =
            //     ans.QuestionOfEachSpecificCritriaId;
            //   responseTest.push(newItem);
            //   //   //console.log("qlistQ1-18", responseTest);
            //   // props.increaseCount(responseTest.length);
            // }
          });
        });
      }
      if (partThreeOfQuestions) {
        //setQuestionsCount(questionsCount +partThreeOfQuestions.length +1 );
        partThreeOfQuestions.forEach((item) => {
          // if (item.answers) {
          //   item.answers.filter((ans) => {
          //     if (ans.Score1) {
          //       let newItem = {};
          //       newItem.QuestionId = ans.QuestionId;
          //       newItem.AnswerId = ans.AnswerId;
          //       newItem.Score1 = ans.Score1;
          //       newItem.QuestionOfEachSpecificCritriaId =
          //         ans.QuestionOfEachSpecificCritriaId;
          //       responseTest.push(newItem);
          //       //  //console.log("qlistQuestion1920", responseTest);
          //       // props.increaseCount(responseTest.length);
          //     }
          //   });
          // }
        });
      }

      props.totalQuestion(questionsData.length);
    }
  }, [questionsData]);

  useEffectSkipFirst(() => {
    if (questionsCount) {
      props.increaseCount(questionsCount);
    }
  }, [questionsCount]);

  const onValueChange = (data, selectedValue) => {
    let userData = {};
    let QuestionId = parseInt(data.split("-")[0]);
    let AnswerId = parseInt(data.split("-")[1]);
    let QuestionOfEachSpecificCritriaId = parseInt(data.split("-")[2]);
    let Score1 = null;
    if (selectedValue) {
      userData.Score1 = parseInt(selectedValue);
    }
    userData.QuestionId = parseInt(QuestionId);
    userData.AnswerId = parseInt(AnswerId);
    userData.QuestionOfEachSpecificCritriaId = parseInt(
      QuestionOfEachSpecificCritriaId
    );
    scrollToComponent(sectionData[userData.QuestionId + 1], {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "linear",
    });
    let samerecord = responseTest.filter(
      (item) =>
        item.QuestionId == userData.QuestionId &&
        item.AnswerId == userData.AnswerId
    );
    // //console.log(samerecord);
    //console.log("userresponse:", responseTest);
    if (samerecord.length > 0) {
      for (const obj of responseTest) {
        if (userData.QuestionId == 11719 || userData.QuestionId == 11720) {
          if (
            obj.QuestionId == userData.QuestionId &&
            obj.AnswerId == userData.AnswerId
          ) {
            obj.QuestionOfEachSpecificCritriaId =
              userData.QuestionOfEachSpecificCritriaId;
            obj.AnswerId = userData.AnswerId;
            obj.Score1 = userData.Score1;
            ////console.log("userData:", userData, obj);
            return obj;
          }
        } else {
          if (
            obj.QuestionId == userData.QuestionId &&
            obj.AnswerId == userData.AnswerId
          ) {
            let tempResponseTest = responseTest.filter(
              (item) => item.AnswerId != userData.AnswerId
            );
            //   //console.log("userData with same answerid:", tempResponseTest);
            setResponseTest(tempResponseTest);

            //return obj;
          } else if (obj.AnswerId != userData.AnswerId) {
            // //console.log("userData with different answerid:", userData);
            responseTest.push(userData);
          }
        }
      }
    } else if (userData.QuestionId == 11719 || userData.QuestionId == 11720) {
      let newItem = {};
      newItem.QuestionId = userData.QuestionId;
      newItem.AnswerId = userData.AnswerId;
      newItem.QuestionOfEachSpecificCritriaId =
        userData.QuestionOfEachSpecificCritriaId;

      newItem.Score1 = userData.Score1;
      ////console.log("userData:", userData, obj);
      responseTest.push(newItem);
    } else {
      responseTest.push(userData);
      // //console.log("userresponse1:", responseTest, questionsCount + 1);
      //  setQuestionsCount(questionsCount + 1);
    }
    let sum = responseTest
      .map((item) => item.QuestionId)
      .filter((value, index, self) => self.indexOf(value) === index);
    setQuestionsCount(sum.length);
  };
  const SendData = () => {
    let frmData = {
      Test: responseTest,
    };
    //console.log("finaldata:", frmData);
    CalScoreOfTest117(frmData);
  };
  return (
    <div id="NameQ6">
      <div className={Hiden ? "allStayleH" : "allStayleQ"}>
        {
          //  questions.question.map((item=>
          questions1
            ? questions1.map((item) => (
                // //console.log('Id',item.Id);
                // //console.log('Name',item.Name);
                <section
                  key={item.QuestionId}
                  id="qtest6"
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground6"
                      : "SecondBackground6"
                  }
                >
                  <h4>{item.Name}</h4>
                  <div id="Answer6">
                    <div className="answerStyle">
                      {item.answers.map((o) => (
                        <div className="optionItem" key={o.AnswerId}>
                          <h5>{o.Name}</h5>

                          <input
                            onChange={(e) => {
                              onValueChange(e.target.value, null);
                            }}
                            type="checkbox"
                            value={
                              o.QuestionId +
                              "-" +
                              o.AnswerId +
                              "-" +
                              o.QuestionOfEachSpecificCritriaId
                            }
                            className="ticket"
                            name={item.QuestionId}
                            // defaultChecked={o.Selected}
                          ></input>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))
            : null
        }
        {
          //  questions.question.map((item=>
          partThreeOfQuestions
            ? partThreeOfQuestions.map((item) => (
                // //console.log('Id',item.Id);
                // //console.log('Name',item.Name);
                <section
                  id="qtestProgress"
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground6"
                      : "SecondBackground6"
                  }
                >
                  <h4 className="QuastionHalan">{item.Name}</h4>
                  <div className="AnswerProgress">
                    <div className="answerStyle5">
                      {item.answers.map((o) => (
                        <div className="optionItem">
                          <div className="answerRange">
                            <h5>{o.Name}</h5>
                            <input
                              className="HalandRange"
                              type="range"
                              name={
                                o.QuestionId +
                                "-" +
                                o.AnswerId +
                                "-" +
                                o.QuestionOfEachSpecificCritriaId
                              }
                              onChange={(e) => {
                                onValueChange(e.target.name, e.target.value);
                              }}
                              min={0}
                              defaultValue={0}
                              max={7}
                            />
                            <div className="rangeNumber">
                              <label className="HalandLabel" htmlFor="0">
                                0
                              </label>
                              <label className="HalandLabel" htmlFor="1">
                                1
                              </label>
                              <label className="HalandLabel" htmlFor="2">
                                2
                              </label>
                              <label className="HalandLabel" htmlFor="3">
                                3
                              </label>
                              <label className="HalandLabel" htmlFor="4">
                                4
                              </label>
                              <label className="HalandLabel" htmlFor="5">
                                5
                              </label>
                              <label className="HalandLabel" htmlFor="6">
                                6
                              </label>
                              <label className="HalandLabel" htmlFor="7">
                                7
                              </label>
                            </div>
                          </div>
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

      {Hiden ? <ShowResultForNameQ6 /> : null}
    </div>
  );
};

export default NameQ6;

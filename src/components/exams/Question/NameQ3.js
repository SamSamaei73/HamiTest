import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question3.css";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import scrollToComponent from "react-scroll-to-component";
import ShowResultForNameQ3 from "./ShowResultForNameQ3";
import { useNavigate } from "react-router-dom";
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

const NameQ3 = (props) => {
  const navigate = useNavigate();
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
  const [sectionData, setSectionData] = useState([]);
  const testContext = useContext(TestContext);
  const {
    GetAllAnswers,
    GetAllQuestions,
    answersData,
    questionsData,
    CalScoreOfTest,
    calscoreoftestData,
    packageData,
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
      let qlist = [];
      // if (questionsData) {
      //   questionsData.forEach((item) => {
      //     if (item.answers) {
      //       item.answers.filter((ans) => {
      //         if (ans.Selected) {
      //           let newItem = {};
      //           newItem.QuestionId = ans.QuestionId;
      //           newItem.AnswerId = ans.AnswerId;
      //           newItem.QuestionOfEachSpecificCritriaId =
      //             ans.QuestionOfEachSpecificCritriaId;
      //           //qlist.push(newItem);
      //           responseTest.push(newItem);
      //           ////console.log("qlist", responseTest);
      //           // props.increaseCount(responseTest.length);
      //         }
      //       });
      //     }
      //   });
      // }

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
    userData.AnswerId = AnswerId;
    userData.QuestionOfEachSpecificCritriaId = QuestionOfEachSpecificCritriaId;
    let samerecord = responseTest.filter(
      (item) => item.QuestionId == userData.QuestionId
    );

    scrollToComponent(sectionData[userData.QuestionId + 1], {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "linear",
    });

    ////console.log("userresponse:", responseTest);
    //console.log("userData:", samerecord);

    // //console.log(samerecord);
    if (samerecord.length > 0) {
      for (const obj of responseTest) {
        if (obj.QuestionId == userData.QuestionId) {
          obj.QuestionOfEachSpecificCritriaId =
            userData.QuestionOfEachSpecificCritriaId;
          obj.AnswerId = userData.AnswerId;
          //console.log("userData After:", userData, responseTest);
          return obj;
        }
      }
    } else {
      responseTest.push(userData);
      //console.log("userresponse:", responseTest);
      //props.increaseCount(responseTest.length);
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
    ////console.log("testres:", frmData);
    CalScoreOfTest(frmData);
  };

  return (
    <div id="NameQ3">
      <div className={Hiden ? "allStayleH" : "allStayleQ"}>
        {
          //  questions.question.map((item=>
          questions1
            ? questions1.map((item) => (
                // //console.log('Id',item.Id);
                // //console.log('Name',item.Name);
                <section
                  ref={(section) => {
                    sectionData[item.QuestionId] = section;
                  }}
                  key={item.QuestionId}
                  id="qtest"
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground3"
                      : "SecondBackground3"
                  }
                >
                  <h4>{item.Name}</h4>
                  <div id="Answer">
                    <div className="answerStyle">
                      {item.answers.map((o) => (
                        <div className="optionItem" key={o.AnswerId}>
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
                            // checked={o.Selected}
                            // defaultChecked={o.Selected}
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
          {/* <NavLink to="/SelectExams"> */}
          <button
            id="resultButton"
            onClick={(e) => {
              SendData();
              if (packageData) {
                console.log(
                  "namq3",
                  packageData.PackageId,
                  packageData.currentTest
                );
                if (packageData.PackageId == 1) {
                  navigate("/Question3");
                } else {
                  setHiden(true);
                  navigate("/SelectExams");
                }
              } else {
                setHiden(true);
                navigate("/SelectExams");
              }
            }}
          >
            دیدن نتایج
          </button>
          {/* </NavLink> */}
        </div>
      </div>
      {loading ? (
        <ClockLoader
          color={"#A93B6E"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : Hiden ? (
        <ShowResultForNameQ3 />
      ) : null}
    </div>
  );
};

export default NameQ3;

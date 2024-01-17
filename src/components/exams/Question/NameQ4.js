import React, { useRef, useState, useContext, useEffect } from "react";
import TestContext from "../../../Context/Test/testContext";
import AuthContext from "../../../Context/Auth/authContext";
import "../../../css/exams/Question4.css";
import { NavLink } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";
import ShowResultForDisc from "./ShowResultForDisc";
import Resultexam from "../Package/Resultexam";
import { useNavigate } from "react-router-dom";

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

const NameQ4 = (props) => {
  const [questions4, setQuestions4] = useState(null);
  const [maxValue, setMaxValu] = useState(null);
  const [minValue, setMinValu] = useState(null);
  const [max1Value, setMax1Valu] = useState(null);
  const [min1Value, setMin1Valu] = useState(null);
  const [Hiden, setHiden] = useState(false);
  const [sectionData, setSectionData] = useState([]);

  const [Charthide, setCharthide] = useState(false);

  const [responseTest, setResponseTest] = useState([]);

  const testContext = useContext(TestContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    GetAllQuestions,
    questionsData,
    CalScoreOfTest5,
    SetUserIdForShowingResult,
    SetTestIdForShowingResult,
    packageData,
  } = testContext;
  const { user } = authContext;
  useEffect(() => {
    GetAllQuestions(5);
  }, []);

  useEffectSkipFirst(() => {
    if (questionsData) {
      const t = questionsData;

      let RowNumber = 0;
      // disabledItems.push(0);
      let questionDataWithRowNumber = questionsData.map((item) => {
        let newItem = {};
        newItem.Name = item.Name;

        item.answers = item.answers.map((ans) => {
          //console.log("Qdata", ans);
          //MaxAnswerId,MaxSelected,MinAnswerId,MinSelected,Score1,Score4
          let newAns = {};
          newAns.QuestionId = ans.QuestionId;
          newAns.AnswerId = ans.AnswerId;
          newAns.OrderId = ans.OrderId;
          newAns.Name = ans.Name;
          if (ans.MaxSelected) {
            newAns.MaxSelected = ans.MaxSelected;
            newAns.MaxAnswerId = ans.MaxAnswerId;
            newAns.Score4 = ans.Score4;
          } else if (ans.MinSelected) {
            newAns.MinSelected = ans.MinSelected;
            newAns.MinAnswerId = ans.MinAnswerId;
            newAns.Score1 = ans.Score1;
          }

          newAns.QuestionOfEachSpecificCritriaId =
            ans.QuestionOfEachSpecificCritriaId;
          newAns.MaxRowNumber = RowNumber;
          RowNumber = RowNumber + 1;
          newAns.MinRowNumber = RowNumber;
          RowNumber = RowNumber + 1;
          return newAns;
        });
        return item;
      });
      // //console.log("questionwithrownumber", questionDataWithRowNumber);
      setQuestions4(questionsData);
      //initResponseTest(questionsData);

      props.totalQuestion(questionsData.length);
    }
  }, [questionsData]);
  const initResponseTest = async (questionData) => {
    questionData.forEach((item) => {
      let newItem = {};
      newItem.QuestionId = item.QuestionId;
      item.answers.forEach((ans) => {
        if (ans.MaxAnswerId) {
          newItem.MaxAnswerId = ans.MaxAnswerId;
          newItem.Score4 = ans.Score4;
        } else if (ans.MinAnswerId) {
          newItem.MinAnswerId = ans.MinAnswerId;
          newItem.Score1 = ans.Score1;
        }
      });
      responseTest.push(newItem);
    });
    //console.log("initResponseTest:", responseTest);
  };

  useEffectSkipFirst(() => {
    // //console.log("maxValueAfter:", maxValue);
    let data = maxValue;
    let RowNumber = parseInt(data.split("-")[4]);
    let irow = RowNumber;

    setMin1Valu(irow.toString());
  }, [maxValue]);
  useEffectSkipFirst(() => {
    let data = minValue;
    let RowNumber = parseInt(data.split("-")[4]);
    let irow = RowNumber;
    setMax1Valu(irow.toString());
  }, [minValue]);

  const onValueMaxChange = (data) => {
    let userData = {};

    let QuestionId = data.split("-")[0];
    userData.QuestionId = QuestionId;
    scrollToComponent(sectionData[userData.QuestionId + 1], {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "linear",
    });

    let minOrMax = data.split("-")[3];

    if (minOrMax === "1") {
      let MaxAnswerId = data.split("-")[1];
      let Score4 = data.split("-")[2];
      userData.MaxAnswerId = MaxAnswerId;
      userData.Score4 = Score4;
    } else if (minOrMax === "0") {
      let MinAnswerId = data.split("-")[1];
      let Score1 = data.split("-")[2];
      userData.MinAnswerId = MinAnswerId;
      userData.Score1 = Score1;
    }
    // //console.log("userData:", userData);
    let samerecord = responseTest.filter(
      (item) => item.QuestionId == userData.QuestionId
    );
    // //console.log("samerecord:", samerecord);
    let sum1 = responseTest
      .map((item) => item.QuestionId + item.MaxAnswerId + item.MinAnswerId)
      .filter((value, index, self) => self.indexOf(value) === index);
    //console.log("sum", sum1, responseTest);
    props.increaseCount(sum1.length);

    if (samerecord.length > 0) {
      for (const obj of responseTest) {
        if (obj.QuestionId == userData.QuestionId) {
          if (minOrMax === "1") {
            obj.MaxAnswerId = userData.MaxAnswerId;
            obj.Score4 = userData.Score4;
            // //console.log("maxObj:", obj);
            return obj;
          } else if (minOrMax === "0") {
            obj.MinAnswerId = userData.MinAnswerId;
            obj.Score1 = userData.Score1;
            // //console.log("minObj:", obj);
            return obj;
          }
        }
      }
    } else {
      responseTest.push(userData);

      //props.increaseCount(responseTest.length);
    }
    let sum = responseTest
      .map((item) => item.QuestionId)
      .filter((value, index, self) => self.indexOf(value) === index);
    //console.log("sum", sum);
    props.increaseCount(sum.length);
  };

  const SendData = () => {
    let frmData = {
      Test5: responseTest,
    };
    // //console.log("resData:", frmData.Test5);
    CalScoreOfTest5(frmData);
  };

  return (
    <div id="NameQ4">
      <div className={Hiden ? "allStayleH" : "allStayleQ"}>
        {
          //  questions.question.map((item=>
          questions4
            ? questions4.map((item) => (
                <section
                  id={Hiden ? "MAxMinStyleHide" : "MAxMinStyle"}
                  key={item.QuestionId}
                  className={
                    parseInt(parseInt(item.QuestionId) % 2) == 0
                      ? "FirstBackground4"
                      : "SecondBackground4"
                  }
                >
                  <h4 id={item.QuestionId}>{item.Name}</h4>
                  <div className="AnswerMaxMin">
                    <div className="partition">
                      <div className="questuionMaxmin"></div>
                      <div className="answerMaxmin">
                        <div className="leftAnswer">
                          <h4 id={item.QuestionId + "-Max"}>بیشترین</h4>
                        </div>
                        <div className="leftAnswer">
                          <h4 id={item.QuestionId + "-Min"}>کمترین</h4>
                        </div>
                      </div>
                    </div>

                    {item.answers.map((o) => (
                      <div className="partition" key={o.AnswerId}>
                        <div className="questuionMaxmin">
                          <h5 id={o.AnswerId}>{o.Name}</h5>
                        </div>

                        <div className="answerMaxmin">
                          <div className="leftAnswer">
                            <input
                              onChange={(e) => {
                                setMaxValu(e.target.value);
                                onValueMaxChange(e.target.value);
                              }}
                              type="radio"
                              value={
                                o.QuestionId +
                                "-" +
                                o.AnswerId +
                                "-" +
                                o.QuestionOfEachSpecificCritriaId +
                                "-" +
                                "1" +
                                "-" +
                                o.MinRowNumber
                              }
                              id={
                                o.QuestionId +
                                "-" +
                                o.AnswerId +
                                "-" +
                                o.QuestionOfEachSpecificCritriaId +
                                "-" +
                                "1" +
                                "-" +
                                o.MinRowNumber
                              }
                              className="ticket"
                              //defaultChecked={o.MaxSelected}
                              disabled={o.MaxRowNumber == max1Value}
                              name={item.QuestionId + "Max"}
                            ></input>
                          </div>
                          <div className="leftAnswer">
                            <input
                              onChange={(e) => {
                                setMinValu(e.target.value);
                                onValueMaxChange(e.target.value);
                              }}
                              type="radio"
                              value={
                                o.QuestionId +
                                "-" +
                                o.AnswerId +
                                "-" +
                                o.QuestionOfEachSpecificCritriaId +
                                "-" +
                                "0" +
                                "-" +
                                o.MaxRowNumber
                              }
                              id={
                                o.QuestionId +
                                "-" +
                                o.AnswerId +
                                "-" +
                                o.QuestionOfEachSpecificCritriaId +
                                "-" +
                                "0" +
                                "-" +
                                o.MaxRowNumber
                              }
                              className="ticket"
                              // defaultChecked={o.MinSelected}
                              disabled={o.MinRowNumber == min1Value}
                              name={item.QuestionId + "Min"}
                            ></input>
                            {/* )} */}
                          </div>
                        </div>
                      </div>
                    ))}
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
                  "namq4",
                  packageData.PackageId,
                  packageData.currentTest
                );
                if (packageData.PackageId == 1) {
                  navigate("/Question1");
                } else {
                  setHiden(true);
                  setCharthide(true);
                  SetTestIdForShowingResult(5);
                  if (user) {
                    SetUserIdForShowingResult(user.id);
                  }
                  navigate("/SelectExams");
                }
              } else {
                setHiden(true);
                setCharthide(true);
                SetTestIdForShowingResult(5);
                if (user) {
                  SetUserIdForShowingResult(user.id);
                }
                navigate("/SelectExams");
              }
            }}
          >
            دیدن نتایج
          </button>
          {/* </NavLink> */}
        </div>
      </div>

      {Charthide ? <Resultexam Charthide={Charthide} /> : null}
    </div>
  );
};

export default NameQ4;

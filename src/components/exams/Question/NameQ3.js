import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question3.css";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import scrollToComponent from "react-scroll-to-component";

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
  const PicData = [
    { id: 11, pic: require("../../../images/vasvasi.jpeg") },
    { id: 12, pic: require("../../../images/negahdari.jpeg") },
    { id: 13, pic: require("../../../images/nakafi.jpeg") },
    { id: 14, pic: require("../../../images/power.jpeg") },
    { id: 15, pic: require("../../../images/amniyat.jpeg") },
    { id: 16, pic: require("../../../images/talash.jpeg") },
    { id: 1151, pic: require("../../../images/talash.jpeg") },
    { id: 1152, pic: require("../../../images/talash.jpeg") },
    { id: 1153, pic: require("../../../images/talash.jpeg") },
    { id: 1154, pic: require("../../../images/talash.jpeg") },
    { id: 1155, pic: require("../../../images/talash.jpeg") },
    { id: 1156, pic: require("../../../images/talash.jpeg") },
    { id: 1157, pic: require("../../../images/talash.jpeg") },
    { id: 1158, pic: require("../../../images/talash.jpeg") },
    { id: 1159, pic: require("../../../images/talash.jpeg") },
    { id: 11510, pic: require("../../../images/talash.jpeg") },
    { id: 11511, pic: require("../../../images/talash.jpeg") },
    { id: 11512, pic: require("../../../images/talash.jpeg") },
    { id: 11513, pic: require("../../../images/talash.jpeg") },
    { id: 11514, pic: require("../../../images/talash.jpeg") },
    { id: 11515, pic: require("../../../images/talash.jpeg") },
  ];

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
      if (questionsData) {
        questionsData.forEach((item) => {
          if (item.answers) {
            item.answers.filter((ans) => {
              if (ans.Selected) {
                let newItem = {};
                newItem.QuestionId = ans.QuestionId;
                newItem.AnswerId = ans.AnswerId;
                newItem.QuestionOfEachSpecificCritriaId =
                  ans.QuestionOfEachSpecificCritriaId;
                //qlist.push(newItem);
                responseTest.push(newItem);
                ////console.log("qlist", responseTest);
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
    userData.AnswerId = AnswerId;
    userData.QuestionOfEachSpecificCritriaId = QuestionOfEachSpecificCritriaId;
    let samerecord = responseTest.filter(
      (item) => item.QuestionId == userData.QuestionId
    );

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
                            // checked={o.Selected}
                            defaultChecked={o.Selected}
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
      )}
    </div>
  );
};

export default NameQ3;

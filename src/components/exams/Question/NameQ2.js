import React, { useEffect, useState, useContext, useRef } from "react";
import TestContext from "../../../Context/Test/testContext";
import "../../../css/exams/Question2.css";
import "../../../sass/Answer/Answer.scss";
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";
import scrollToComponent from "react-scroll-to-component";
import ShowResultForNameQ2 from "./ShowResultForNameQ2";

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

const NameQ2 = (props) => {
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
      setLoading(false);
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
      (item) => item.QuestionId == userData.QuestionId
    );
    // //console.log(samerecord);
    //console.log("userresponse0:", responseTest);
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
      //console.log("userresponse1:", responseTest);
      //props.increaseCount(responseTest.length);
    }
    let sum = responseTest
      .map((item) => item.QuestionId)
      .filter((value, index, self) => self.indexOf(value) === index);
    props.increaseCount(sum.length);
  };
  const SendData = () => {
    let frmData = {
      Test2: responseTest,
    };
    ////console.log("before sending data to server", frmData);
    CalScoreOfTest(frmData);
  };
  return (
    <div id="NameQ2">
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
                      ? "FirstBackground2"
                      : "SecondBackground2"
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
        <ShowResultForNameQ2 number={props.number} />
        // <div id="AnswerStyle1">
        //   {
        //     //  questions.question.map((item=>
        //     finalResultData
        //       ? finalResultData.map((item) => (
        //           // <section className="qtest primary">
        //           //   <h4>{item.Name}</h4>
        //           //   <h4>{item.userScore}</h4>
        //           // </section>

        //           <div className="boxAnswer">
        //             <div className="photoTemplate">
        //               <img
        //                 src={PicData.filter((i) => i.id == item.Id)[0].pic}
        //                 alt="Language"
        //               />
        //             </div>
        //             <div className="nameAnswer">
        //               <h4>{item.Name}</h4>
        //             </div>
        //             <div className="pointExam">
        //               <h5>{item.userScore}</h5>
        //             </div>
        //           </div>
        //         ))
        //       : null
        //   }

        // </div>
      )}
    </div>
  );
};

export default NameQ2;

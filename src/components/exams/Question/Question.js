import { useEffect, useState, React } from "react";
import "../../../css/exams/Question.css";
import Header from "../../tools/Header";
import Navbars from "../../tools/Navbars";
import { css } from "@emotion/react";
import { MbbcTest } from "../../tools/Constant";
import Qtitle from "./Qtitle";
import NameQ from "./NameQ";
import NameQ2 from "./NameQ2";
import NameQ3 from "./NameQ3";
import NameQ4 from "./NameQ4";
import NameQ5 from "./NameQ5";
import NameQ6 from "./NameQ6";

const Question = (props) => {
  const [loading, setLoading] = useState(false);
  const [userReplyCount, setUserReplyCount] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const override = css`
    display: flex;
    margin: 20rem auto;
  `;
  const getQuestionId = (number) => {
    if (number == 0) {
      return "Question";
    } else if (number == 2) {
      return "Question2";
    } else if (number == 3) {
      return "Question3";
    } else if (number == 4) {
      return "Question4";
    } else if (number == 5) {
      return "Question2";
    } else if (number == 6) {
      return "Question2";
    } else if (number == 7) {
      return "Question2";
    } else if (number == 8) {
      return "Question2";
    } else if (number == 9) {
      return "Question2";
    } else if (number == 10) {
      return "Question2";
    } else if (number == 111) {
      return "Question2";
    } else if (number == 112) {
      return "Question2";
    } else if (number == 113) {
      return "Question";
    } else if (number == 114) {
      return "Question2";
    } else if (number == 115) {
      return "Question3";
    } else if (number == 116) {
      return "Question";
    } else if (number == 117) {
      return "Question2";
    } else if (number == 118) {
      return "Question2";
    }
  };
  const increaseCount = (data) => {
    setUserReplyCount(data);
  };
  const totalQuestion1 = (data) => {
    setTotalQuestion(data);
  };

  return (
    <div id={getQuestionId(props.number)}>
      <Header />
      <Navbars />
      <Qtitle
        number={props.number}
        count={userReplyCount}
        totalQuestion={totalQuestion}
      />
      {props.number == 0 ? (
        <NameQ
          number={3}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 2 ? (
        <NameQ2
          number={2}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 3 ? (
        <NameQ3
          number={1}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 4 ? (
        <NameQ4
          number={4}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 5 ? (
        <NameQ2
          number={4}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 6 ? (
        <NameQ2
          number={6}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 7 ? (
        <NameQ2
          number={7}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 8 ? (
        <NameQ2
          number={8}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 9 ? (
        <NameQ2
          number={9}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 10 ? (
        <NameQ2
          number={10}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 111 ? (
        <NameQ2
          number={111}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 112 ? (
        <NameQ2
          number={112}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 113 ? (
        <NameQ
          number={113}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 114 ? (
        <NameQ2
          number={114}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 115 ? (
        <NameQ3
          number={115}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 117 ? (
        <NameQ6
          number={117}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ) : props.number == 116 ? (
        <NameQ5
          number={116}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />
      ): props.number == 118 ? (
        <NameQ2
          number={118}
          increaseCount={(data) => increaseCount(data)}
          totalQuestion={(data) => totalQuestion1(data)}
        />) : null}
    </div>
  );
};

export default Question;

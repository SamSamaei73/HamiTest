import React ,{useEffect,useState}from 'react';
import '../../../css/exams/Question.css';
import Total from '../../../images/icons8-help-48.png';
import Title from '../../../Jsons/NameTitle.json';
import Hourglass from "../../../images/5454.png";


const Qtitle = (props) => {
    const [titleName,setTitleName]=useState(null);
    const [countAnswer,setCountAnswer]=useState(0);
    useEffect(() => {

       setTitleName( Title.tests.filter((item)=>item.id==props.number)[0].title);
    //   props.count? setCountAnswer(props.count):0;
    }, [])
    

  
  return (
    <div id='Qtitle'>
        <header className='testTitle'>
            <div>
            </div>
        <div className='answerTest'>
            <img src={Hourglass} alt="Hourglass"/>
            <div className='topAnswer'>{props.totalQuestion}</div>
            <div className='downAnswer'>{props.count}</div>
        </div>
        <h2>{titleName}</h2>
        </header>
    </div>
  )
}

export default Qtitle
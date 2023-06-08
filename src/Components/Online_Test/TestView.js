import React, { useState,useEffect} from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBTypography,  
    MDBBtn
  } from 'mdb-react-ui-kit';
import QuestionView from './QuestionView';
import ShowResult from './ShowResult';

const TestView = ({data,userDetails}) => {
  const[quizDetail,setQuizDetail]=useState({
    count:0,
    selected:'',
    option:null
  })
  const [answers,setAnswers] = useState([]);
  const[seconds,setSeconds]=useState(10)
  const [currentQuestion,setCurrentQuestion] =useState(data && data[0] && data[0].Questions[quizDetail.count]);

  
  const handleNextClick = e =>{
    //if we haven't selected any option then the we give the default 
    if(!quizDetail.option && quizDetail.count>0 ){
        setAnswers([...answers,{[quizDetail.count]:-1}]);
    }else if(quizDetail.option && quizDetail.count>0){
      setAnswers([...answers,quizDetail.option]);
    }
    setQuizDetail((quizDetail)=>({...quizDetail,option:null}))
    setQuizDetail((quizDetail)=>({...quizDetail,count:quizDetail['count']+1}))
    setCurrentQuestion(()=>
     data[0].Questions[quizDetail.count]
    );
    setQuizDetail((quizDetail)=>({...quizDetail,selected:''}))
    setSeconds(10)
  }
  let timer
  useEffect(() => {
    timer=setInterval(()=>{
      setSeconds(seconds-1)
      if(seconds==0)
      {
        handleNextClick()
       
      }
    },1000)
    return () =>clearInterval(timer)
  })

  return (
    <MDBCard className="mt-14">
    <MDBCardBody>
      {
        data[0]?.Questions?.length>=quizDetail.count?
      
      <MDBTypography blockquote className='mb-0'>
        <QuestionView question={currentQuestion} quizDetail={quizDetail} setQuizDetail={setQuizDetail}  seconds={seconds} />
              <MDBBtn onClick={()=>handleNextClick()} className="mb-4" size="sm" >
                Next
              </MDBBtn>
      </MDBTypography>
              : <ShowResult userDetails={userDetails} answers={answers} data={data} />}
    </MDBCardBody>
  </MDBCard>
  )
}

export default TestView
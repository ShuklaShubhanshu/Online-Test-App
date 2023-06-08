import React from 'react'

const QuestionView = ({question,quizDetail,setQuizDetail,setSelected,seconds}) => {
    const handleClick= (e,index) =>{
        // setSelected(index);
        setQuizDetail((quizDetail)=>({...quizDetail,selected:index}))
        // setOption({[quizDetail.count]:index});
        setQuizDetail((quizDetail)=>({...quizDetail,option:{[quizDetail.count]:index}}))
    }
  return (
    <div style={{ marginTop: 50 }}>
        <p>{question && question.question}</p>
        <div style={{float:'right'}}>
             {seconds<10?"0"+seconds:seconds}
        </div>
        <h6>
            Choose the correct ans
        </h6>
        <div >
        {
            question && question?.options.map((option,index)=>(
               <>
                   <input onChange={(e)=>handleClick(e,index)} checked={quizDetail.selected === index} type="radio" value={option} name={option}  /> {index+1}.{option}
                </>
            ))
        }
        </div>
    </div>
  )
}

export default QuestionView
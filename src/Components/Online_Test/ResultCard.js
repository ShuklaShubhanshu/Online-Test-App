import React from 'react'
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
const ResultCard = ({data,userDetails,answers,testDetails}) => {
    const navigate=useNavigate()
    const handleClick=(()=>{
        navigate("/Home")
    })
  return (
    <>
    <div style={{ margin: 60, backgroundColor: "blanchedalmond" }}>
            <h1>ScoreBoard</h1>
            <h3>Name:{userDetails.name}</h3>
            <h3>SkillLevel:{userDetails.skillLevel}</h3>
            <h3>Score:{testDetails.resultPercentage}%</h3>
        </div>
        <h1>Question Summary</h1>
        <div style={{ marginTop: 30 }}>
            {data[0]?.Questions.map(
                ({ question, options, correctIndex }, index) => {
                    let ans = answers[index];
                    return (
                        <div>
                            <p style={{ fontSize: 20 }}>
                                {index + 1}.{question}
                            </p>
                            <>
                                {options.map((option, index) => (
                                    <>
                                        <input
                                            type="radio"
                                            value={option}
                                            name={option}
                                            checked={index === correctIndex}
                                        />
                                        {index + 1}.{option}
                                    </>
                                ))}
                                <div>
                                    {ans[index + 1] === correctIndex ? (
                                        <h6 style={{ color: "green", marginBottom: 30 }}>
                                            Right Answer
                                        </h6>
                                    ) : ans[index + 1] === -1 ? (
                                        <h6 style={{ color: "red", marginBottom: 30 }}>
                                            Not Answered
                                        </h6>
                                    ) : (
                                        <h6 style={{ color: "red", marginBottom: 30 }}>
                                            Wrong Answer-{options[ans[index + 1]]}{" "}
                                        </h6>
                                    )}
                                </div>
                            </>
                        </div>
                    );
                }
            )}
        </div>
        <MDBBtn onClick={() => handleClick()} className="mb-4" size="sm" >
            To HomePage
        </MDBBtn>
    </>
  )
}

export default ResultCard
import React, { useEffect, useState } from "react";
import ResultCard from "./ResultCard";


const ShowResult = ({ answers, data, userDetails }) => {

  const [testDetails, setTestDetails] = useState({
    noOfQuestionsAttempted: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
    resultPercentage: 0,
    timeTaken: "",
  });

//Calculate the scores
  useEffect(() => {
    for (let i = 0; i < data[0]?.Questions.length; i++) {
      const { correctIndex } = data[0]?.Questions[i];
      //increase the value of right or wrong answers
      if (correctIndex == answers[i][i + 1]) {
        setTestDetails((testDetails) => ({
          ...testDetails,
          rightAnswers: testDetails["rightAnswers"] + 1,
        }));
      } else {
        setTestDetails((testDetails) => ({
          ...testDetails,
          wrongAnswers: testDetails["wrongAnswers"] + 1,
        }));
      }
    }
    setTestDetails((testDetails) => ({
      ...testDetails,
      resultPercentage:
        (testDetails["rightAnswers"] / data[0]?.Questions.length) * 100,
    }));
  }, []);

  return (
    <ResultCard
      data={data}
      answers={answers}
      userDetails={userDetails}
      testDetails={testDetails}
    />
  );
};

export default ShowResult;

import React, { useState } from 'react'
import '../Styles/quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const quizarr = [

    {
        ques: "Which of the following is the correct name of React.js?",
        options: ["React", "React.js", "ReactJS", "All of the above"],
        opNo: ["A.","B.","C.", "D."]
    },
    {
        ques: "Which of the following are the advantages of React.js?",
        options: ["optionques2", "optionques2", "optionques2", "optionques2"],
        opNo: ["A.","B.","C.", "D."]
    },
    {
        ques: "Which of the following is not a disadvantage of React.js?",
        options: ["optionques3", "optionques3", "optionques3", "optionques3"],
        opNo: ["A.","B.","C.", "D."]
    },
    {
        ques: "Which of the following command is used to install create-react-app?",
        options: ["optionques4", "optionques4", "optionques4", "optionques4"],
        opNo: ["A.","B.","C.", "D."]
    },
    {
        ques: " What of the following is used in React.js to increase performance?",
        options: ["optionques5", "optionques5", "optionques5", "optionques5"],
        opNo: ["A.","B.","C.", "D."]
    }
];

export default function QuizPage() {
    const [page, setPage] = useState(0)
    const arr = Array(quizarr.length).fill(-1)
    const [ans, setAns] = useState(arr)
    const [selectedOp, setSelectedOp] = useState(-1)

    // console.log(ans)

    return (
        <>
            <div className='quiz-section'>
                <div className='quiz-container'>
                    <FontAwesomeIcon icon={faQuestion} className='q-mark' />
                    {/* <Carousel afterChange={onChange}> */}
                    {quizarr.map((quiz, index) => {
                        if (index !== page) {
                            return null;
                        }
                        return (
                            <div key={index}>
                                <div className='question'>
                                    <p>{quiz.ques}</p>
                                </div>
                                <div className='options'>
                                    {quiz.options.map((option, i) => {
                                        return <div key={i} onClick={() => {
                                            let temp = ans;
                                            temp[index] = i;
                                            setAns(temp);
                                            setSelectedOp(i)
                                            console.log(ans)
                                            console.log(i, selectedOp)
                                        }} className={`option-box ${selectedOp === i ? 'selected' : ''}`} ><span className='op-no'>{quiz.opNo[i]}</span><span style={{ padding: "0 5px" }}>{option}</span></div>
                                    })}
                                </div>
                                <div className='next-btn'>
                                    {page === quizarr.length - 1 &&
                                        <button className="btn">Submit</button>
                                    }
                                    {page < quizarr.length - 1 &&
                                        <button className="btn" onClick={() => setPage(page + 1)}>Next</button>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='quiz-btns'>
                    {
                        quizarr.map((item, i) => {
                            return <div key={i} onClick={() => setPage(i)} className={`btn ${page === i ? 'selected' : ''}`}>{i + 1}</div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

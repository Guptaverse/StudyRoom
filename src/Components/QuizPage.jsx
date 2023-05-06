import React, { useState } from 'react'
import '../Styles/quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const quizarr = [

    {
        ques: "Which of the following is the correct name of React.js?",
        options: ["React", "React.js", "ReactJS", "All of the above"]
    },
    {
        ques: "Which of the following are the advantages of React.js?",
        options: ["optionques2", "optionques2", "optionques2", "optionques2"]
    },
    {
        ques: "Which of the following is not a disadvantage of React.js?",
        options: ["optionques3", "optionques3", "optionques3", "optionques3"]
    },
    {
        ques: "Which of the following command is used to install create-react-app?",
        options: ["optionques4", "optionques4", "optionques4", "optionques4"]
    },
    {
        ques: " What of the following is used in React.js to increase performance?",
        options: ["optionques5", "optionques5", "optionques5", "optionques5"]
    }
];

export default function QuizPage() {
    const [page, setPage] = useState(0)

    return (
        <>
            <div className='quiz-section'>
                <div className='quiz-container'>
                    <FontAwesomeIcon icon={faQuestion} className='q-mark' />
                    {/* <Carousel afterChange={onChange}> */}
                    {quizarr.map((quiz, index) => {
                        if (index != page) {
                            return null;
                        }
                        return (
                            <div>
                                <div className='question'>
                                    <p>{quiz.ques}</p>
                                </div>
                                <div className='options'>
                                    <div className='option-container'>
                                        <div className='option-box' style={{
                                            marginRight: "15px"
                                        }}><span className='op-no'>A.</span><span style={{padding: "0 5px"}}>{quiz.options[0]}</span></div>
                                        <div className='option-box' style={{
                                            marginLeft: "15px"
                                        }}><span className='op-no'>B.</span><span style={{padding: "0 5px"}}>{quiz.options[1]}</span></div>
                                    </div>
                                    <div className='option-container'>
                                        <div className='option-box' style={{
                                            marginRight: "15px"
                                        }}><span className='op-no'>C.</span><span style={{padding: "0 5px"}}>{quiz.options[2]}</span></div>
                                        <div className='option-box' style={{
                                            marginLeft: "15px"
                                        }}><span className='op-no'>D.</span><span style={{padding: "0 5px"}}>{quiz.options[3]}</span></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='quiz-btns'>
                    {
                        quizarr.map((item, i) => {
                            return <div onClick={() => setPage(i)} className='btn'>{i + 1}</div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

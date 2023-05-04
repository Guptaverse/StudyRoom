import React from 'react'
import '../Styles/quiz.css'
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const quizarr = [
    {
        ques: "ques1",
        options: ["optionques1", "optionques1", "optionques1", "optionques1"]
    },
    {
        ques: "ques2",
        options: ["optionques2", "optionques2", "optionques2", "optionques2"]
    },
    // {
    //     ques: "ques3",
    //     options: ["optionques3", "optionques3", "optionques3", "optionques3"]
    // },
    // {
    //     ques: "ques4",
    //     options: ["optionques4", "optionques4", "optionques4", "optionques4"]
    // },
    // {
    //     ques: "ques5",
    //     options: ["optionques5", "optionques5", "optionques5", "optionques5"]
    // }
];

export default function QuizPage() {
    return (
        <>
            <div className='quiz-section'>
                <div className='quiz-container'>
                    <FontAwesomeIcon icon={faQuestion} className='q-mark' />
                    {quizarr.map((quiz) => {
                        return (
                            <div>
                                <div className='question'>
                                    <p>{quiz.ques}</p>
                                </div>
                                <div className='options'>
                                    <div className='option-container'>
                                        <div className='option-box'>{quiz.options[0]}</div>
                                        <div className='option-box'>{quiz.options[1]}</div>
                                    </div>
                                    <div className='option-container'>
                                        <div className='option-box'>{quiz.options[2]}</div>
                                        <div className='option-box'>{quiz.options[3]}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className='question'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eveniet saepe voluptatibus omnis in. Fuga!</p>
                    </div>
                    <div className='options'>
                        <div className='option-container'>
                            <div className='option-box'>Option A</div>
                            <div className='option-box'>Option B</div>
                        </div>
                        <div className='option-container'>
                            <div className='option-box'>Option C</div>
                            <div className='option-box'>Option D</div>
                        </div>
                    </div> */}
                </div>
                <Pagination defaultCurrent={1} total={20} />
            </div>
        </>
    )
}

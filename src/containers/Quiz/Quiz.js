import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                rightAnswerId: 2,
                id: 1,
                question: 'Какого цвета небо?',
                answers: [
                    { text: 'Черный', id: 1 },
                    { text: 'Синий', id: 2 },
                    { text: 'Красный', id: 3 },
                    { text: 'Зеленый', id: 4 },
                ]
            },
            {
                rightAnswerId: 3,
                id: 2,
                question: 'В каком году основали Санкт-Петербург?',
                answers: [
                    { text: '1700', id: 1 },
                    { text: '1705', id: 2 },
                    { text: '1782', id: 3 },
                    { text: '1703', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log(answerId);

        this.setState((state, props) => { return { activeQuestion: this.state.activeQuestion + 1 }});
        
    }

    render() { 
        return (
            <div className={classes.quiz}>
                <div className={classes.quizWrapper}>
                <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}
 
export default Quiz;
import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answeredState: null,
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
                rightAnswerId: 4,
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
        if (this.state.answeredState) {
            const key = Object.keys(this.state.answeredState)[0];
            if (this.state.answeredState[key] === 'success') {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];

        if (question.rightAnswerId === answerId) {
            this.setState({
                answeredState: {[answerId]: 'success'}
            });
            

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('Finished');
                } else {
                    this.setState(() => { 
                        return { 
                            activeQuestion: this.state.activeQuestion + 1,
                            answeredState: null 
                        }
                    });
                }

                window.clearTimeout(timeout);
            }, 1000)

        } else {
            this.setState({
                answeredState: {[answerId]: 'error'}
            })
        }
        
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
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
                        state={this.state.answeredState}
                    />
                </div>
            </div>
        );
    }
}
 
export default Quiz;
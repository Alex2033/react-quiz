import React from 'react';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = () => {
    return (
        <div className={classes.finishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you old?
                    <i className={'fa fa-times ' + classes.error}></i>
                </li>
                <li>
                    <strong>1. </strong>
                    How are you old?
                    <i className={'fa fa-check ' + classes.success}></i>
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    );
};

export default FinishedQuiz;
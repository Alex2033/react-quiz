import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className={classes.answersList}>
        { props.answers.map((answer, index) => {
            return (
                <AnswerItem 
                    answer={answer}
                />
            )
        }) }
    </ul>
);

export default AnswersList;
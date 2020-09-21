import React, { Component } from "react";
import classes from "./QuizCreator.module.scss";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class QuizCreator extends Component {
  submitHandler = (event) => {
    event.preventDefault();
  };

  onAddQuestionHandler = () => {};

  createQuizHandler = () => {};

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            <Input />
            <hr />
            <Input />
            <Input />
            <Input />
            <Input />

            <select></select>

            <Button type="primary" onClick={this.onAddQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button type="success" onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;

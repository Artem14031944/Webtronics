import { FC } from 'react';
import QuestionAccordionItem from './QuestionAccordionItem/QuestionAccordionItem';
import style from './QuestionAccordion.module.css'


const QuestionAccordion: FC = () => {

  const questions = [
    {id: 1, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
    {id: 2, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
    {id: 3, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
    {id: 4, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
    {id: 5, question: 'What is the price?', answer: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'},
  ];

  return (
    <div className={style.blockQuestions}>
      {questions?.map((question) => <QuestionAccordionItem key={question.id} props={question}/>)}
    </div>
  )
}

export default QuestionAccordion
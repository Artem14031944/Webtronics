import React from 'react';
import Line from './Line/Line';
import Step from './Step/Step';
import style from './StepsLine.module.css';

const StepsLine = () => {

  const steps = [
    {id: 1, step: 'Step 1', title: 'Introduction to Front-End ', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '},
    {id: 2, step: 'Step 2', title: 'Overview of Development', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '},
    {id: 3, step: 'Step 3', title: 'Introduction to Front-End ', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '},
    {id: 4, step: 'Step 4', title: 'Overview of Development', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '},
    {id: 5, step: 'Step 5', title: 'Introduction to Front-End ', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '},
    {id: 6, step: 'Step 6', title: 'Overview of Development', text: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. '},
  ];  

  return (
    <div className={style.steps}>
        <Line/>
        {steps?.map((step) => <Step key={step.id} props={step}/> )}
    </div>
  )
};

export default StepsLine
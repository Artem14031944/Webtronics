import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import icon_plus from '../../../../../public/plus.svg';
import icon_minus from '../../../../../public/minus.svg';
import style from './QuestionAccordionItem.module.css';

interface Iprops {
    props: {
        id: number;
        question: string;
        answer: string;
    }
}

const QuestionAccordionItem: FC<Iprops> = ({ props }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(props.id === 1) {
        setActive(true);
    } else {
        setActive(false);
    }
  }, []);

  return (
    <div className={active ? style.containerActive : style.containerNotActive}>
        <div className={style.header}>
            <h3 className={style.title}>{props.question}</h3> 
            <Image 
                src={active ? icon_minus : icon_plus} 
                alt="icon" 
                width={18} 
                height={18}
                onClick={() => setActive(prev => !prev)}
            />
        </div>
        {active && <p className={style.text}>{props.answer}</p>}
    </div>
  )
}

export default QuestionAccordionItem;
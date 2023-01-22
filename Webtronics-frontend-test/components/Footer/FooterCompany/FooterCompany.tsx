import { FC } from 'react';
import style from './FooterCompany.module.css';

interface Ilist {
    id: number;
    text: string;
};

const FooterCompany: FC = () => {

  const list = [
    {id: 1, text: 'About Us'},
    {id: 2, text: 'Review'},
    {id: 3, text: 'Steps'},
    {id: 4, text: 'Gallery'},
    {id: 5, text: 'FAQs'},
  ];

  return (
    <div className={style.container}>
      <h3 className={style.title}>Company</h3>
      <ul className={style.list}>
        {list?.map((item: Ilist) => (
        <li 
          className={style.list_item} 
          key={item.id}
        >
          {item.text}
        </li>
        ))}
      </ul>
    </div>
  )
};

export default FooterCompany;
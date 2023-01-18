import { FC } from 'react';
import Image from 'next/image';
import CardMentor from './CardMentor/CardMentor';
import icon_line from '../../../../public/line.svg';
import img_man_one from '../../../../public/Man_1.svg';
import img_man_two from '../../../../public/Man_2.svg';
import img_woman from '../../../../public/Woman_1.svg';
import icon_star from '../../../../public/Star_1.svg'
import style from './Mentors.module.css';
import OnContainerImg from '../../../OnContainerImg/OnContainerImg';

interface Imentors {
  title?: string
};

const Mentors: FC<Imentors> = ({ title }) => {

  const mentors = [
    {id: 1, img: img_man_two.src, name: 'Wade Warren', about: 'Front-end engineers work closely with designers'},
    {id: 2, img: img_woman.src, name: 'Kristin Watson', about: 'Front-end engineers work closely with designers'},
    {id: 3, img: img_man_one.src, name: 'Robert Fox', about: 'Front-end engineers work closely with designers'},
  ];

  const images = [
    {id: 1, image: icon_star?.src, width: 19, height: 22, alt:'star', top: 400, left: 150, right: 0, bottom: 0},
  ];


  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <Image 
        src={icon_line}
        alt="line"
        width={395}
        height={156}
      />
      {images.map((image) => <OnContainerImg key={image.id} props={image}/>)}
      <div className={style.mentors}>
        {mentors?.map((mentor) => (
          <CardMentor 
            key={mentor.id}
            id={mentor.id}
            img={mentor.img}
            name={mentor.name}
            about={mentor.about}
          />
        ))}
      </div>
    </div>
  )
};

export default Mentors;
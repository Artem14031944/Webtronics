import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeSliderDataAC } from '../../../../../redux/actions/sliderActions';
import SliderCarouselPanel from './SliderCarouselPanel/SliderCarouselPanel';
import SliderPhoto from './SliderPhoto/SliderPhoto';
import img_person_one_big from '../../../../../public/manOne.png';
import img_person_one_small from '../../../../../public/menOneSmall.png';
import img_person_two_big from '../../../../../public/womanOne.png';
import img_person_two_small from '../../../../../public/womanOneSmall.png';
import img_person_three_big from '../../../../../public/manTwo.png';
import img_person_three_small from '../../../../../public/menTwoSmall.png';
import style from './SliderCarousel.module.css';


const SliderCarousel: FC = () => {
  
  const dispatch = useDispatch();

  const sliderData = [
    {
      id: 1, 
      imgBig: img_person_one_big.src,
      imgSmall: img_person_one_small.src,
      title: 'Best courses ever', 
      text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.'
    },
    {
      id: 2, 
      imgBig: img_person_two_big.src,
      imgSmall: img_person_two_small.src,
      title: 'Amazing teaching', 
      text: 'The explanation is crazy it really doesn`t have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.'
    },
    { 
      id: 3,
      imgBig: img_person_three_big.src,
      imgSmall: img_person_three_small.src, 
      title: 'Simple and easy', 
      text: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.'
    },
  ];

  useEffect(() => {
    dispatch((changeSliderDataAC(sliderData)));
  }, []);

  return (
    <div className={style.container}>
      <SliderCarouselPanel/>
      <SliderPhoto/>
    </div>
  )
};

export default SliderCarousel;
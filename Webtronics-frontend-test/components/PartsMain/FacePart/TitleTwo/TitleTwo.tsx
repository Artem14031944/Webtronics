import { FC } from 'react';
import Button from '../../../Button/Button';
import style from './TitleTwo.module.css';

const TitleTwo: FC = () => {

    const clickButton = () => {
        console.log('Click Button');
    };

    return (
        <>
          <div className={style.container}>
            <Button 
                text={'Start my career change'}
                onClick={clickButton}
                type={'button'}
                disabled={false}
            />
            <h2 className={style.title}>Developer</h2>
          </div>
          <p className={style.text}>Courses</p>
        </>
    )
};

export default TitleTwo;
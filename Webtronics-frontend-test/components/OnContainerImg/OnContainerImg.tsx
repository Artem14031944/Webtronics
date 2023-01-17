import { FC } from 'react';
import Image from 'next/image';
import style from './OnContainerImg.module.css';

interface IonContainerImg {
    top: number;
    left: number;
    right: number;
    bottom: number;
    image: string;
    width: number;
    height: number;
    alt: string;
};

const OnContainerImg: FC<IonContainerImg> = ({ top, left, right, bottom, image, width, height, alt }) => (
    <div 
        className={style.container}  
        style={{
            top: top, 
            left: left, 
            right: right, 
            bottom: bottom
        }}
    >
        <Image 
            src={image}
            width={width}
            height={height}
            alt={alt}
        />
    </div>
); 

export default OnContainerImg;
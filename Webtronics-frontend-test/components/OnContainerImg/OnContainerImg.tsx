import { FC } from 'react';
import Image from 'next/image';
import style from './OnContainerImg.module.css';


export interface Iprops {
    props: {
        top: number;
        left: number;
        right: number;
        bottom: number;
        image: string;
        width: number;
        height: number;
        alt: string;
        key?: number;
    }
}


const OnContainerImg: FC<Iprops> = ({ props }) => (
    <div 
      className={style.container}  
      style={{
        top: props?.top, 
        left: props?.left, 
        right: props?.right, 
        bottom: props?.bottom
      }}
    >
      <Image 
        src={props?.image}
        width={props?.width}
        height={props?.height}
        alt={props?.alt}
     />
    </div>
); 

export default OnContainerImg;